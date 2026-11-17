import { useState } from 'react'
import { Link } from 'react-router-dom'
import { glossary } from '../data/glossary'
import { lessons, getModule } from '../data/modules'
import { Card, PageTitle, input } from '../components/ui'

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export function Glossary() {
  const [q, setQ] = useState('')
  const list = glossary
    .filter((g) => norm(g.terme + ' ' + g.definition).includes(norm(q)))
    .sort((a, b) => a.terme.localeCompare(b.terme, 'fr'))

  return (
    <div>
      <PageTitle title="Glossaire" sub={`${glossary.length} termes techniques expliqués simplement.`} />
      <input className={`${input} mb-4`} placeholder="Chercher un terme…" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="space-y-2">
        {list.map((g) => {
          const m = getModule(g.moduleId)
          return (
            <Card key={g.terme} className="!p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-slate-900 dark:text-white">{g.terme}</span>
                {m && (
                  <span className="shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: `${m.couleur}22`, color: m.couleur }}>
                    {m.titre}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm">{g.definition}</p>
            </Card>
          )
        })}
        {list.length === 0 && <p className="text-center text-slate-500">Aucun terme trouvé.</p>}
      </div>
    </div>
  )
}

export function Search() {
  const [q, setQ] = useState('')
  const n = norm(q.trim())
  const ls = n
    ? lessons.filter((l) => norm([l.titre, l.objectif, ...l.explication, l.exempleLabo, ...l.aRetenir].join(' ')).includes(n))
    : []
  const gs = n ? glossary.filter((g) => norm(g.terme + ' ' + g.definition).includes(n)) : []

  return (
    <div>
      <PageTitle title="Recherche" sub="Dans les leçons et le glossaire." />
      <input autoFocus className={`${input} mb-4`} placeholder="Ex. dilution, plasma, mole…" value={q} onChange={(e) => setQ(e.target.value)} />
      {n && (
        <div className="space-y-5">
          <div>
            <h2 className="mb-2 text-sm font-bold uppercase text-slate-500">Leçons ({ls.length})</h2>
            <div className="space-y-2">
              {ls.map((l) => (
                <Link key={l.id} to={`/lecon/${l.id}`} className="block">
                  <Card className="!p-3 hover:border-labo-400">
                    <div className="font-semibold text-slate-900 dark:text-white">{l.titre}</div>
                    <div className="text-xs text-slate-500">{getModule(l.moduleId)?.titre}</div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-bold uppercase text-slate-500">Glossaire ({gs.length})</h2>
            <div className="space-y-2">
              {gs.map((g) => (
                <Card key={g.terme} className="!p-3">
                  <div className="font-semibold text-slate-900 dark:text-white">{g.terme}</div>
                  <p className="text-sm">{g.definition}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
