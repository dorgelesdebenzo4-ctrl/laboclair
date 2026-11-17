import type { Lesson, Module } from './types'
import { module1Lessons } from './lessons/module1'
import { module2Lessons } from './lessons/module2'
import { module2bLessons } from './lessons/module2b'
import { module3Lessons, module4Lessons, module5Lessons } from './lessons/module3to5'
import { module6Lessons, module7Lessons, module8Lessons } from './lessons/module6to8'

const m2 = [...module2Lessons, ...module2bLessons]

export const lessons: Lesson[] = [
  ...module1Lessons,
  ...m2,
  ...module3Lessons,
  ...module4Lessons,
  ...module5Lessons,
  ...module6Lessons,
  ...module7Lessons,
  ...module8Lessons,
]

export const modules: Module[] = [
  {
    id: 'm1', numero: 1, titre: 'Bases scientifiques', icone: '🧪', couleur: '#1b88b3',
    description: 'La cellule, les unités, les concentrations et les dilutions : le socle de tout le labo.',
    priorite: 'Avant janvier', lessonIds: module1Lessons.map((l) => l.id),
  },
  {
    id: 'm2', numero: 2, titre: 'Anatomie-physiologie', icone: '🫀', couleur: '#e05d5d',
    description: 'Comment fonctionne le corps : le sang, les reins, le foie, le système immunitaire.',
    priorite: 'Avant janvier', lessonIds: m2.map((l) => l.id),
  },
  {
    id: 'm3', numero: 3, titre: 'Hématologie', icone: '🩸', couleur: '#c2410c',
    description: 'Les cellules du sang : la NFS et les groupes sanguins.',
    priorite: 'Découverte avant janvier', lessonIds: module3Lessons.map((l) => l.id),
  },
  {
    id: 'm4', numero: 4, titre: 'Parasitologie / Mycologie', icone: '🦟', couleur: '#7c3aed',
    description: 'Paludisme, vers intestinaux, champignons : les parasites du quotidien en Côte d’Ivoire.',
    priorite: 'Découverte avant janvier', lessonIds: module4Lessons.map((l) => l.id),
  },
  {
    id: 'm5', numero: 5, titre: 'Bactériologie', icone: '🦠', couleur: '#16a34a',
    description: 'Identifier les bactéries : cultures, coloration de Gram, antibiogramme.',
    priorite: 'Découverte avant janvier', lessonIds: module5Lessons.map((l) => l.id),
  },
  {
    id: 'm6', numero: 6, titre: 'Biochimie', icone: '⚗️', couleur: '#ca8a04',
    description: 'Glycémie et diabète, bilan rénal, bilan hépatique.',
    priorite: 'Pendant la formation', lessonIds: module6Lessons.map((l) => l.id),
  },
  {
    id: 'm7', numero: 7, titre: 'Immunologie / Sérologie', icone: '🛡️', couleur: '#0891b2',
    description: 'Le principe des tests sérologiques, le dépistage du VIH et de l’hépatite B.',
    priorite: 'Pendant la formation', lessonIds: module7Lessons.map((l) => l.id),
  },
  {
    id: 'm8', numero: 8, titre: 'Hygiène et biosécurité', icone: '🧤', couleur: '#475569',
    description: 'Sécurité au labo, précautions standard, déchets de soins.',
    priorite: 'Pendant la formation', lessonIds: module8Lessons.map((l) => l.id),
  },
]

export const getModule = (id: string) => modules.find((m) => m.id === id)
export const getLesson = (id: string) => lessons.find((l) => l.id === id)
export const allFlashcards = lessons.flatMap((l) => l.flashcards.map((f) => ({ ...f, moduleId: l.moduleId, lessonId: l.id })))
