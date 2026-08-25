// Auto-discover app screenshots and APK dropped into src/assets/.
// Adding files to these folders requires no code changes - just rebuild/deploy.

const screenshotModules = import.meta.glob(
  '/src/assets/screenshots/*.{png,jpg,jpeg,webp,avif,gif}',
  { eager: true, import: 'default' }
) as Record<string, string>

const apkModules = import.meta.glob('/src/assets/downloads/*.apk', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export interface Screenshot {
  url: string
  label: string
}

function fileNameToLabel(path: string): string {
  const base = path.split('/').pop() ?? ''
  const name = base.replace(/\.[^.]+$/, '')
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim()
}

function sortedUrls(modules: Record<string, string>): string[] {
  return Object.keys(modules)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((key) => modules[key])
}

export const screenshots: Screenshot[] = Object.keys(screenshotModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path) => ({
    url: screenshotModules[path],
    label: fileNameToLabel(path),
  }))

export const apkUrl: string | null =
  sortedUrls(apkModules)[0] ?? null

const GITHUB_REPO = 'mobi1298-del/ussd'

export async function fetchLatestReleaseApk(): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`
    )
    if (!res.ok) return null
    const data = await res.json()
    const asset = data.assets?.find((a: { name: string }) => a.name.endsWith('.apk'))
    return asset?.browser_download_url ?? null
  } catch {
    return null
  }
}
