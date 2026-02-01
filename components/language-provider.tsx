"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Lang = "es" | "en"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LANG_STORAGE_KEY = "csg-lang"
const LanguageContext = createContext<LanguageContextValue | null>(null)

const detectLang = (locale: string | undefined | null): Lang => {
  if (!locale) return "es"
  return locale.toLowerCase().startsWith("es") ? "es" : "en"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")

  useEffect(() => {
    const stored = localStorage.getItem(LANG_STORAGE_KEY)
    const storedLang = stored === "es" || stored === "en" ? stored : null
    const detected = detectLang(navigator.languages?.[0] || navigator.language)
    setLang(storedLang ?? detected)
  }, [])

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return ctx
}
