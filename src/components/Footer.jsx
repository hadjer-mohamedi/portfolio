import React from 'react'
import { useI18n } from '../translations/LanguageContext'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 text-center text-sm text-slate-600">
      © {year} Hadjer Mohamedi. {t('footer.copyright')}
    </footer>
  )
}
