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
        <defs>
          <linearGradient id="lc-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1b88b3" />
            <stop offset="1" stopColor="#0b4f6c" />
          </linearGradient>
          <linearGradient id="lc-liq" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8ee3ff" />
            <stop offset="1" stopColor="#3fc1e8" />
          </linearGradient>
        </defs>
        <rect width="512" height="512" rx="116" fill="url(#lc-bg)" />
        <path d="M212 112h88a10 10 0 0 1 0 20h-6v92l86 146c16 27-4 62-36 62H180c-32 0-52-35-36-62l86-146v-92h-6a10 10 0 0 1 0-20z" fill="#fff" />
        <path d="M176 330h160l30 51c7 12-2 27-16 27H162c-14 0-23-15-16-27z" fill="url(#lc-liq)" />
        <circle cx="232" cy="360" r="11" fill="#fff" opacity=".9" />
        <circle cx="270" cy="378" r="7" fill="#fff" opacity=".8" />
        <path d="M372 104l10 24 24 10-24 10-10 24-10-24-24-10 24-10z" fill="#ffd166" />
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
