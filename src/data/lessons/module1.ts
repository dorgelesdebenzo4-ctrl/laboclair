import type { Lesson } from '../types'
import { S } from '../sources'

// MODULE 1 — Bases scientifiques
// Contenu rédigé avec Claude : à compléter et corriger avec les cours de l'INFAS.

export const module1Lessons: Lesson[] = [
  {
    id: 'm1-cellule',
    moduleId: 'm1',
    titre: 'La cellule, unité du vivant',
    duree: 12,
    objectif:
      "Savoir ce qu'est une cellule, connaître ses principaux éléments et faire la différence entre une cellule humaine et une bactérie.",
    explication: [
      "Tout être vivant est fait de **cellules**. C'est la plus petite unité capable de vivre seule. Ton corps en compte des milliers de milliards, et une bactérie n'en a qu'une seule.",
      "Imagine la cellule comme une **petite usine** entourée d'un mur. Le mur, c'est la **membrane plasmique** : elle protège la cellule et contrôle ce qui entre et ce qui sort.",
      "À l'intérieur, on trouve le **cytoplasme**, un liquide dans lequel baignent les « ateliers » de l'usine : les **organites**.",
      "Le **noyau** est le bureau du directeur : il contient l'**ADN**, le plan de fabrication de toute la cellule. Les **mitochondries** sont les centrales électriques : elles produisent l'énergie. Les **ribosomes** sont les ouvriers qui fabriquent les protéines.",
      "Il existe deux grands types de cellules. Les **cellules eucaryotes** (humains, animaux, plantes, champignons, parasites) ont un vrai noyau. Les **cellules procaryotes** (les **bactéries**) n'ont pas de noyau : leur ADN flotte directement dans le cytoplasme.",
    ],
    schema: { key: 'cellule', legende: "Schéma simplifié d'une cellule eucaryote (cellule humaine)" },
    exempleLabo:
      "Au labo, tu observeras des cellules au microscope en permanence : globules rouges et globules blancs en hématologie, bactéries en bactériologie, parasites du paludisme en parasitologie. Savoir reconnaître un noyau, par exemple, aide à identifier les différents globules blancs sur un frottis sanguin.",
    aRetenir: [
      'La cellule est la plus petite unité du vivant.',
      'Membrane = protection et contrôle des échanges ; noyau = ADN ; mitochondrie = énergie ; ribosome = fabrication des protéines.',
      'Eucaryote = avec noyau (cellules humaines, parasites, champignons).',
      'Procaryote = sans noyau (bactéries).',
      'Les globules rouges matures de l’être humain n’ont pas de noyau.',
    ],
    motsCles: ['Cellule', 'Membrane plasmique', 'Cytoplasme', 'Noyau', 'ADN', 'Mitochondrie', 'Ribosome', 'Eucaryote', 'Procaryote'],
    quiz: [
      {
        q: 'Quel élément de la cellule contient l’ADN ?',
        options: ['La membrane plasmique', 'Le noyau', 'La mitochondrie', 'Le cytoplasme'],
        answer: 1,
        explication: "Le noyau est le « bureau du directeur » : il garde l'ADN, le plan de fabrication de la cellule.",
      },
      {
        q: 'Une bactérie est une cellule…',
        options: ['Eucaryote, avec noyau', 'Procaryote, sans noyau', 'Eucaryote, sans noyau', 'Qui n’est pas vivante'],
        answer: 1,
        explication: "Les bactéries sont des procaryotes : leur ADN n'est pas enfermé dans un noyau.",
      },
      {
        q: 'Quel organite produit l’énergie de la cellule ?',
        options: ['Le ribosome', 'Le noyau', 'La mitochondrie', 'La membrane'],
        answer: 2,
        explication: 'La mitochondrie est la « centrale électrique » de la cellule.',
      },
      {
        q: 'Quel est le rôle principal de la membrane plasmique ?',
        options: [
          'Fabriquer les protéines',
          'Protéger la cellule et contrôler les échanges',
          'Stocker l’ADN',
          'Produire de l’énergie',
        ],
        answer: 1,
        explication: "La membrane est le « mur » de l'usine : elle protège et décide de ce qui entre et sort.",
      },
      {
        q: 'Le parasite du paludisme (Plasmodium) est une cellule…',
        options: ['Procaryote', 'Eucaryote', 'Sans ADN', 'Végétale'],
        answer: 1,
        explication: 'Les parasites comme Plasmodium possèdent un vrai noyau : ce sont des eucaryotes.',
      },
    ],
    flashcards: [
      { id: 'm1-c-1', recto: 'Rôle du noyau ?', verso: 'Contenir l’ADN (le plan de fabrication de la cellule).' },
      { id: 'm1-c-2', recto: 'Rôle de la mitochondrie ?', verso: 'Produire l’énergie de la cellule.' },
      { id: 'm1-c-3', recto: 'Rôle du ribosome ?', verso: 'Fabriquer les protéines.' },
      { id: 'm1-c-4', recto: 'Eucaryote ou procaryote : une bactérie ?', verso: 'Procaryote (pas de noyau).' },
      { id: 'm1-c-5', recto: 'Rôle de la membrane plasmique ?', verso: 'Protéger la cellule et contrôler les échanges.' },
    ],
    sources: [S.baseSVT, S.msdBacteries],
    verifieAvecCours: false,
  },
  {
    id: 'm1-unites',
    moduleId: 'm1',
    titre: 'Les unités de mesure au labo',
    duree: 15,
    objectif: 'Maîtriser les unités de volume et de masse du labo et savoir convertir de l’une à l’autre sans erreur.',
    explication: [
      "Au labo, on mesure tout : des volumes de sang, des masses de réactif, des concentrations. Une erreur d'unité peut donner un **résultat faux**, et donc un mauvais diagnostic. C'est pour cela que les conversions doivent devenir un réflexe.",
      "**Les volumes.** L'unité de base est le **litre (L)**. Au labo, on travaille surtout avec de petits volumes : le **millilitre (mL)** et le **microlitre (µL)**. 1 L = 1 000 mL et 1 mL = 1 000 µL. On rencontre aussi le **décilitre (dL)** : 1 L = 10 dL, donc 1 dL = 100 mL.",
      "**Les masses.** L'unité de base est le **gramme (g)**. On utilise souvent le **milligramme (mg)** et le **microgramme (µg)**. 1 g = 1 000 mg et 1 mg = 1 000 µg.",
      "**La règle d'or :** chaque marche de l'escalier (L → mL → µL, ou g → mg → µg) vaut **× 1 000** quand on descend vers une unité plus petite, et **÷ 1 000** quand on monte vers une unité plus grande.",
      "**Astuce :** une unité plus petite donne toujours un nombre plus grand. 0,5 L, c'est 500 mL : même quantité, nombre plus grand.",
    ],
    schema: { key: 'unites', legende: 'L’escalier des unités : × 1 000 à chaque marche quand on descend' },
    exempleLabo:
      "Un même résultat de glycémie peut s'écrire de deux façons : 1 g/L ou 100 mg/dL. C'est exactement la même valeur. Pour passer de l'une à l'autre : 1 g = 1 000 mg et 1 L = 10 dL, donc 1 g/L = 1 000 mg ÷ 10 dL = 100 mg/dL. Selon les labos, les résultats ne sont pas toujours rendus dans la même unité : il faut savoir lire les deux.",
    aRetenir: [
      '1 L = 1 000 mL ; 1 mL = 1 000 µL ; 1 L = 10 dL ; 1 dL = 100 mL.',
      '1 g = 1 000 mg ; 1 mg = 1 000 µg.',
      'On descend vers une unité plus petite : × 1 000. On monte : ÷ 1 000.',
      '1 g/L = 100 mg/dL.',
      'Toujours écrire l’unité à côté d’un résultat.',
    ],
    motsCles: ['Litre', 'Microlitre', 'Décilitre', 'Milligramme', 'Microgramme'],
    quiz: [
      {
        q: 'Combien de µL dans 2 mL ?',
        options: ['20 µL', '200 µL', '2 000 µL', '0,002 µL'],
        answer: 2,
        explication: '1 mL = 1 000 µL, donc 2 mL = 2 × 1 000 = 2 000 µL.',
      },
      {
        q: '250 mL correspondent à…',
        options: ['2,5 L', '0,25 L', '25 L', '0,025 L'],
        answer: 1,
        explication: 'On monte vers une unité plus grande : ÷ 1 000. 250 ÷ 1 000 = 0,25 L.',
      },
      {
        q: '1 dL vaut…',
        options: ['10 mL', '100 mL', '1 000 mL', '1 mL'],
        answer: 1,
        explication: '1 L = 10 dL, donc 1 dL = 1 000 mL ÷ 10 = 100 mL.',
      },
      {
        q: 'Une glycémie de 0,90 g/L s’écrit aussi…',
        options: ['9 mg/dL', '90 mg/dL', '900 mg/dL', '0,09 mg/dL'],
        answer: 1,
        explication: '1 g/L = 100 mg/dL, donc 0,90 g/L = 0,90 × 100 = 90 mg/dL.',
      },
      {
        q: 'Combien de mg dans 0,5 g ?',
        options: ['5 mg', '50 mg', '500 mg', '5 000 mg'],
        answer: 2,
        explication: 'On descend vers une unité plus petite : × 1 000. 0,5 × 1 000 = 500 mg.',
      },
    ],
    flashcards: [
      { id: 'm1-u-1', recto: '1 mL = ? µL', verso: '1 000 µL' },
      { id: 'm1-u-2', recto: '1 dL = ? mL', verso: '100 mL' },
      { id: 'm1-u-3', recto: '1 mg = ? µg', verso: '1 000 µg' },
      { id: 'm1-u-4', recto: '1 g/L = ? mg/dL', verso: '100 mg/dL' },
      { id: 'm1-u-5', recto: 'Vers une unité plus petite, on multiplie ou on divise ?', verso: 'On multiplie (× 1 000 à chaque marche).' },
    ],
    sources: [S.baseChimie, S.saclayDiabete],
    verifieAvecCours: false,
  },
  {
    id: 'm1-concentrations',
    moduleId: 'm1',
    titre: 'Les concentrations',
    duree: 18,
    objectif:
      'Comprendre ce qu’est une concentration, calculer une concentration massique et une concentration molaire, et passer de l’une à l’autre.',
    explication: [
      "Une **concentration** indique **la quantité d'une substance dissoute dans un volume de liquide**. Pense à du sucre dans un verre d'eau : plus tu mets de sucre pour le même volume d'eau, plus c'est concentré.",
      "La substance dissoute s'appelle le **soluté** (le sucre), le liquide s'appelle le **solvant** (l'eau), et le mélange obtenu s'appelle la **solution**.",
      "**La concentration massique (Cm)** : la masse de soluté par litre de solution. **Cm = m ÷ V**, en **g/L**. Par exemple, 18 g de glucose dans 2 L donne Cm = 18 ÷ 2 = 9 g/L.",
      "**La concentration molaire (C)** : le nombre de moles de soluté par litre. **C = n ÷ V**, en **mol/L**. La **mole** est simplement un « paquet » de molécules, comme une douzaine est un paquet de 12 œufs. Pour trouver n, on utilise la **masse molaire M** (en g/mol) : **n = m ÷ M**.",
      "**Le lien entre les deux :** **Cm = C × M**, et donc **C = Cm ÷ M**. Il suffit de connaître la masse molaire de la substance.",
      "**Le pourcentage (%)** : on l'utilise pour certains réactifs. Pour les solutions aqueuses, 0,9 % signifie 0,9 g pour 100 mL, soit 9 g/L.",
    ],
    schema: { key: 'concentration', legende: 'Même volume, plus de soluté = solution plus concentrée' },
    exempleLabo:
      "Le **sérum physiologique** contient du NaCl à 9 g/L (soit 0,9 %). La masse molaire du NaCl est d'environ 58,5 g/mol, donc C = 9 ÷ 58,5 ≈ 0,154 mol/L, soit 154 mmol/L. Autre exemple très courant : la glycémie. Avec M(glucose) = 180 g/mol, 1 g/L de glucose = 1 ÷ 180 ≈ 0,0055 mol/L ≈ 5,5 mmol/L. Les labos rendent souvent la glycémie dans les deux unités.",
    aRetenir: [
      'Soluté + solvant = solution.',
      'Concentration massique : Cm = m ÷ V (g/L).',
      'Concentration molaire : C = n ÷ V (mol/L), avec n = m ÷ M.',
      'Passage de l’une à l’autre : Cm = C × M.',
      'Pour une solution aqueuse, 0,9 % = 0,9 g/100 mL = 9 g/L.',
    ],
    motsCles: ['Soluté', 'Solvant', 'Solution', 'Concentration massique', 'Concentration molaire', 'Mole', 'Masse molaire'],
    quiz: [
      {
        q: 'On dissout 10 g de sel dans 0,5 L. Quelle est la concentration massique ?',
        options: ['5 g/L', '10 g/L', '20 g/L', '0,05 g/L'],
        answer: 2,
        explication: 'Cm = m ÷ V = 10 ÷ 0,5 = 20 g/L.',
      },
      {
        q: 'Dans une solution de sucre dans l’eau, l’eau est…',
        options: ['Le soluté', 'Le solvant', 'Le réactif', 'Le précipité'],
        answer: 1,
        explication: 'Le solvant est le liquide qui dissout ; le sucre est le soluté.',
      },
      {
        q: 'Quelle formule relie concentration massique et concentration molaire ?',
        options: ['Cm = C ÷ M', 'Cm = C × M', 'Cm = C + M', 'Cm = M ÷ C'],
        answer: 1,
        explication: 'Cm (g/L) = C (mol/L) × M (g/mol).',
      },
      {
        q: 'Une solution de glucose (M = 180 g/mol) est à 0,1 mol/L. Sa concentration massique est…',
        options: ['1,8 g/L', '18 g/L', '180 g/L', '0,18 g/L'],
        answer: 1,
        explication: 'Cm = C × M = 0,1 × 180 = 18 g/L.',
      },
      {
        q: 'Une solution aqueuse à 0,9 % contient…',
        options: ['0,9 g/L', '9 g/L', '90 g/L', '0,09 g/L'],
        answer: 1,
        explication: '0,9 % = 0,9 g pour 100 mL, donc 9 g pour 1 000 mL = 9 g/L.',
      },
    ],
    flashcards: [
      { id: 'm1-co-1', recto: 'Formule de la concentration massique ?', verso: 'Cm = m ÷ V (en g/L)' },
      { id: 'm1-co-2', recto: 'Formule de la concentration molaire ?', verso: 'C = n ÷ V (en mol/L)' },
      { id: 'm1-co-3', recto: 'Comment calculer n à partir de la masse ?', verso: 'n = m ÷ M (M = masse molaire en g/mol)' },
      { id: 'm1-co-4', recto: 'Lien entre Cm et C ?', verso: 'Cm = C × M' },
      { id: 'm1-co-5', recto: 'Sérum physiologique : concentration en NaCl ?', verso: '9 g/L (0,9 %)' },
    ],
    sources: [S.baseChimie, S.saclayDiabete],
    verifieAvecCours: false,
  },
  {
    id: 'm1-dilutions',
    moduleId: 'm1',
    titre: 'Les dilutions',
    duree: 18,
    objectif:
      'Savoir préparer une dilution, utiliser la formule C1 × V1 = C2 × V2 et comprendre le facteur de dilution et les dilutions en série.',
    explication: [
      "**Diluer**, c'est ajouter du solvant (souvent de l'eau distillée ou un tampon) pour **diminuer la concentration** d'une solution. Comme quand tu rajoutes de l'eau dans un jus trop sucré : la quantité de sucre ne change pas, mais elle est répartie dans plus de liquide.",
      "On part d'une **solution mère** (concentrée), et on obtient une **solution fille** (diluée). **La quantité de soluté prélevée ne change pas**. C'est de là que vient la formule clé :",
      '**C1 × V1 = C2 × V2**, où C1 et V1 sont la concentration de la solution mère et le volume qu’on en prélève, et C2 et V2 la concentration et le volume final de la solution fille.',
      "**Le facteur de dilution (F)** indique combien de fois on a dilué : **F = C1 ÷ C2 = V2 ÷ V1**. Une dilution « au 1/10 » signifie F = 10 : **1 volume de solution + 9 volumes de diluant** = 10 volumes au total.",
      "**Attention au piège :** au 1/10, on n'ajoute pas 10 volumes de diluant, mais 9 ! Le volume total doit faire 10.",
      "**Les dilutions en série :** on dilue plusieurs fois de suite. Les facteurs se **multiplient** : une dilution au 1/10, puis encore au 1/10, donne une dilution totale au 1/100.",
    ],
    schema: { key: 'dilution', legende: 'Dilution au 1/10 : 1 volume de solution mère + 9 volumes de diluant' },
    exempleLabo:
      "Tu dois préparer 100 mL de solution à 0,9 g/L à partir d'une solution mère à 9 g/L. On cherche V1 : V1 = (C2 × V2) ÷ C1 = (0,9 × 100) ÷ 9 = 10 mL. Tu prélèves 10 mL de solution mère et tu complètes avec du diluant jusqu'à 100 mL (donc 90 mL de diluant). C'est une dilution au 1/10. En bactériologie, on fait aussi des dilutions en série pour compter les bactéries d'un échantillon.",
    aRetenir: [
      'Diluer = ajouter du solvant ; la quantité de soluté ne change pas.',
      'C1 × V1 = C2 × V2.',
      'Facteur de dilution : F = C1 ÷ C2 = V2 ÷ V1.',
      'Au 1/10 : 1 volume de solution + 9 volumes de diluant.',
      'En série, les facteurs se multiplient (1/10 puis 1/10 = 1/100).',
    ],
    motsCles: ['Dilution', 'Solution mère', 'Solution fille', 'Facteur de dilution', 'Diluant'],
    quiz: [
      {
        q: 'Pour une dilution au 1/5, on mélange…',
        options: [
          '1 volume de solution + 5 volumes de diluant',
          '1 volume de solution + 4 volumes de diluant',
          '5 volumes de solution + 1 volume de diluant',
          '1 volume de solution + 6 volumes de diluant',
        ],
        answer: 1,
        explication: 'Au 1/5, le volume total = 5. Donc 1 volume de solution + 4 volumes de diluant.',
      },
      {
        q: 'On veut 50 mL à 2 g/L à partir d’une solution à 10 g/L. Quel volume de solution mère prélever ?',
        options: ['5 mL', '10 mL', '25 mL', '2 mL'],
        answer: 1,
        explication: 'V1 = (C2 × V2) ÷ C1 = (2 × 50) ÷ 10 = 10 mL, puis compléter à 50 mL.',
      },
      {
        q: 'Une solution à 20 g/L est diluée au 1/4. Sa nouvelle concentration est…',
        options: ['80 g/L', '16 g/L', '5 g/L', '4 g/L'],
        answer: 2,
        explication: 'C2 = C1 ÷ F = 20 ÷ 4 = 5 g/L.',
      },
      {
        q: 'Deux dilutions successives au 1/10 donnent une dilution totale au…',
        options: ['1/20', '1/100', '1/10', '1/1 000'],
        answer: 1,
        explication: 'En série, les facteurs se multiplient : 10 × 10 = 100, donc 1/100.',
      },
      {
        q: 'Lors d’une dilution, qu’est-ce qui reste constant ?',
        options: ['Le volume', 'La concentration', 'La quantité de soluté', 'Rien'],
        answer: 2,
        explication: 'On ajoute seulement du solvant : la quantité de soluté prélevée ne change pas.',
      },
    ],
    flashcards: [
      { id: 'm1-d-1', recto: 'Formule des dilutions ?', verso: 'C1 × V1 = C2 × V2' },
      { id: 'm1-d-2', recto: 'Facteur de dilution F ?', verso: 'F = C1 ÷ C2 = V2 ÷ V1' },
      { id: 'm1-d-3', recto: 'Dilution au 1/10 : composition ?', verso: '1 volume de solution + 9 volumes de diluant' },
      { id: 'm1-d-4', recto: 'Dilutions en série : on additionne ou on multiplie les facteurs ?', verso: 'On multiplie.' },
    ],
    sources: [S.baseChimie],
    verifieAvecCours: false,
  },
]
