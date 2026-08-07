import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from '../locales/ar/common.json'
import en from '../locales/en/common.json'

export const SUPPORTED_LANGUAGES = ['ar', 'en'] as const
export type Language = (typeof SUPPORTED_LANGUAGES)[number]

export const LANGUAGE_STORAGE_KEY = 'qud_language'

export function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored === 'ar' || stored === 'en') return stored
  } catch {
    // ignore storage errors
  }
  return 'ar'
}

export function applyDocumentLanguage(lang: Language) {
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  document.title = i18n.t('meta.title', { lng: lang })
  const metaMap: Array<[string, string]> = [
    ['description', i18n.t('meta.description', { lng: lang })],
    ['og:title', i18n.t('meta.title', { lng: lang })],
    ['og:description', i18n.t('meta.description', { lng: lang })],
    ['twitter:title', i18n.t('meta.title', { lng: lang })],
    ['twitter:description', i18n.t('meta.description', { lng: lang })],
  ]
  for (const [name, content] of metaMap) {
    const el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
    if (el) el.setAttribute('content', content)
  }
}

i18n.use(initReactI18next).init({
  resources: {
    ar: { common: ar },
    en: { common: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'ar',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
})

applyDocumentLanguage(getInitialLanguage())

i18n.on('languageChanged', (lng) => {
  applyDocumentLanguage(lng as Language)
})

export default i18n
