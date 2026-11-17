import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/** Affiche un texte avec **gras** simple. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') ? (
          <strong key={i} className="font-semibold text-slate-900 dark:text-white">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-ink-600 dark:bg-ink-800 ${className}`}>
      {children}
    </div>
  )
}

export function Bar({ value, color = '#1b88b3' }: { value: number; color?: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-ink-600">
      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${Math.round(value * 100)}%`, background: color }} />
    </div>
  )
}

export function PageTitle({ title, sub, back }: { title: string; sub?: string; back?: string }) {
  return (
    <div className="mb-5">
      {back && (
        <Link to={back} className="mb-2 inline-flex items-center gap-1 text-sm text-labo-600 dark:text-labo-400">
          ← Retour
        </Link>
      )}
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h1>
      {sub && <p className="mt-1 text-slate-500 dark:text-slate-400">{sub}</p>}
    </div>
  )
}

export function Section({ title, icon, children }: { title: string; icon: string; children: ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-labo-600 dark:text-labo-400">
        <span aria-hidden>{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}

export const btn =
  'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold transition active:scale-[0.98] disabled:opacity-40'
export const btnPrimary = `${btn} bg-labo-600 text-white hover:bg-labo-700`
export const btnGhost = `${btn} border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 dark:border-ink-600 dark:bg-ink-800 dark:text-slate-100 dark:hover:bg-ink-700`
export const input =
  'w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 outline-none focus:border-labo-500 focus:ring-2 focus:ring-labo-200 dark:border-ink-600 dark:bg-ink-900 dark:text-white dark:focus:ring-labo-900'
