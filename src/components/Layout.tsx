import { useEffect } from 'react'
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom'
import { useStore } from '../lib/store'

const nav = [
  { to: '/', label: 'Accueil', icon: '🏠', end: true },
  { to: '/modules', label: 'Modules', icon: '📚' },
  { to: '/cartes', label: 'Cartes', icon: '🃏' },
  { to: '/glossaire', label: 'Glossaire', icon: '🔤' },
  { to: '/plus', label: 'Plus', icon: '☰' },
]

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <svg viewBox="0 0 512 512" className="h-8 w-8" aria-hidden>
        <rect width="512" height="512" rx="112" fill="#136d92" />
        <path d="M206 120h100v24h-14v86l84 140c14 24-3 52-31 52H167c-28 0-45-28-31-52l84-140v-86h-14z" fill="#fff" />
        <path d="M168 330h176l26 44c5 8-1 18-10 18H152c-9 0-15-10-10-18z" fill="#7fd1ef" />
      </svg>
      <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
        Labo<span className="text-labo-500">Clair</span>
      </span>
    </Link>
  )
}

export default function Layout() {
  const { theme } = useStore()
  const { pathname } = useLocation()

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      const dark = theme === 'sombre' || (theme === 'auto' && mq.matches)
      document.documentElement.classList.toggle('dark', dark)
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [theme])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 dark:bg-ink-900 dark:text-slate-300">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-slate-50/90 backdrop-blur dark:border-ink-700 dark:bg-ink-900/90">
        <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
          <Logo />
          <Link to="/recherche" className="rounded-full p-2 text-xl hover:bg-slate-200 dark:hover:bg-ink-700" aria-label="Rechercher">
            🔍
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 pb-28 pt-5">
        <Outlet />
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur dark:border-ink-700 dark:bg-ink-800/95">
        <div className="mx-auto grid max-w-2xl grid-cols-5">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-2 text-[11px] font-semibold transition ${
                  isActive ? 'text-labo-600 dark:text-labo-400' : 'text-slate-400 dark:text-slate-500'
                }`
              }
            >
              <span className="text-xl leading-none">{n.icon}</span>
              {n.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
