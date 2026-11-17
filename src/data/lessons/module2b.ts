import type { Lesson } from '../types'
import { S } from '../sources'

// MODULE 2 — Anatomie-physiologie (suite). Rédigé à partir des sources citées sous chaque leçon.

export const module2bLessons: Lesson[] = [
  {
    id: 'm2-reins',
    moduleId: 'm2',
    titre: 'Les reins et l’urine',
    duree: 14,
    objectif: 'Savoir où sont les reins, à quoi ils servent, comment l’urine est fabriquée et pourquoi on dose la créatinine.',
    explication: [
      "Nous avons **deux reins**, en forme de haricot, à peu près de la taille d'un poing. Ils se trouvent à l'arrière de l'abdomen, de chaque côté de la colonne vertébrale.",
      "Leur rôle principal : **filtrer les déchets du sang** et **garder l'équilibre de l'eau et des électrolytes** (les sels minéraux) dans le corps. Pour cela, ils ajustent la quantité d'eau et d'électrolytes qui part dans l'urine.",
      "Le filtrage se fait dans de minuscules unités. Le sang passe d'abord dans un petit filtre, le **glomérule**, puis le liquide filtré circule dans un **tubule** où il est transformé en urine. L'urine est ensuite drainée vers des conduits de plus en plus grands jusqu'à sortir du rein. L'ensemble glomérule + tubule s'appelle le **néphron**.",
      "L'urine quitte les reins par les **uretères**, est stockée dans la **vessie**, puis évacuée par l'**urètre**. C'est ce qu'on appelle les **voies urinaires**.",
      "Les reins ont aussi un rôle dans la fabrication des globules rouges : quand les reins sont malades depuis longtemps, la production de globules rouges baisse, ce qui peut entraîner une **anémie**.",
    ],
    exempleLabo:
      "Pour savoir si les reins filtrent bien, on dose dans le sang la **créatinine**, un déchet du métabolisme : elle augmente dans le sang quand la fonction rénale baisse de façon importante. On dose aussi souvent l'**urée**. La créatinine est considérée comme un indicateur plus spécifique de la filtration que l'urée. On peut aussi estimer la **clairance de la créatinine** par une formule qui tient compte de l'âge, du poids et du sexe.",
    aRetenir: [
      'Deux reins, à l’arrière de l’abdomen, de chaque côté de la colonne.',
      'Rôle : filtrer les déchets du sang et équilibrer l’eau et les électrolytes.',
      'Néphron = glomérule (filtre) + tubule (transforme le filtrat en urine).',
      'Voies urinaires : uretères → vessie → urètre.',
      'Créatinine dans le sang : augmente quand la fonction rénale baisse nettement.',
    ],
    motsCles: ['Néphron', 'Glomérule', 'Créatinine', 'Urée', 'Anémie'],
    quiz: [
      { q: 'Quel est le rôle principal des reins ?', options: ['Fabriquer la bile', 'Filtrer le sang et équilibrer l’eau et les électrolytes', 'Produire les anticorps', 'Digérer les protéines'], answer: 1, explication: 'Les reins filtrent les déchets du sang et maintiennent l’équilibre en eau et en électrolytes.' },
      { q: 'Dans le néphron, le petit filtre s’appelle…', options: ['Le tubule', 'L’uretère', 'Le glomérule', 'L’urètre'], answer: 2, explication: 'Le sang est filtré dans le glomérule, puis le filtrat passe dans le tubule.' },
      { q: 'Dans quel ordre l’urine circule-t-elle ?', options: ['Urètre → vessie → uretères', 'Uretères → vessie → urètre', 'Vessie → uretères → urètre', 'Uretères → urètre → vessie'], answer: 1, explication: 'Rein → uretères → vessie (stockage) → urètre (évacuation).' },
      { q: 'Que se passe-t-il pour la créatinine sanguine quand les reins filtrent nettement moins bien ?', options: ['Elle baisse', 'Elle augmente', 'Elle ne change pas', 'Elle disparaît'], answer: 1, explication: 'La créatinine n’est plus bien éliminée : son taux dans le sang augmente.' },
    ],
    flashcards: [
      { id: 'm2-r-1', recto: 'Unité de filtration du rein ?', verso: 'Le néphron (glomérule + tubule).' },
      { id: 'm2-r-2', recto: 'Ordre des voies urinaires ?', verso: 'Uretères → vessie → urètre.' },
      { id: 'm2-r-3', recto: 'Déchet dosé dans le sang pour évaluer les reins ?', verso: 'La créatinine (et souvent l’urée).' },
      { id: 'm2-r-4', recto: 'Pourquoi une maladie rénale chronique peut donner une anémie ?', verso: 'La production de globules rouges baisse.' },
    ],
    sources: [S.msdReins, S.msdFiltration, S.msdFonctionRenale, S.msdMRC, S.msssUreeCreat],
    verifieAvecCours: false,
  },
  {
    id: 'm2-foie',
    moduleId: 'm2',
    titre: 'Le foie et la bilirubine',
    duree: 14,
    objectif: 'Connaître les grandes fonctions du foie, comprendre d’où vient la bilirubine et savoir ce que mesure un bilan hépatique.',
    explication: [
      "Le foie est un organe qui fait énormément de travail chimique (on dit qu'il est **métaboliquement complexe**). Ses cellules s'appellent les **hépatocytes**.",
      "Les hépatocytes **fabriquent la bile** et l'éliminent dans de petits canaux, les **canalicules biliaires**, qui la conduisent vers les **voies biliaires**. Le foie participe aussi à la fabrication des **lipides** et au contrôle du **cholestérol**.",
      "Le foie fabrique de nombreuses **protéines** du sang, comme l'**albumine** (la principale protéine du plasma) et des protéines de la **coagulation**.",
      "**D'où vient la bilirubine ?** Quand l'hémoglobine est dégradée, elle donne la **bilirubine**. La majorité (environ 70 à 80 %) vient de la destruction des vieux globules rouges. Au départ, cette bilirubine n'est pas soluble dans l'eau : le foie doit la transformer (on dit la **conjuguer**) pour qu'elle puisse être éliminée.",
      "Quand la bilirubine s'accumule dans le sang, la peau et le blanc des yeux peuvent jaunir : c'est la **jaunisse** (ou **ictère**).",
    ],
    exempleLabo:
      "Le **bilan hépatique** se fait sur une prise de sang. Il mesure des enzymes et des substances liées au foie : **ALAT** et **ASAT** (les transaminases), **phosphatase alcaline (PAL)**, **GGT**, **bilirubine**, **albumine**, et parfois le **TP/INR** (coagulation). Les ALAT et ASAT sont libérées par les hépatocytes abîmés : ce sont des indicateurs sensibles de lésion du foie, et l'élévation des ALAT est assez spécifique du foie.",
    aRetenir: [
      'Cellules du foie = hépatocytes.',
      'Le foie fabrique la bile, des lipides et des protéines (albumine, coagulation).',
      'Bilirubine = produit de dégradation de l’hémoglobine, surtout des vieux globules rouges.',
      'Le foie conjugue la bilirubine pour pouvoir l’éliminer.',
      'Bilan hépatique : ALAT, ASAT, PAL, GGT, bilirubine, albumine, TP/INR.',
    ],
    motsCles: ['Hépatocyte', 'Bilirubine', 'Transaminases', 'Ictère'],
    quiz: [
      { q: 'Comment s’appellent les cellules du foie ?', options: ['Néphrons', 'Hépatocytes', 'Hématies', 'Lymphocytes'], answer: 1, explication: 'Les hépatocytes réalisent les fonctions métaboliques du foie.' },
      { q: 'La bilirubine provient surtout…', options: ['De la digestion des graisses', 'De la dégradation de l’hémoglobine des vieux globules rouges', 'Des reins', 'Des plaquettes'], answer: 1, explication: 'Environ 70 à 80 % de la bilirubine vient de la destruction des globules rouges.' },
      { q: 'Quelles enzymes sont libérées par les hépatocytes abîmés ?', options: ['Créatinine et urée', 'ALAT et ASAT', 'Hémoglobine et albumine', 'IgG et IgM'], answer: 1, explication: 'Les transaminases ALAT et ASAT sont des indicateurs sensibles de lésion du foie.' },
      { q: 'Quelle est la principale protéine du plasma, fabriquée par le foie ?', options: ['L’hémoglobine', 'L’albumine', 'La fibrine', 'L’insuline'], answer: 1, explication: 'L’albumine est la principale protéine du plasma ; elle est fabriquée par le foie.' },
    ],
    flashcards: [
      { id: 'm2-f-1', recto: 'Cellules du foie ?', verso: 'Les hépatocytes.' },
      { id: 'm2-f-2', recto: 'Origine principale de la bilirubine ?', verso: 'La dégradation de l’hémoglobine des vieux globules rouges.' },
      { id: 'm2-f-3', recto: 'ALAT et ASAT = ?', verso: 'Les transaminases, enzymes libérées quand les hépatocytes sont abîmés.' },
      { id: 'm2-f-4', recto: 'Jaunisse : nom médical ?', verso: 'Ictère.' },
    ],
    sources: [S.msdFoie, S.msdBilanHepatique, S.msdExamensFoie, S.msdConstituantsSang],
    verifieAvecCours: false,
  },
  {
    id: 'm2-immunite',
    moduleId: 'm2',
    titre: 'Le système immunitaire',
    duree: 15,
    objectif: 'Comprendre la différence entre immunité innée et immunité acquise, et savoir ce que sont un antigène et un anticorps.',
    explication: [
      "Le système immunitaire protège le corps contre les envahisseurs : bactéries, virus, parasites, champignons… Il peut aussi reconnaître et détruire des cellules anormales du corps.",
      "Un **antigène** est une substance que le système immunitaire peut reconnaître et qui déclenche une réponse immunitaire (par exemple une molécule à la surface d'une bactérie).",
      "**L'immunité innée** (ou naturelle) est présente **dès la naissance**. Elle réagit vite, mais **ne garde pas de mémoire** des microbes rencontrés. Elle fait intervenir des globules blancs : **monocytes** (qui deviennent des **macrophages**), **neutrophiles**, **éosinophiles**, **basophiles** et **lymphocytes NK** (Natural Killer), ainsi que le **complément** et les **cytokines**.",
      "**L'immunité acquise** (ou adaptative, spécifique) **n'est pas présente à la naissance : elle s'apprend**. Elle met du temps à se mettre en place la première fois, mais elle s'adapte à chaque antigène et **garde une mémoire**. Ses acteurs sont les **lymphocytes T** et les **lymphocytes B**.",
      "Les **lymphocytes B** fabriquent des **anticorps** (aussi appelés immunoglobulines, Ig). Chaque anticorps est **spécifique** d'un antigène. Il en existe plusieurs classes : **IgM, IgG, IgA, IgE et IgD**. Après une rencontre, certains lymphocytes deviennent des **cellules mémoire**, qui vivent longtemps.",
    ],
    exempleLabo:
      "Toute la **sérologie** repose sur ces notions : au labo, on cherche dans le sang du patient soit des **anticorps** dirigés contre un microbe, soit des **antigènes** du microbe lui-même. C'est le principe des tests de dépistage du VIH ou de l'hépatite B (module 7). Et sur une NFS, la **formule leucocytaire** compte les différents globules blancs que tu viens de voir.",
    aRetenir: [
      'Antigène = substance reconnue qui déclenche une réponse immunitaire.',
      'Immunité innée : dès la naissance, rapide, sans mémoire.',
      'Immunité acquise : apprise, spécifique, avec mémoire (lymphocytes T et B).',
      'Les lymphocytes B produisent les anticorps, chacun spécifique d’un antigène.',
      'Classes d’anticorps : IgM, IgG, IgA, IgE, IgD.',
    ],
    motsCles: ['Antigène', 'Anticorps', 'Immunité innée', 'Immunité acquise', 'Lymphocyte'],
    quiz: [
      { q: 'Quelle immunité est présente dès la naissance et n’a pas de mémoire ?', options: ['L’immunité acquise', 'L’immunité innée', 'La vaccination', 'L’immunité humorale'], answer: 1, explication: 'L’immunité innée est présente dès la naissance et ne mémorise pas les antigènes.' },
      { q: 'Quelles cellules fabriquent les anticorps ?', options: ['Les lymphocytes B', 'Les neutrophiles', 'Les plaquettes', 'Les globules rouges'], answer: 0, explication: 'Les lymphocytes B produisent des anticorps spécifiques de l’antigène.' },
      { q: 'Un antigène, c’est…', options: ['Un globule blanc', 'Une substance reconnue par le système immunitaire qui déclenche une réponse', 'Un médicament', 'Un type d’anticorps'], answer: 1, explication: 'C’est la définition d’un antigène.' },
      { q: 'Laquelle de ces propositions n’est PAS une classe d’anticorps ?', options: ['IgG', 'IgM', 'IgE', 'IgK'], answer: 3, explication: 'Les classes sont IgM, IgG, IgA, IgE et IgD.' },
      { q: 'Pourquoi l’immunité acquise protège mieux lors d’une deuxième rencontre ?', options: ['Grâce aux cellules mémoire', 'Grâce aux plaquettes', 'Parce qu’elle est innée', 'Parce que le microbe a changé'], answer: 0, explication: 'Des lymphocytes deviennent des cellules mémoire qui gardent le souvenir de l’antigène.' },
    ],
    flashcards: [
      { id: 'm2-i-1', recto: 'Immunité innée : 2 caractéristiques ?', verso: 'Présente dès la naissance, sans mémoire.' },
      { id: 'm2-i-2', recto: 'Immunité acquise : acteurs principaux ?', verso: 'Les lymphocytes T et B.' },
      { id: 'm2-i-3', recto: 'Qui produit les anticorps ?', verso: 'Les lymphocytes B.' },
      { id: 'm2-i-4', recto: 'Les 5 classes d’anticorps ?', verso: 'IgM, IgG, IgA, IgE, IgD.' },
      { id: 'm2-i-5', recto: 'Définition d’un antigène ?', verso: 'Substance reconnue par le système immunitaire qui déclenche une réponse immunitaire.' },
    ],
    sources: [S.msdImmunite, S.msdInnee, S.msdAcquise],
    verifieAvecCours: false,
  },
]
