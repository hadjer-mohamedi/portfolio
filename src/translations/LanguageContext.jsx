import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import en from './en.json'
import fr from './fr.json'

const dict = { en, fr }
const LangContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  useEffect(() => { localStorage.setItem('lang', lang) }, [lang])

  const t = (key) => {
    const parts = key.split('.')
    let node = dict[lang]
    for (const p of parts) node = node?.[p]
    return node ?? key
  }

  const value = useMemo(() => ({ lang, setLang, t }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useI18n() {
  return useContext(LangContext)
}
