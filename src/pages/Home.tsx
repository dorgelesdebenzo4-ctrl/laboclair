import { Link } from 'react-router-dom'
import { modules, lessons, getLesson, allFlashcards } from '../data/modules'
import { useStore, streak } from '../lib/store'
import { Bar, Card, btnPrimary } from '../components/ui'

function greeting() {
  const h = new Date().getHours()
  return h < 12 ? 'Bonjour' : h < 18 ? 'Bon après-midi' : 'Bonsoir'
}

export default function Home() {
  const s = useStore()
  const done = lessons.filter((l) => s.lessons[l.id]?.status === 'termine').length
  const progress = lessons.length ? done / lessons.length : 0
  const days = streak(s.studyDays)
  const last = s.lastLessonId ? getLesson(s.lastLessonId) : undefined
  const next = last ?? lessons.find((l) => s.lessons[l.id]?.status !== 'termine') ?? lessons[0]
  const toReview = allFlashcards.filter((c) => s.cards[c.id] !== 'sais').length

  return (
    <div className="space-y-5">
      <div>
        <p className="text-slate-500 dark:text-slate-400">{greeting()} 👋</p>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Prêt pour une session de labo ?</h1>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card className="text-center">
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">🔥 {days}</div>
          <div className="text-xs text-slate-500">jour{days > 1 ? 's' : ''} de suite</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {done}/{lessons.length}
          </div>
          <div className="text-xs text-slate-500">leçons finies</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{toReview}</div>
          <div className="text-xs text-slate-500">cartes à revoir</div>
        </Card>
      </div>

      <Card>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-slate-900 dark:text-white">Progression globale</span>
          <span>{Math.round(progress * 100)} %</span>
        </div>
        <Bar value={progress} />
      </Card>

      {next && (
        <div className="rounded-2xl bg-gradient-to-br from-labo-600 to-labo-700 p-5 text-white shadow-lg">
          <p className="text-sm text-labo-100">{last ? 'Reprendre là où tu étais' : 'Commencer ici'}</p>
          <h2 className="mt-1 text-xl font-bold">{next.titre}</h2>
          <p className="mt-1 text-sm text-labo-100">⏱️ {next.duree} min · leçon + quiz</p>
          <Link to={`/lecon/${next.id}`} className={`${btnPrimary} mt-4 w-full bg-white !text-labo-700 hover:bg-labo-50`}>
            {last ? 'Continuer' : 'Commencer'} →
          </Link>
        </div>
      )}

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Mes modules</h2>
          <Link to="/modules" className="text-sm font-semibold text-labo-600 dark:text-labo-400">
            Tout voir
          </Link>
        </div>
        <div className="space-y-3">
          {modules.slice(0, 3).map((m) => {
            const n = m.lessonIds.length
            const d = m.lessonIds.filter((id) => s.lessons[id]?.status === 'termine').length
            return (
              <Link key={m.id} to={`/module/${m.id}`} className="block">
                <Card className="flex items-center gap-3 hover:border-labo-400">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-2xl" style={{ background: `${m.couleur}22` }}>
                    {m.icone}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-slate-900 dark:text-white">{m.titre}</div>
                    <div className="mb-1.5 text-xs text-slate-500">{n ? `${d}/${n} leçons` : 'Bientôt disponible'}</div>
                    <Bar value={n ? d / n : 0} color={m.couleur} />
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Link to="/cartes">
          <Card className="h-full hover:border-labo-400">
            <div className="text-2xl">🃏</div>
            <div className="mt-1 font-semibold text-slate-900 dark:text-white">Réviser les cartes</div>
            <div className="text-xs text-slate-500">Mémorise l’essentiel</div>
          </Card>
        </Link>
        <Link to="/calculs">
          <Card className="h-full hover:border-labo-400">
            <div className="text-2xl">🧮</div>
            <div className="mt-1 font-semibold text-slate-900 dark:text-white">Exercices de calcul</div>
            <div className="text-xs text-slate-500">Dilutions, unités…</div>
          </Card>
        </Link>
      </div>
    </div>
  )
}
