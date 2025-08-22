import React from 'react'

export default function ProjectCard({ image, title, description, tags=[] }) {
  return (
    <article className="card overflow-hidden">
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs">
          {tags.map((t) => <li key={t} className="tag">{t}</li>)}
        </ul>
      </div>
    </article>
  )
}
