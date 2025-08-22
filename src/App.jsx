import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { useI18n } from './translations/LanguageContext'
import bnaImg from './assets/projects/bna-gestion-engagement.png'

export default function App() {
  const { t } = useI18n()

  useEffect(() => {
    const btn = document.getElementById('menuBtn')
    const menu = document.getElementById('mobileMenu')
    const toggle = () => menu.classList.toggle('hidden')
    btn?.addEventListener('click', toggle)
    return () => btn?.removeEventListener('click', toggle)
  }, [])

  return (
    <div className="text-slate-800">
      <Header />
      <Hero />
      <Section id="projects" title={t('projects.title')}>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            image={bnaImg}
            title={t('projects.bnaTitle')}
            description={t('projects.bnaDesc')}
            tags={['React', '.NET', 'SQL Server', 'LDAP']}
          />
        </div>
      </Section>

      <Section id="experience" title={t('experience.title')}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-semibold">Banque Nationale d’Algérie (BNA)</p>
              <p className="text-sm text-slate-500">2024 – Present · Algiers</p>
            </div>
            <ul className="mt-3 list-disc ps-5 text-sm text-slate-700 space-y-1">
              <li>Financial reporting & engagements systems with RBAC and Power BI.</li>
              <li>React, .NET, SQL Server, REST APIs.</li>
            </ul>
          </div>
          <div className="card p-6">
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-semibold">Office National de la Météo (ONM)</p>
              <p className="text-sm text-slate-500">Nov 2023 – Nov 2024 · Algiers</p>
            </div>
            <ul className="mt-3 list-disc ps-5 text-sm text-slate-700 space-y-1">
              <li>Climate data APIs processing thousands of daily records.</li>
              <li>Django, Angular, PostgreSQL, GitLab.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="skills" title={t('skills.title')}>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="font-semibold">Languages</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="tag">Java</span>
              <span className="tag">Python</span>
              <span className="tag">C#</span>
              <span className="tag">JavaScript</span>
              <span className="tag">SQL</span>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Frameworks & Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="tag">Spring</span>
              <span className="tag">Django</span>
              <span className="tag">ASP.NET MVC</span>
              <span className="tag">Entity Framework</span>
              <span className="tag">Hibernate</span>
              <span className="tag">React</span>
              <span className="tag">Angular</span>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Databases & DevOps</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="tag">SQL Server</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">GitHub/GitLab</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Swagger</span>
              <span className="tag">Postman</span>
            </div>
          </div>
        </div>
      </Section>

      <Section id="about" title={t('about.title')}>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 card p-6">
            <p className="text-slate-700">{t('about.p1')}</p>
            <p className="mt-4 text-slate-700">{t('about.p2')}</p>
            <div className="mt-4 flex gap-3">
              <a href="/assets/cv/CV-EN.pdf" className="btn-outline">CV (EN)</a>
              <a href="/assets/cv/CV-FR.pdf" className="btn-outline">CV (FR)</a>
            </div>
          </div>
          <aside className="card p-6">
            <h3 className="font-semibold">Languages</h3>
            <ul className="mt-3 grid gap-2 text-sm">
              <li className="flex items-center justify-between"><span>English</span><span className="text-slate-500">Professional</span></li>
              <li className="flex items-center justify-between"><span>French</span><span className="text-slate-500">Intermediate</span></li>
              <li className="flex items-center justify-between"><span>Arabic</span><span className="text-slate-500">Native</span></li>
            </ul>
          </aside>
        </div>
      </Section>

      <Section id="contact" title={t('nav.contact')}>
        <ContactForm />
      </Section>

      <Footer />
    </div>
  )
}
