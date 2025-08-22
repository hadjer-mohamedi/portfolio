import React from 'react'
import { useI18n } from '../translations/LanguageContext'
import { Github, Linkedin, Mail, Globe } from 'lucide-react'

export default function Header() {
  const { t, lang, setLang } = useI18n()

  // Choose CV path based on selected language
  const cvPath = lang === 'fr' ? '/assets/cv/CV-FR.pdf' : '/assets/cv/CV-EN.pdf'

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-extrabold tracking-tight text-primary">HM</a>
        <nav className="hidden gap-6 md:flex">
          <a href="#projects" className="hover:text-primary">{t('nav.projects')}</a>
          <a href="#experience" className="hover:text-primary">{t('nav.experience')}</a>
          <a href="#skills" className="hover:text-primary">{t('nav.skills')}</a>
          <a href="#about" className="hover:text-primary">{t('nav.about')}</a>
          <a href="#contact" className="hover:text-primary">{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-2">
          {/* Dynamic CV Download */}
          <a 
            href={cvPath} 
            download 
            className="hidden md:inline-flex items-center rounded-full bg-primary px-4 py-2 text-white text-sm font-semibold shadow hover:bg-primary-dark"
          >
            {t('nav.downloadCV')}
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 border rounded-full p-1 text-sm">
            <button 
              className={`px-3 py-1 rounded-full ${lang==='en' ? 'bg-primary text-white' : ''}`} 
              onClick={() => setLang('en')} 
              aria-label="English"
            >
              {t('langSwitch.en')}
            </button>
            <button 
              className={`px-3 py-1 rounded-full ${lang==='fr' ? 'bg-primary text-white' : ''}`} 
              onClick={() => setLang('fr')} 
              aria-label="Français"
            >
              {t('langSwitch.fr')}
            </button>
          </div>
        </div>

        <button id="menuBtn" className="md:hidden inline-flex items-center justify-center p-2 border rounded-xl text-primary" aria-label="Open menu">☰</button>
      </div>

      {/* Mobile Menu */}
      <div id="mobileMenu" className="md:hidden hidden border-t bg-white/95">
        <nav className="mx-auto max-w-7xl px-4 py-4 grid gap-3 text-center">
          <a href="#projects" className="py-2">{t('nav.projects')}</a>
          <a href="#experience" className="py-2">{t('nav.experience')}</a>
          <a href="#skills" className="py-2">{t('nav.skills')}</a>
          <a href="#about" className="py-2">{t('nav.about')}</a>
          <a href="#contact" className="py-2">{t('nav.contact')}</a>
          {/* Dynamic CV in mobile menu too */}
          <a href={cvPath} download className="py-2">{t('nav.downloadCV')}</a>
        </nav>
      </div>
    </header>
  )
}
