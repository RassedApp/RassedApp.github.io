'use client'

import { useTranslation } from 'react-i18next'
import { LANGUAGE_STORAGE_KEY } from '../i18n'
import type { Language } from '../i18n'

const options: Array<{ code: Language; flag: string; label: string }> = [
  { code: 'ar', flag: '🇸🇾', label: 'العربية' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current: Language = i18n.resolvedLanguage === 'en' ? 'en' : 'ar'

  const setLanguage = (code: Language) => {
    if (code === current) return
    i18n.changeLanguage(code)
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, code)
    } catch {
      // ignore storage errors
    }
  }

  return (
    <div
      className="flex items-center gap-1 p-1 rounded-full bg-gray-100 border border-gray-200"
      role="group"
      aria-label="Language / اللغة"
    >
      {options.map((opt) => (
        <button
          key={opt.code}
          onClick={() => setLanguage(opt.code)}
          title={opt.label}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 ${
            current === opt.code
              ? 'bg-primary-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-primary-600'
          }`}
        >
          <span className="text-base leading-none">{opt.flag}</span>
          <span className="hidden sm:inline uppercase">{opt.code}</span>
        </button>
      ))}
    </div>
  )
}
