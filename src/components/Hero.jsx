import React from 'react'
import { useI18n } from '../translations/LanguageContext'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section id="home" className="section">
      <div className="mx-auto max-w-7xl grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{t('hero.badge')}</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">{t('hero.title')}</h1>
          <p className="mt-4 text-xl text-slate-700">{t('hero.subtitle')}</p>
          <p className="mt-4 text-slate-600">{t('hero.desc')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">🚀 {t('hero.seeProjects')}</a>
            <a href="mailto:hadjermohamedi8@gmail.com" className="btn-outline">📧 {t('hero.emailMe')}</a>
            <a href="https://linkedin.com/in/hadjer-mohamedi" target="_blank" className="btn-outline">💼 LinkedIn</a>
            <a href="https://github.com/" target="_blank" className="btn-outline">🐙 GitHub</a>
          </div>
        </div>
        <div className="relative order-first lg:order-last">
          <div className="card p-6">
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className="tag">⚛️ React.js</li>
              <li className="tag">#️⃣ C# / .NET</li>
              <li className="tag">🐍 Django</li>
              <li className="tag">☕ Java/JEE</li>
              <li className="tag">🗄️ SQL Server</li>
              <li className="tag">🐘 PostgreSQL</li>
              <li className="tag">🔌 REST APIs</li>
              <li className="tag">⚙️ CI/CD</li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">Tools: VS Code · Visual Studio · Eclipse · GitHub · GitLab · Maven · JIRA · Trello</p>
          </div>
        </div>
      </div>
    </section>
  )
}
