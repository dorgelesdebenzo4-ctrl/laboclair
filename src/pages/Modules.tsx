import { Link, useParams } from 'react-router-dom'
import { modules, getModule, getLesson } from '../data/modules'
import { useStore } from '../lib/store'
import { Bar, Card, PageTitle } from '../components/ui'

export function Modules() {
  const s = useStore()
  return (
    <div>
      <PageTitle title="Modules" sub="Les grandes matières de la formation TBM." />
      <div className="space-y-3">
        {modules.map((m) => {
          const n = m.lessonIds.length
          const d = m.lessonIds.filter((id) => s.lessons[id]?.status === 'termine').length
          return (
            <Link key={m.id} to={`/module/${m.id}`} className="block">
              <Card className="hover:border-labo-400">
                <div className="flex items-start gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-2xl" style={{ background: `${m.couleur}22` }}>
                    {m.icone}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold uppercase tracking-wide" style={{ color: m.couleur }}>
                      Module {m.numero} · {m.priorite}
                    </div>
                    <div className="font-semibold text-slate-900 dark:text-white">{m.titre}</div>
                    <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{m.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Bar value={n ? d / n : 0} color={m.couleur} />
                      <span className="shrink-0 text-xs text-slate-500">{n ? `${d}/${n}` : 'Bientôt'}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function ModuleDetail() {
  const { id = '' } = useParams()
  const m = getModule(id)
  const s = useStore()
  if (!m) return <PageTitle title="Module introuvable" back="/modules" />

  return (
    <div>
      <PageTitle title={`${m.icone} ${m.titre}`} sub={m.description} back="/modules" />
      {m.lessonIds.length === 0 ? (
        <Card className="text-center">
          <div className="text-4xl">🚧</div>
          <p className="mt-2 font-semibold text-slate-900 dark:text-white">Leçons en préparation</p>
          <p className="mt-1 text-sm text-slate-500">Ce module sera ajouté selon le planning de révision ({m.priorite.toLowerCase()}).</p>
        </Card>
      ) : (
        <ol className="space-y-3">
          {m.lessonIds.map((lid, i) => {
            const l = getLesson(lid)!
            const st = s.lessons[lid]
            return (
              <li key={lid}>
                <Link to={`/lecon/${lid}`}>
                  <Card className="flex items-center gap-3 hover:border-labo-400">
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold ${
                        st?.status === 'termine' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600 dark:bg-ink-700 dark:text-slate-300'
                      }`}
                    >
                      {st?.status === 'termine' ? '✓' : i + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">{l.titre}</div>
                      <div className="text-xs text-slate-500">
                        ⏱️ {l.duree} min
                        {st?.status === 'en_cours' && ' · En cours'}
                        {st?.bestScore !== undefined && ` · Meilleur quiz : ${st.bestScore}/${st.total}`}
                      </div>
                    </div>
                    <span className="text-slate-400">›</span>
                  </Card>
                </Link>
              </li>
            )
          })}
        </ol>
      )}
    </div>
  )
}
