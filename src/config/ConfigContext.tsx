import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { defaultConfig } from './defaults'
import type { SiteConfig } from './defaults'

const ConfigContext = createContext<SiteConfig>(defaultConfig)

const CONFIG_SOURCES = [
  'https://raw.githubusercontent.com/RassedApp/RassedApp.github.io/master/public/config.json',
  `${import.meta.env.BASE_URL}config.json`,
]

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function deepMerge<T>(base: T, override: unknown): T {
  if (!isRecord(override)) return base
  const baseRecord = base as Record<string, unknown>
  const result: Record<string, unknown> = { ...baseRecord }
  for (const key of Object.keys(override)) {
    if (!(key in baseRecord)) continue
    const baseVal = baseRecord[key]
    const overrideVal = override[key]
    if (isRecord(baseVal) && isRecord(overrideVal)) {
      result[key] = deepMerge(baseVal, overrideVal)
    } else if (overrideVal !== undefined) {
      result[key] = overrideVal
    }
  }
  return result as T
}

export function ConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig)

  useEffect(() => {
    let cancelled = false
    async function load() {
      for (const url of CONFIG_SOURCES) {
        try {
          const res = await fetch(url, { cache: 'no-store' })
          if (!res.ok) continue
          const json: unknown = await res.json()
          if (!cancelled && isRecord(json)) {
            setConfig(deepMerge(defaultConfig, json))
          }
          return
        } catch {
          // try the next source
        }
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  const value = useMemo(() => config, [config])
  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
}

export function useConfig(): SiteConfig {
  return useContext(ConfigContext)
}
