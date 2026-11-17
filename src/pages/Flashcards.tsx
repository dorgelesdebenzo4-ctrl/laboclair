import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { allFlashcards, modules } from '../data/modules'
import { actions, useStore } from '../lib/store'
import { Card, PageTitle, btn } from '../components/ui'

export default function Flashcards() {
  const s = useStore()
  const [params, setParams] = useSearchParams()
  const moduleId = params.get('module') ?? 'tous'
  const [onlyReview, setOnlyReview] = useState(false)
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const deck = useMemo(
    () =>
      allFlashcards.filter(
        (c) => (moduleId === 'tous' || c.moduleId === moduleId) && (!onlyReview || s.cards[c.id] !== 'sais'),
      ),
    // le paquet ne change pas pendant qu'on répond
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [moduleId, onlyReview],
  )
  const card = deck[i % Math.max(deck.length, 1)]
  const known = deck.filter((c) => s.cards[c.id] === 'sais').length

  const answer = (v: 'sais' | 'revoir') => {
    if (!card) return
    actions.setCard(card.id, v)
    setFlipped(false)
    setTimeout(() => setI((x) => x + 1), 150)
  }

  const withCards = modules.filter((m) => allFlashcards.some((c) => c.moduleId === m.id))

  return (
    <div>
      <PageTitle title="Flashcards" sub="Touche la carte pour la retourner." />

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {[{ id: 'tous', titre: 'Toutes', icone: '✨' }, ...withCards].map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setParams(m.id === 'tous' ? {} : { module: m.id })
              setI(0)
              setFlipped(false)
            }}
            className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold ${
              moduleId === m.id ? 'bg-labo-600 text-white' : 'bg-white text-slate-600 dark:bg-ink-800 dark:text-slate-300'
            }`}
          >
            {m.icone} {m.titre}
          </button>
        ))}
      </div>

      <label className="mb-4 flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={onlyReview}
          onChange={(e) => {
            setOnlyReview(e.target.checked)
            setI(0)
          }}
          className="h-4 w-4 accent-labo-600"
        />
        Seulement les cartes à revoir
      </label>

      {!card ? (
        <Card className="text-center">
          <div className="text-5xl">🎉</div>
          <p className="mt-2 font-semibold text-slate-900 dark:text-white">Aucune carte à revoir ici.</p>
          <p className="text-sm text-slate-500">Décoche le filtre pour tout revoir.</p>
        </Card>
      ) : (
        <>
          <div className="mb-2 flex justify-between text-xs font-semibold text-slate-500">
            <span>
              Carte {(i % deck.length) + 1}/{deck.length}
            </span>
            <span>✅ {known} sues</span>
          </div>
          <button onClick={() => setFlipped((f) => !f)} className="block w-full [perspective:1000px]" aria-label="Retourner la carte">
            <div
              className={`relative h-64 w-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
            >
              <div className="absolute inset-0 grid place-items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-md [backface-visibility:hidden] dark:border-ink-600 dark:bg-ink-800">
                <div>
                  <div className="mb-3 text-xs font-bold uppercase tracking-wide text-labo-500">Question</div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{card.recto}</p>
                </div>
              </div>
              <div className="absolute inset-0 grid place-items-center rounded-3xl bg-gradient-to-br from-labo-600 to-labo-700 p-6 text-center text-white shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div>
                  <div className="mb-3 text-xs font-bold uppercase tracking-wide text-labo-100">Réponse</div>
                  <p className="text-xl font-bold">{card.verso}</p>
                </div>
              </div>
            </div>
          </button>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button onClick={() => answer('revoir')} className={`${btn} bg-amber-100 text-amber-900 dark:bg-amber-900/50 dark:text-amber-200`}>
              🔁 À revoir
            </button>
            <button onClick={() => answer('sais')} className={`${btn} bg-emerald-500 text-white`}>
              ✅ Je sais
            </button>
          </div>
        </>
      )}
    </div>
  )
}
