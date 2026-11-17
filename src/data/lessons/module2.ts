import type { Lesson } from '../types'
import { S } from '../sources'

// MODULE 2 — Anatomie-physiologie (première leçon)
// Les valeurs données sont des ordres de grandeur : les valeurs de référence officielles sont celles de ton cours.

export const module2Lessons: Lesson[] = [
  {
    id: 'm2-sang',
    moduleId: 'm2',
    titre: 'Le sang et ses composants',
    duree: 15,
    objectif:
      'Connaître la composition du sang, le rôle de chacun de ses éléments, et faire la différence entre plasma et sérum.',
    explication: [
      "Le sang est le **liquide de transport** du corps. Il apporte l'oxygène et les nutriments aux cellules, emporte les déchets, transporte les hormones et participe à la défense contre les microbes. Un adulte en a environ **5 litres**.",
      "Si on laisse reposer ou si on **centrifuge** un tube de sang (non coagulé), il se sépare en deux parties. En haut, un liquide jaune clair : le **plasma**, qui représente **plus de la moitié** du volume du sang. En bas, les cellules : les **éléments figurés**. Les globules rouges représentent à eux seuls **environ 40 %** du volume sanguin.",
      "Le **plasma** est surtout composé d'**eau**, dans laquelle sont dissous des **sels minéraux** (les électrolytes) et des **protéines**. La principale protéine du plasma est l'**albumine**. On y trouve aussi le **fibrinogène** (une protéine de la coagulation), du glucose, des hormones et des déchets.",
      "Les **éléments figurés** sont de trois types. Les **globules rouges (hématies)** transportent l'oxygène grâce à l'**hémoglobine** : ce sont les plus nombreux. Les **globules blancs (leucocytes)** défendent le corps contre les infections. Les **plaquettes (thrombocytes)** arrêtent les saignements en participant à la **coagulation**.",
      "**Plasma ou sérum ?** Si on laisse le sang **coaguler** dans un tube sec, le liquide qui reste est le **sérum**. Le sérum, c'est le plasma **sans le fibrinogène** (et les autres facteurs de coagulation), qui ont été utilisés pour former le caillot. Pour obtenir du plasma, on utilise un tube qui contient un **anticoagulant**.",
    ],
    schema: { key: 'sang', legende: 'Un tube de sang après centrifugation' },
    exempleLabo:
      "C'est pour cela que la couleur du bouchon du tube compte ! Le tube **EDTA** (bouchon violet) empêche la coagulation : il sert à la **NFS** (numération formule sanguine). Le **tube sec** (bouchon rouge) laisse le sang coaguler pour obtenir du **sérum**, utilisé en biochimie et en sérologie. Le tube **citraté** (bouchon bleu) sert aux tests de coagulation. Les couleurs peuvent varier selon les fabricants : vérifie toujours avec le protocole de ton labo.",
    aRetenir: [
      'Sang = plasma (plus de la moitié du volume) + éléments figurés (globules rouges ≈ 40 %).',
      'Globules rouges = transport de l’oxygène (hémoglobine).',
      'Globules blancs = défense ; plaquettes = coagulation.',
      'Sérum = plasma sans le fibrinogène (obtenu après coagulation).',
      'Plasma = tube avec anticoagulant ; sérum = tube sec.',
    ],
    motsCles: ['Plasma', 'Sérum', 'Hématie', 'Hémoglobine', 'Leucocyte', 'Plaquette', 'Coagulation', 'Centrifugation', 'NFS'],
    quiz: [
      {
        q: 'Quelle cellule du sang transporte l’oxygène ?',
        options: ['Le globule blanc', 'La plaquette', 'Le globule rouge', 'Le lymphocyte'],
        answer: 2,
        explication: "Le globule rouge (hématie) transporte l'oxygène grâce à l'hémoglobine.",
      },
      {
        q: 'Quelle est la différence entre plasma et sérum ?',
        options: [
          'Le sérum contient des globules rouges',
          'Le sérum ne contient plus de fibrinogène',
          'Le plasma ne contient pas d’eau',
          'Il n’y a aucune différence',
        ],
        answer: 1,
        explication: 'Le fibrinogène est consommé pendant la coagulation : le sérum est le plasma sans fibrinogène.',
      },
      {
        q: 'Quel est le rôle principal des plaquettes ?',
        options: ['Transporter l’oxygène', 'Défendre contre les microbes', 'Participer à la coagulation', 'Produire des hormones'],
        answer: 2,
        explication: 'Les plaquettes (thrombocytes) participent à l’arrêt des saignements.',
      },
      {
        q: 'Après centrifugation, le plasma représente…',
        options: ['Environ 10 % du sang', 'Environ 25 % du sang', 'Plus de la moitié du sang', 'Plus de 90 % du sang'],
        answer: 2,
        explication: 'Le plasma représente plus de la moitié du volume sanguin ; les globules rouges environ 40 %.',
      },
      {
        q: 'Pour obtenir du sérum, on prélève le sang dans…',
        options: ['Un tube EDTA', 'Un tube sec', 'Un tube citraté', 'Un tube hépariné'],
        answer: 1,
        explication: 'Le tube sec ne contient pas d’anticoagulant : le sang coagule et on récupère le sérum.',
      },
    ],
    flashcards: [
      { id: 'm2-s-1', recto: 'Composition du sang ?', verso: 'Plasma (plus de la moitié) + éléments figurés (globules rouges ≈ 40 %).' },
      { id: 'm2-s-2', recto: 'Rôle des globules blancs ?', verso: 'Défendre le corps contre les infections.' },
      { id: 'm2-s-3', recto: 'Sérum = ?', verso: 'Plasma sans fibrinogène (obtenu après coagulation).' },
      { id: 'm2-s-4', recto: 'Tube pour la NFS ?', verso: 'Tube EDTA (bouchon violet en général).' },
      { id: 'm2-s-5', recto: 'Protéine des globules rouges qui fixe l’oxygène ?', verso: 'L’hémoglobine.' },
    ],
    sources: [S.msdConstituantsSang, S.msdAnalysesSang],
    verifieAvecCours: false,
  },
]
