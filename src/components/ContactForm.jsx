import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useI18n } from '../translations/LanguageContext'

export default function ContactForm() {
  const { t } = useI18n()
  const formRef = useRef()
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="mx-auto max-w-3xl card p-8 text-center">
      <h2 className="text-2xl font-bold">📬 {t('contact.title')}</h2>
      <p className="mt-3 text-slate-600">{t('contact.desc')}</p>
      <form ref={formRef} onSubmit={onSubmit} className="mt-6 grid gap-4 text-left">
        <input name="from_name" type="text" placeholder={t('contact.name')} className="w-full rounded-lg border px-4 py-2" required />
        <input name="reply_to" type="email" placeholder={t('contact.email')} className="w-full rounded-lg border px-4 py-2" required />
        <textarea name="message" placeholder={t('contact.message')} rows="4" className="w-full rounded-lg border px-4 py-2" required></textarea>
        <button type="submit" className="btn-primary w-full justify-center">{t('contact.send')}</button>
        {status==='success' && <p className="text-green-600 text-sm">{t('contact.success')}</p>}
        {status==='error' && <p className="text-rose-600 text-sm">{t('contact.error')}</p>}
      </form>
    </div>
  )
}
