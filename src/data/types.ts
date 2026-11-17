export type DiagramKey = 'cellule' | 'unites' | 'concentration' | 'dilution' | 'sang'

export interface QuizQuestion {
  q: string
  options: string[]
  answer: number // index de la bonne réponse
  explication: string
}

export interface Source {
  titre: string
  url?: string
}

export interface Flashcard {
  id: string
  recto: string
  verso: string
}

export interface Lesson {
  id: string
  moduleId: string
  titre: string
  duree: number // minutes
  objectif: string
  explication: string[] // paragraphes (**gras** autorisé)
  schema?: { key: DiagramKey; legende: string }
  exempleLabo: string
  aRetenir: string[]
  motsCles: string[] // termes du glossaire
  quiz: QuizQuestion[]
  flashcards: Flashcard[]
  sources?: Source[]
  verifieAvecCours: boolean
}

export interface Module {
  id: string
  numero: number
  titre: string
  description: string
  couleur: string // couleur hex du module
  icone: string // emoji
  priorite: string
  lessonIds: string[]
}

export interface GlossaryEntry {
  terme: string
  definition: string
  moduleId: string
}
