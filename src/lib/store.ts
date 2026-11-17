import { useSyncExternalStore } from 'react'

// Progression stockée dans le navigateur (V1).
// Structure pensée pour être déplacée vers Supabase en V2 (un document par utilisateur).

export type LessonStatus = 'en_cours' | 'termine'
export type CardStatus = 'sais' | 'revoir'
export type Theme = 'clair' | 'sombre' | 'auto'

export interface AppState {
  version: 1
  lessons: Record<string, { status: LessonStatus; bestScore?: number; total?: number; updatedAt: string }>
  cards: Record<string, CardStatus>
  studyDays: string[] // AAAA-MM-JJ
  lastLessonId?: string
  theme: Theme
}

const KEY = 'laboclair:v1'
const empty: AppState = { version: 1, lessons: {}, cards: {}, studyDays: [], theme: 'auto' }

function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty
    return { ...empty, ...JSON.parse(raw) }
  } catch {
    return empty
  }
}

let state: AppState = load()
const listeners = new Set<() => void>()

function save(next: AppState) {
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    /* stockage indisponible : on garde en mémoire */
  }
  listeners.forEach((l) => l())
}

const today = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function markStudy(s: AppState): AppState {
  const t = today()
  return s.studyDays.includes(t) ? s : { ...s, studyDays: [...s.studyDays, t].slice(-400) }
}

export const actions = {
  openLesson(id: string) {
    const prev = state.lessons[id]
    save(
      markStudy({
        ...state,
        lastLessonId: id,
        lessons: { ...state.lessons, [id]: { ...prev, status: prev?.status ?? 'en_cours', updatedAt: new Date().toISOString() } },
      }),
    )
  },
  finishQuiz(id: string, score: number, total: number) {
    const prev = state.lessons[id]
    const best = Math.max(prev?.bestScore ?? 0, score)
    save(
      markStudy({
        ...state,
        lessons: {
          ...state.lessons,
          [id]: { status: 'termine', bestScore: best, total, updatedAt: new Date().toISOString() },
        },
      }),
    )
  },
  setCard(id: string, s: CardStatus) {
    save(markStudy({ ...state, cards: { ...state.cards, [id]: s } }))
  },
  setTheme(theme: Theme) {
    save({ ...state, theme })
  },
  reset() {
    save({ ...empty, theme: state.theme })
  },
  importData(json: string) {
    const data = JSON.parse(json)
    if (data?.version !== 1) throw new Error('Fichier non reconnu')
    save({ ...empty, ...data })
  },
  exportData() {
    return JSON.stringify(state, null, 2)
  },
}

export function useStore(): AppState {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => state,
  )
}

/** Nombre de jours consécutifs de révision (jusqu'à aujourd'hui ou hier). */
export function streak(days: string[]): number {
  const set = new Set(days)
  const d = new Date()
  const fmt = (x: Date) =>
    `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`
  if (!set.has(fmt(d))) d.setDate(d.getDate() - 1)
  let n = 0
  while (set.has(fmt(d))) {
    n++
    d.setDate(d.getDate() - 1)
  }
  return n
}
