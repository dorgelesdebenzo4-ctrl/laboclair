import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { modules, allFlashcards, lessons } from '../data/modules'
import { actions, useStore, streak, type Theme } from '../lib/store'
import { Bar, Card, PageTitle, btnGhost, btnPrimary } from '../components/ui'

export function More() {
  const items = [
    { to: '/calculs', icon: '🧮', t: 'Exercices de calcul', d: 'Dilutions, unités, concentrations' },
    { to: '/progression', icon: '📊', t: 'Ma progression', d: 'Statistiques par module' },
    { to: '/recherche', icon: '🔍', t: 'Recherche', d: 'Dans les leçons et le glossaire' },
    { to: '/parametres', icon: '⚙️', t: 'Paramètres', d: 'Thème, sauvegarde, réinitialisation' },
  ]
  return (
    <div>
      <PageTitle title="Plus" />
      <div className="space-y-3">
        {items.map((i) => (
          <Link key={i.to} to={i.to} className="block">
            <Card className="flex items-center gap-3 hover:border-labo-400">
              <span className="text-2xl">{i.icon}</span>
              <div className="flex-1">
                <div className="font-semibold text-slate-900 dark:text-white">{i.t}</div>
                <div className="text-xs text-slate-500">{i.d}</div>
              </div>
              <span className="text-slate-400">›</span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function Progression() {
  const s = useStore()
  const done = lessons.filter((l) => s.lessons[l.id]?.status === 'termine').length
  const known = allFlashcards.filter((c) => s.cards[c.id] === 'sais').length
  const quizzes = lessons.map((l) => s.lessons[l.id]).filter((x) => x?.bestScore !== undefined)
  const avg = quizzes.length ? quizzes.reduce((a, x) => a + x!.bestScore! / x!.total!, 0) / quizzes.length : 0

  return (
    <div>
      <PageTitle title="Ma progression" back="/plus" />
      <div className="mb-5 grid grid-cols-2 gap-3">
        <Card><div className="text-2xl font-extrabold text-slate-900 dark:text-white">🔥 {streak(s.studyDays)}</div><div className="text-xs text-slate-500">jours de suite</div></Card>
        <Card><div className="text-2xl font-extrabold text-slate-900 dark:text-white">📅 {s.studyDays.length}</div><div className="text-xs text-slate-500">jours de révision au total</div></Card>
        <Card><div className="text-2xl font-extrabold text-slate-900 dark:text-white">{done}/{lessons.length}</div><div className="text-xs text-slate-500">leçons terminées</div></Card>
        <Card><div className="text-2xl font-extrabold text-slate-900 dark:text-white">{Math.round(avg * 100)} %</div><div className="text-xs text-slate-500">réussite moyenne aux quiz</div></Card>
      </div>
      <Card className="mb-5">
        <div className="mb-2 flex justify-between text-sm"><span className="font-semibold text-slate-900 dark:text-white">Flashcards sues</span><span>{known}/{allFlashcards.length}</span></div>
        <Bar value={allFlashcards.length ? known / allFlashcards.length : 0} color="#16a34a" />
      </Card>
      <h2 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Par module</h2>
      <div className="space-y-3">
        {modules.map((m) => {
          const n = m.lessonIds.length
          const d = m.lessonIds.filter((id) => s.lessons[id]?.status === 'termine').length
          return (
            <Card key={m.id} className="!p-3">
              <div className="mb-1.5 flex justify-between text-sm"><span className="font-semibold text-slate-900 dark:text-white">{m.icone} {m.titre}</span><span className="text-slate-500">{n ? `${d}/${n}` : 'Bientôt'}</span></div>
              <Bar value={n ? d / n : 0} color={m.couleur} />
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export function Settings() {
  const s = useStore()
  const file = useRef<HTMLInputElement>(null)
  const [msg, setMsg] = useState('')
  const [confirmReset, setConfirmReset] = useState(false)

  const exportData = () => {
    const blob = new Blob([actions.exportData()], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `laboclair-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    setMsg('Sauvegarde téléchargée ✅')
  }
  const importData = async (f: File) => {
    try {
      actions.importData(await f.text())
      setMsg('Progression restaurée ✅')
    } catch {
      setMsg('Fichier non reconnu ❌')
    }
  }

  return (
    <div>
      <PageTitle title="Paramètres" back="/plus" />
      <Card className="mb-4">
        <div className="mb-3 font-semibold text-slate-900 dark:text-white">Apparence</div>
        <div className="grid grid-cols-3 gap-2">
          {([['clair', '☀️ Clair'], ['sombre', '🌙 Sombre'], ['auto', '📱 Auto']] as [Theme, string][]).map(([t, l]) => (
            <button key={t} onClick={() => actions.setTheme(t)} className={s.theme === t ? btnPrimary : btnGhost}>{l}</button>
          ))}
        </div>
      </Card>
      <Card className="mb-4 space-y-3">
        <div className="font-semibold text-slate-900 dark:text-white">Sauvegarde</div>
        <p className="text-sm text-slate-500">Ta progression est enregistrée sur cet appareil. Télécharge une sauvegarde pour la garder ou la transférer.</p>
        <div className="grid grid-cols-2 gap-2">
          <button className={btnGhost} onClick={exportData}>⬇️ Exporter</button>
          <button className={btnGhost} onClick={() => file.current?.click()}>⬆️ Importer</button>
        </div>
        <input ref={file} type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files?.[0] && importData(e.target.files[0])} />
        {msg && <p className="text-sm font-semibold">{msg}</p>}
      </Card>
      <Card className="mb-4 space-y-3">
        <div className="font-semibold text-slate-900 dark:text-white">Réinitialiser</div>
        <p className="text-sm text-slate-500">Efface toute la progression (leçons, quiz, cartes).</p>
        {confirmReset ? (
          <div className="grid grid-cols-2 gap-2">
            <button className={btnGhost} onClick={() => setConfirmReset(false)}>Annuler</button>
            <button
              className="rounded-xl bg-rose-600 py-3 font-semibold text-white"
              onClick={() => {
                actions.reset()
                setConfirmReset(false)
                setMsg('Progression effacée')
              }}
            >
              Oui, tout effacer
            </button>
          </div>
        ) : (
          <button className="w-full rounded-xl border border-rose-300 py-3 font-semibold text-rose-600 dark:border-rose-800" onClick={() => setConfirmReset(true)}>
            Tout effacer
          </button>
        )}
      </Card>
      <p className="text-center text-xs text-slate-500">
        LaboClair · V1 · Contenu rédigé avec Claude, à vérifier avec les cours de l’INFAS.
      </p>
    </div>
  )
}
