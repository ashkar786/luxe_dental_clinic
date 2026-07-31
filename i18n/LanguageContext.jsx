import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'luxe-lang'

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return localStorage.getItem(STORAGE_KEY) === 'ar' ? 'ar' : 'en'
  })

  const isRTL = lang === 'ar'
  const t = translations[lang]

  const setLang = (next) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.title =
      lang === 'ar'
        ? 'عيادة لوكس لطب الأسنان | رعاية أسنان راقية في دبي'
        : 'Luxe Dental Clinic | Premium Dental Care in Dubai'
  }, [lang, isRTL])

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t, isRTL }),
    [lang, t, isRTL],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
