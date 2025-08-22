import React from 'react'

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section bg-white/60">
      <div className="mx-auto max-w-7xl">
        {title && <h2 className="text-2xl font-bold tracking-tight text-center">{title}</h2>}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}
