import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLesson, getModule, lessons } from '../data/modules'
import { glossary } from '../data/glossary'
import { actions } from '../lib/store'
import { Diagram } from '../diagrams/Diagrams'
import { Card, PageTitle, Rich, Section, btnPrimary, btnGhost } from '../components/ui'
import type { QuizQuestion } from '../data/types'

function Quiz({ lessonId, questions }: { lessonId: string; questions: QuizQuestion[] }) {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const q = questions[i]

  const pick = (k: number) => {
    if (picked !== null) return
    setPicked(k)
    if (k === q.answer) setScore((s) => s + 1)
  }
  const next = () => {
    if (i + 1 < questions.length) {
      setI(i + 1)
      setPicked(null)
    } else {
      setDone(true)
      actions.finishQuiz(lessonId, score, questions.length)
    }
  }
  const restart = () => {
    setI(0)
    setPicked(null)
    setScore(0)
    setDone(false)
  }

  if (done) {
    const ratio = score / questions.length
    return (
      <Card className="text-center">
        <div className="text-5xl">{ratio === 1 ? '🏆' : ratio >= 0.6 ? '👏' : '💪'}</div>
        <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">
          {score} / {questions.length}
        </p>
        <p className="mt-1 text-slate-500">
          {ratio === 1 ? 'Parfait, tu maîtrises cette leçon !' : ratio >= 0.6 ? 'Bien joué ! Relis les points ratés.' : 'Relis la leçon puis réessaie : c’est comme ça qu’on apprend.'}
        </p>
        <button onClick={restart} className={`${btnGhost} mt-4`}>
          Recommencer le quiz
        </button>
      </Card>
    )
  }

  return (
    <Card>
      <div className="mb-3 flex justify-between text-xs font-semibold text-slate-500">
        <span>
          Question {i + 1}/{questions.length}
        </span>
        <span>Score : {score}</span>
      </div>
      <p className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">{q.q}</p>
      <div className="space-y-2">
        {q.options.map((o, k) => {
          const state =
            picked === null ? 'idle' : k === q.answer ? 'good' : k === picked ? 'bad' : 'off'
          return (
            <button
              key={k}
              onClick={() => pick(k)}
              className={`w-full rounded-xl border-2 px-4 py-3 text-left font-medium transition ${
                state === 'idle'
                  ? 'border-slate-200 hover:border-labo-400 dark:border-ink-600'
                  : state === 'good'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200'
                    : state === 'bad'
                      ? 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950 dark:text-rose-200'
                      : 'border-slate-200 opacity-50 dark:border-ink-600'
              }`}
            >
              {o}
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm dark:bg-ink-900">
          <p className="font-bold text-slate-900 dark:text-white">{picked === q.answer ? '✅ Bonne réponse !' : '❌ Pas tout à fait.'}</p>
          <p className="mt-1">{q.explication}</p>
          <button onClick={next} className={`${btnPrimary} mt-3 w-full`}>
            {i + 1 < questions.length ? 'Question suivante →' : 'Voir mon score'}
          </button>
        </div>
      )}
    </Card>
  )
}

export default function Lesson() {
  const { id = '' } = useParams()
  const l = getLesson(id)
  useEffect(() => {
    if (l) actions.openLesson(l.id)
  }, [l])
  if (!l) return <PageTitle title="Leçon introuvable" back="/modules" />

  const m = getModule(l.moduleId)!
  const idx = lessons.findIndex((x) => x.id === l.id)
  const nextLesson = lessons[idx + 1]
  const terms = glossary.filter((g) => l.motsCles.includes(g.terme))

  return (
    <article>
      <div className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color: m.couleur }}>
        {m.icone} Module {m.numero} · {m.titre}
      </div>
      <PageTitle title={l.titre} sub={`⏱️ ${l.duree} min`} back={`/module/${m.id}`} />

      {!l.verifieAvecCours && (
        <div className="mb-5 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200">
          ⚠️ Pas encore vérifié avec ton cours de l’INFAS. En cas de différence, c’est ton cours qui fait foi.
        </div>
      )}

      <Section title="Objectif" icon="🎯">
        <Card className="border-l-4" >
          <p className="text-slate-800 dark:text-slate-200">{l.objectif}</p>
        </Card>
      </Section>

      <Section title="Explication" icon="💡">
        <div className="space-y-3 text-[17px] leading-relaxed">
          {l.explication.map((p, i) => (
            <p key={i}>
              <Rich text={p} />
            </p>
          ))}
        </div>
      </Section>

      {l.schema && (
        <Section title="Schéma" icon="🖼️">
          <Card>
            <Diagram k={l.schema.key} />
            <p className="mt-2 text-center text-sm italic text-slate-500">{l.schema.legende}</p>
          </Card>
        </Section>
      )}

      <Section title="Au labo" icon="🔬">
        <Card className="bg-labo-50 dark:bg-labo-900/40">
          <p className="leading-relaxed">
            <Rich text={l.exempleLabo} />
          </p>
        </Card>
      </Section>

      <Section title="À retenir" icon="📌">
        <Card>
          <ul className="space-y-2">
            {l.aRetenir.map((r, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-emerald-500">✔</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {terms.length > 0 && (
        <Section title="Mots clés" icon="🔤">
          <div className="flex flex-wrap gap-2">
            {terms.map((t) => (
              <details key={t.terme} className="group rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-ink-600 dark:bg-ink-800">
                <summary className="cursor-pointer list-none font-semibold text-labo-700 dark:text-labo-300">{t.terme}</summary>
                <p className="mt-1 max-w-xs text-slate-600 dark:text-slate-300">{t.definition}</p>
              </details>
            ))}
          </div>
        </Section>
      )}

      {l.sources && l.sources.length > 0 && (
        <Section title="Sources" icon="📚">
          <Card>
            <p className="mb-2 text-sm text-slate-500">Cette leçon a été rédigée à partir de :</p>
            <ul className="space-y-1.5 text-sm">
              {l.sources.map((src) => (
                <li key={src.titre} className="flex gap-2">
                  <span aria-hidden>•</span>
                  {src.url ? (
                    <a href={src.url} target="_blank" rel="noreferrer" className="text-labo-700 underline decoration-labo-300 underline-offset-2 dark:text-labo-300">
                      {src.titre}
                    </a>
                  ) : (
                    <span>{src.titre}</span>
                  )}
                </li>
              ))}
            </ul>
          </Card>
        </Section>
      )}

      <Section title="Mini-quiz" icon="🧠">
        <Quiz key={l.id} lessonId={l.id} questions={l.quiz} />
      </Section>

      <div className="grid grid-cols-2 gap-3">
        <Link to={`/cartes?module=${m.id}`} className={btnGhost}>
          🃏 Cartes
        </Link>
        {nextLesson ? (
          <Link to={`/lecon/${nextLesson.id}`} className={btnPrimary}>
            Leçon suivante →
          </Link>
        ) : (
          <Link to="/modules" className={btnPrimary}>
            Modules
          </Link>
        )}
      </div>
    </article>
  )
}
