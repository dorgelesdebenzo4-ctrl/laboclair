import type { Lesson } from '../types'
import { S } from '../sources'

// MODULES 6 (Biochimie), 7 (Immunologie / Sérologie) et 8 (Hygiène et biosécurité).
// Rédigé à partir des sources citées sous chaque leçon.

export const module6Lessons: Lesson[] = [
  {
    id: 'm6-glycemie',
    moduleId: 'm6',
    titre: 'La glycémie et le diabète',
    duree: 14,
    objectif: 'Connaître les valeurs repères de la glycémie à jeun, les critères biologiques du diabète et la conversion g/L ↔ mmol/L.',
    explication: [
      "La **glycémie** est le taux de **glucose** (sucre) dans le sang. Pour une **glycémie à jeun**, le patient ne doit rien avoir mangé depuis **au moins 8 heures**.",
      "**Glycémie à jeun normale :** entre **0,70 et 1,10 g/L** (soit environ 3,9 à 6,1 mmol/L).",
      "**Entre 1,10 et 1,25 g/L à jeun**, on parle d'**hyperglycémie modérée à jeun** (prédiabète) : ce n'est pas encore un diabète, mais le risque est augmenté.",
      "**Critères du diabète** (OMS) : une glycémie à jeun **≥ 1,26 g/L (7,0 mmol/L) vérifiée à deux reprises** ; OU une glycémie **≥ 2 g/L (11,1 mmol/L)** à n'importe quel moment avec des symptômes de diabète ; OU une glycémie **≥ 2 g/L** deux heures après avoir bu **75 g de glucose** (HGPO). Certaines recommandations récentes utilisent aussi l'**HbA1c ≥ 6,5 %**.",
      "**Conversion :** pour le glucose, **g/L × 5,55 = mmol/L** (car la masse molaire du glucose est 180 g/mol, et 1 ÷ 180 × 1 000 ≈ 5,55). Exemple : 1,26 g/L × 5,55 ≈ 7,0 mmol/L.",
    ],
    exempleLabo:
      "Au labo, on reçoit souvent des demandes de glycémie à jeun. Vérifie toujours que le patient est bien **à jeun** : sinon le résultat ne peut pas être interprété avec ces valeurs. Selon les labos, le résultat est rendu en g/L, en mmol/L, ou dans les deux unités : la conversion doit devenir automatique (refais l'exercice dans « Calculs » → g/L ↔ mol/L).",
    aRetenir: [
      'Glycémie à jeun = au moins 8 h sans manger.',
      'Normale à jeun : 0,70 à 1,10 g/L.',
      'Diabète : à jeun ≥ 1,26 g/L (7,0 mmol/L) deux fois.',
      'Ou ≥ 2 g/L (11,1 mmol/L) avec symptômes, ou 2 h après 75 g de glucose.',
      'Glucose : g/L × 5,55 = mmol/L.',
    ],
    motsCles: ['Glycémie', 'HbA1c', 'Masse molaire'],
    quiz: [
      { q: 'Quel est le seuil de glycémie à jeun pour le diagnostic du diabète ?', options: ['≥ 1,00 g/L', '≥ 1,10 g/L', '≥ 1,26 g/L vérifiée deux fois', '≥ 2,50 g/L'], answer: 2, explication: '≥ 1,26 g/L (7,0 mmol/L) à jeun, confirmée sur deux prélèvements.' },
      { q: 'Combien de temps faut-il être à jeun ?', options: ['1 heure', '3 heures', 'Au moins 8 heures', '24 heures'], answer: 2, explication: 'La glycémie à jeun se fait après au moins 8 heures sans manger.' },
      { q: 'Une glycémie à jeun de 1,18 g/L correspond à…', options: ['Une glycémie normale', 'Une hyperglycémie modérée à jeun', 'Un diabète confirmé', 'Une hypoglycémie'], answer: 1, explication: 'Entre 1,10 et 1,25 g/L : hyperglycémie modérée à jeun.' },
      { q: '1 g/L de glucose correspond à environ…', options: ['1 mmol/L', '5,55 mmol/L', '18 mmol/L', '0,55 mmol/L'], answer: 1, explication: 'g/L × 5,55 = mmol/L pour le glucose.' },
    ],
    flashcards: [
      { id: 'm6-g-1', recto: 'Glycémie à jeun normale ?', verso: '0,70 à 1,10 g/L.' },
      { id: 'm6-g-2', recto: 'Seuil du diabète à jeun ?', verso: '≥ 1,26 g/L (7,0 mmol/L), vérifiée deux fois.' },
      { id: 'm6-g-3', recto: 'Conversion du glucose g/L → mmol/L ?', verso: '× 5,55' },
      { id: 'm6-g-4', recto: 'HGPO : seuil du diabète à 2 h ?', verso: '≥ 2 g/L (11,1 mmol/L) après 75 g de glucose.' },
    ],
    sources: [S.diabeteCriteres, S.hasDiabete, S.saclayDiabete],
    verifieAvecCours: false,
  },
  {
    id: 'm6-bilans',
    moduleId: 'm6',
    titre: 'Bilan rénal et bilan hépatique',
    duree: 12,
    objectif: 'Savoir quels paramètres composent un bilan rénal et un bilan hépatique, et ce que chacun indique.',
    explication: [
      "En biochimie, on regroupe souvent les analyses en **bilans**, selon l'organe à explorer. Tu as vu le fonctionnement des reins et du foie dans le module 2 ; voici ce qu'on mesure au labo.",
      "**Le bilan rénal :** la **créatinine** sanguine (un déchet qui augmente quand la fonction rénale baisse nettement) et l'**urée**. La créatinine est filtrée par le glomérule et n'est pas réabsorbée, ce qui en fait un indicateur **plus spécifique** de la filtration que l'urée. En pratique courante, la créatinine suffit souvent ; si on suspecte une atteinte rénale, on demande les deux.",
      "On peut calculer une **clairance de la créatinine** à partir de la créatinine sanguine, avec une formule qui tient compte de l'âge, du poids et du sexe. La **cystatine C** est parfois dosée aussi.",
      "**Le bilan hépatique :** **ALAT** et **ASAT** (transaminases : lésion des hépatocytes), **phosphatase alcaline** et **GGT** (souvent liées aux voies biliaires), **bilirubine**, **albumine** (production de protéines par le foie), et **TP/INR** (coagulation). Le dosage des transaminases est le test hépatique le plus utilisé.",
    ],
    exempleLabo:
      "Ces bilans se font sur une simple prise de sang. Un détail utile : dans la plupart des maladies du foie, l'ASAT est plus basse que l'ALAT (rapport ASAT/ALAT < 1), mais dans les atteintes du foie liées à l'alcool, ce rapport est typiquement supérieur à 2.",
    aRetenir: [
      'Bilan rénal : créatinine (+ urée).',
      'Créatinine : plus spécifique de la filtration que l’urée.',
      'Clairance de la créatinine : formule avec âge, poids et sexe.',
      'Bilan hépatique : ALAT, ASAT, PAL, GGT, bilirubine, albumine, TP/INR.',
      'Transaminases = test hépatique le plus utilisé.',
    ],
    motsCles: ['Créatinine', 'Urée', 'Transaminases', 'Bilirubine'],
    quiz: [
      { q: 'Quel paramètre est le plus spécifique de la filtration rénale ?', options: ['L’urée', 'La créatinine', 'La bilirubine', 'L’ALAT'], answer: 1, explication: 'La créatinine est filtrée et non réabsorbée.' },
      { q: 'Lequel de ces paramètres appartient au bilan hépatique ?', options: ['Créatinine', 'ALAT', 'Hématocrite', 'Glycémie'], answer: 1, explication: 'ALAT et ASAT sont les transaminases du bilan hépatique.' },
      { q: 'La clairance de la créatinine calculée tient compte de…', options: ['La taille et le groupe sanguin', 'L’âge, le poids et le sexe', 'La glycémie', 'Le nombre de plaquettes'], answer: 1, explication: 'La formule utilise la créatinine sanguine, l’âge, le poids et le sexe.' },
      { q: 'Le test hépatique le plus utilisé est…', options: ['Le dosage des transaminases', 'La NFS', 'Le groupe sanguin', 'L’antibiogramme'], answer: 0, explication: 'Les transaminases (ALAT, ASAT) sont les tests hépatiques les plus utilisés.' },
    ],
    flashcards: [
      { id: 'm6-b-1', recto: 'Bilan rénal : 2 paramètres principaux ?', verso: 'Créatinine et urée.' },
      { id: 'm6-b-2', recto: 'Bilan hépatique : paramètres ?', verso: 'ALAT, ASAT, PAL, GGT, bilirubine, albumine, TP/INR.' },
      { id: 'm6-b-3', recto: 'Rapport ASAT/ALAT typique en cas d’atteinte liée à l’alcool ?', verso: 'Supérieur à 2.' },
    ],
    sources: [S.msdFonctionRenale, S.msssUreeCreat, S.msdBilanHepatique, S.msdExamensFoie],
    verifieAvecCours: false,
  },
]

export const module7Lessons: Lesson[] = [
  {
    id: 'm7-tests',
    moduleId: 'm7',
    titre: 'Le principe des tests sérologiques',
    duree: 14,
    objectif: 'Comprendre comment un test utilise la réaction antigène-anticorps, et connaître l’agglutination, l’ELISA et le Western blot.',
    explication: [
      "Tous les tests immunologiques reposent sur une idée simple : un **anticorps** se fixe de façon **spécifique** sur son **antigène**, comme une clé dans sa serrure.",
      "On peut l'utiliser dans les deux sens : on utilise un **antigène connu** pour **détecter des anticorps** dans le prélèvement du patient (le patient a-t-il rencontré ce microbe ?), ou on utilise un **anticorps connu** pour **détecter un antigène** du microbe (le microbe est-il présent ?).",
      "**L'agglutination :** de toutes petites particules (billes de latex, par exemple) sont recouvertes d'antigène ou d'anticorps. Si la cible est dans le prélèvement, les particules s'agglutinent (forment des amas visibles). C'est **rapide**, mais **moins sensible** que d'autres méthodes.",
      "**L'ELISA** (test immuno-enzymatique) utilise des anticorps liés à une **enzyme** qui produit un signal coloré. Ces tests sont généralement **très sensibles** et souvent utilisés pour le **dépistage**.",
      "**Le Western blot** sert habituellement à **confirmer** un résultat positif obtenu lors d'un test de dépistage.",
    ],
    exempleLabo:
      "Deux mots à bien comprendre : la **sensibilité** (la capacité d'un test à détecter les personnes réellement malades, donc peu de faux négatifs) et la **spécificité** (la capacité à ne donner un résultat positif que chez les vraies personnes infectées, donc peu de faux positifs). Un test de dépistage très sensible peut donner quelques faux positifs : c'est pour cela qu'un résultat positif est **confirmé** par un autre test.",
    aRetenir: [
      'Anticorps + antigène = liaison spécifique.',
      'Antigène connu → détecte des anticorps ; anticorps connu → détecte un antigène.',
      'Agglutination : rapide mais moins sensible.',
      'ELISA : enzyme + signal coloré, très sensible, utilisé pour le dépistage.',
      'Western blot : confirmation d’un résultat positif.',
    ],
    motsCles: ['Antigène', 'Anticorps', 'ELISA', 'Sensibilité', 'Spécificité'],
    quiz: [
      { q: 'Pour savoir si un patient a fabriqué des anticorps contre un microbe, on utilise…', options: ['Un anticorps connu', 'Un antigène connu du microbe', 'Une coloration de Gram', 'Un antibiogramme'], answer: 1, explication: 'L’antigène connu capture les anticorps présents dans le sérum du patient.' },
      { q: 'Quelle technique utilise une enzyme qui produit un signal coloré ?', options: ['L’agglutination', 'L’ELISA', 'La goutte épaisse', 'La centrifugation'], answer: 1, explication: 'ELISA = Enzyme-Linked ImmunoSorbent Assay.' },
      { q: 'À quoi sert habituellement le Western blot ?', options: ['À dépister en premier', 'À confirmer un résultat positif', 'À compter les globules', 'À doser le glucose'], answer: 1, explication: 'Il est utilisé pour confirmer un test de dépistage positif.' },
      { q: 'Un test très sensible donne…', options: ['Peu de faux négatifs', 'Beaucoup de faux négatifs', 'Aucun résultat', 'Toujours le groupe sanguin'], answer: 0, explication: 'La sensibilité = capacité à détecter les vrais malades.' },
    ],
    flashcards: [
      { id: 'm7-t-1', recto: 'Agglutination : avantage et limite ?', verso: 'Rapide, mais moins sensible.' },
      { id: 'm7-t-2', recto: 'ELISA : usage principal ?', verso: 'Dépistage (très sensible).' },
      { id: 'm7-t-3', recto: 'Western blot : usage ?', verso: 'Confirmer un résultat positif.' },
      { id: 'm7-t-4', recto: 'Sensibilité vs spécificité ?', verso: 'Sensibilité : peu de faux négatifs. Spécificité : peu de faux positifs.' },
    ],
    sources: [S.msdTestsImmuno, S.msdImmunite],
    verifieAvecCours: false,
  },
  {
    id: 'm7-vih-hepb',
    moduleId: 'm7',
    titre: 'Dépistage du VIH et de l’hépatite B',
    duree: 14,
    objectif: 'Comprendre ce que détectent les tests du VIH, ce qu’est la fenêtre sérologique, et le rôle de l’antigène HBs pour l’hépatite B.',
    explication: [
      "**Le VIH.** Les tests de dépistage de **4e génération** détectent à la fois les **anticorps anti-VIH** et l'**antigène p24** du virus. L'antigène p24 apparaît **plus tôt** que les anticorps, ce qui permet de détecter l'infection plus précocement que les tests qui ne cherchent que les anticorps.",
      "**La fenêtre sérologique** (ou période fenêtre) est le temps entre le moment de l'exposition au virus et le moment où le test peut le détecter. Si on fait le test **pendant cette période**, il peut être **négatif alors que la personne est infectée**. Les anticorps anti-VIH deviennent détectables entre **trois semaines et trois mois**. Certaines recommandations fixent la fin de la période fenêtre à **trois mois**.",
      "Un résultat **réactif (positif)** n'est jamais rendu seul : le labo fait des **tests de confirmation** pour s'assurer du diagnostic.",
      "**L'hépatite B.** Le marqueur clé est l'**antigène de surface du virus de l'hépatite B (AgHBs)** : sa présence indique l'infection. Si l'AgHBs persiste **six mois ou plus**, on parle d'**infection chronique**. Le dépistage de l'AgHBs dans le sang des donneurs a presque éliminé la transmission de l'hépatite B par transfusion.",
      "Environ **5 à 10 %** des personnes qui ont une hépatite B aiguë développent une hépatite B chronique ; plus la personne est **jeune** au moment de l'infection, plus ce risque est élevé.",
    ],
    exempleLabo:
      "En sérologie, la **confidentialité** et l'**identification** des tubes sont essentielles : un résultat de VIH ou d'hépatite B a des conséquences lourdes pour le patient. Retiens aussi la logique « **dépistage puis confirmation** » : c'est la même pour de nombreuses maladies infectieuses.",
    aRetenir: [
      'Tests VIH de 4e génération : anticorps + antigène p24.',
      'Fenêtre sérologique : test possiblement négatif juste après l’infection.',
      'Anticorps anti-VIH détectables entre 3 semaines et 3 mois.',
      'Tout résultat réactif est confirmé par un autre test.',
      'Hépatite B : AgHBs = présence du virus ; chronique si ≥ 6 mois.',
    ],
    motsCles: ['Fenêtre sérologique', 'Antigène p24', 'AgHBs', 'ELISA'],
    quiz: [
      { q: 'Que détecte un test VIH de 4e génération ?', options: ['Seulement les anticorps', 'Les anticorps et l’antigène p24', 'Seulement l’ADN du virus', 'Le groupe sanguin'], answer: 1, explication: 'Il combine anticorps anti-VIH et antigène p24.' },
      { q: 'La fenêtre sérologique, c’est…', options: ['La durée de conservation du tube', 'Le temps entre l’exposition et le moment où le test peut détecter l’infection', 'Le temps de lecture du test', 'La durée du traitement'], answer: 1, explication: 'Pendant cette période, le test peut être faussement négatif.' },
      { q: 'Quel marqueur indique la présence du virus de l’hépatite B ?', options: ['L’antigène p24', 'L’AgHBs', 'L’hémoglobine', 'La créatinine'], answer: 1, explication: 'L’antigène de surface HBs indique l’infection par le VHB.' },
      { q: 'On parle d’hépatite B chronique quand l’AgHBs persiste…', options: ['1 semaine', '1 mois', '6 mois ou plus', '10 ans'], answer: 2, explication: 'Persistance de l’AgHBs pendant 6 mois ou plus.' },
      { q: 'Que fait le labo devant un test de dépistage VIH réactif ?', options: ['Il rend le résultat tel quel', 'Il fait des tests de confirmation', 'Il refait une NFS', 'Il jette le tube'], answer: 1, explication: 'Un résultat réactif est toujours confirmé.' },
    ],
    flashcards: [
      { id: 'm7-v-1', recto: 'Test VIH 4e génération : cibles ?', verso: 'Anticorps anti-VIH + antigène p24.' },
      { id: 'm7-v-2', recto: 'Fenêtre sérologique = ?', verso: 'Période après l’exposition où le test peut encore être négatif.' },
      { id: 'm7-v-3', recto: 'AgHBs = ?', verso: 'Antigène de surface du virus de l’hépatite B (présence du virus).' },
      { id: 'm7-v-4', recto: 'Hépatite B chronique : définition biologique ?', verso: 'AgHBs persistant 6 mois ou plus.' },
    ],
    sources: [S.canadaVIH, S.inspqVIH, S.omsHepB, S.msdHepB],
    verifieAvecCours: false,
  },
]

export const module8Lessons: Lesson[] = [
  {
    id: 'm8-biosecurite',
    moduleId: 'm8',
    titre: 'Biosécurité et précautions standard',
    duree: 13,
    objectif: 'Comprendre les bases de la sécurité au labo : précautions standard, hygiène des mains et équipements de protection.',
    explication: [
      "Au labo, on manipule des échantillons **potentiellement infectieux** (sang, selles, urines, cultures…). La **biosécurité**, ce sont les règles qui protègent le personnel, les patients et l'environnement.",
      "La référence internationale est le **Manuel de sécurité biologique en laboratoire de l'OMS** (4e édition). Il repose sur l'**évaluation des risques** : on analyse chaque activité pour choisir les mesures de protection adaptées.",
      "Les fondamentaux restent les mêmes partout : de **bonnes techniques microbiologiques**, l'utilisation correcte des **équipements de sécurité**, et un **personnel bien formé**.",
      "**Les précautions standard** s'appliquent à **tous les patients**, dans tous les lieux de soins, **que l'on sache ou non** s'ils sont infectés. On considère donc chaque échantillon comme potentiellement infectieux. Elles comprennent notamment l'hygiène des mains, le port d'**équipements de protection individuelle (EPI)** adaptés (gants, blouse…) et la prévention des **accidents d'exposition au sang (AES)**.",
      "**L'hygiène des mains** est la pierre angulaire de la prévention des infections. L'OMS décrit **5 moments** : avant de toucher un patient ; avant un geste aseptique ; après un risque d'exposition à un liquide biologique ; après avoir touché un patient ; après avoir touché l'environnement du patient.",
    ],
    exempleLabo:
      "Chaque labo doit avoir des **procédures écrites** pour les situations à risque, par exemple que faire en cas de **renversement de matériel infectieux** sur la paillasse ou dans un poste de sécurité microbiologique. Lis-les dès ton arrivée en stage et demande où se trouvent le matériel d'urgence et le désinfectant.",
    aRetenir: [
      'Tout échantillon est considéré comme potentiellement infectieux.',
      'Précautions standard = pour tous les patients, toujours.',
      'Hygiène des mains : 5 moments selon l’OMS.',
      'EPI : gants, blouse… adaptés au risque.',
      'Référence : Manuel de sécurité biologique en laboratoire de l’OMS (4e éd.).',
    ],
    motsCles: ['Précautions standard', 'EPI', 'AES'],
    quiz: [
      { q: 'À qui s’appliquent les précautions standard ?', options: ['Seulement aux patients infectés connus', 'À tous les patients, infectés ou non', 'Seulement aux enfants', 'Seulement en chirurgie'], answer: 1, explication: 'Elles s’appliquent à tous, quel que soit le statut infectieux connu.' },
      { q: 'Sur quoi repose la 4e édition du manuel de biosécurité de l’OMS ?', options: ['Le hasard', 'L’évaluation des risques', 'Le prix du matériel', 'La météo'], answer: 1, explication: 'On choisit les mesures en fonction des risques évalués.' },
      { q: 'Lequel de ces moments fait partie des 5 moments de l’hygiène des mains ?', options: ['Après avoir touché un patient', 'Avant de répondre au téléphone', 'Après le repas uniquement', 'Avant de dormir'], answer: 0, explication: 'Les 5 moments : avant contact patient, avant geste aseptique, après exposition à un liquide biologique, après contact patient, après contact avec l’environnement du patient.' },
      { q: 'AES signifie…', options: ['Analyse en série', 'Accident d’exposition au sang', 'Agent extra-stérile', 'Antigène de surface'], answer: 1, explication: 'Accident d’exposition au sang (piqûre, projection…).' },
    ],
    flashcards: [
      { id: 'm8-b-1', recto: 'Précautions standard : pour qui ?', verso: 'Pour tous les patients, infectés ou non.' },
      { id: 'm8-b-2', recto: 'Les 5 moments de l’hygiène des mains ?', verso: 'Avant contact patient ; avant geste aseptique ; après exposition à un liquide biologique ; après contact patient ; après contact avec l’environnement du patient.' },
      { id: 'm8-b-3', recto: 'EPI = ?', verso: 'Équipements de protection individuelle.' },
      { id: 'm8-b-4', recto: 'Base de la 4e édition du manuel OMS ?', verso: 'L’évaluation des risques.' },
    ],
    sources: [S.omsBiosecurite, S.omsPrecautions, S.inrsPS],
    verifieAvecCours: false,
  },
  {
    id: 'm8-dechets',
    moduleId: 'm8',
    titre: 'Les déchets d’activités de soins',
    duree: 10,
    objectif: 'Connaître les grandes catégories de déchets de soins et l’importance du tri à la source.',
    explication: [
      "Les activités de soins et de labo produisent des déchets. Selon l'OMS, **environ 85 %** sont des **déchets généraux non dangereux**, comparables aux ordures ménagères.",
      "Les **15 % restants** peuvent être **dangereux** : déchets **infectieux** (contaminés par du sang ou d'autres liquides biologiques, cultures…), objets **piquants, coupants, tranchants**, déchets **chimiques** et **pharmaceutiques** (réactifs, médicaments périmés), et déchets **radioactifs**.",
      "**Les piquants/coupants/tranchants** sont particulièrement dangereux pour le personnel : aiguilles, seringues, scalpels, lames, pipettes, verre cassé. Ils vont dans des **conteneurs spéciaux** résistants à la perforation.",
      "**Le tri à la source** est essentiel : chaque déchet doit être jeté dans le bon contenant **au moment où il est produit**. Dans beaucoup de pays à faible revenu, les déchets ne sont pas bien séparés, ce qui augmente fortement la quantité de déchets à traiter comme dangereux.",
    ],
    exempleLabo:
      "Les **codes couleur** des sacs et conteneurs (par exemple pour les déchets infectieux ou les piquants) **varient selon les pays et les établissements**. Apprends ceux de ton labo et de ton cours de l'INFAS, et ne remets jamais le capuchon d'une aiguille usagée à deux mains : jette-la directement dans le conteneur pour objets piquants.",
    aRetenir: [
      'Environ 85 % des déchets de soins sont non dangereux.',
      'Environ 15 % peuvent être dangereux : infectieux, piquants, chimiques, pharmaceutiques, radioactifs.',
      'Piquants/coupants : conteneur résistant à la perforation.',
      'Tri à la source, au moment où le déchet est produit.',
      'Codes couleur : suivre le protocole local.',
    ],
    motsCles: ['Déchets piquants coupants', 'Précautions standard'],
    quiz: [
      { q: 'Selon l’OMS, quelle part des déchets de soins est non dangereuse ?', options: ['Environ 15 %', 'Environ 50 %', 'Environ 85 %', '100 %'], answer: 2, explication: 'Environ 85 % sont des déchets généraux non dangereux.' },
      { q: 'Où jette-t-on une aiguille usagée ?', options: ['Dans la poubelle ordinaire', 'Dans un conteneur pour objets piquants/coupants', 'Dans l’évier', 'Dans un sac plastique simple'], answer: 1, explication: 'Les piquants vont dans des conteneurs résistants à la perforation.' },
      { q: 'Pourquoi trier les déchets à la source ?', options: ['Pour gagner du temps uniquement', 'Pour éviter de mélanger déchets dangereux et non dangereux', 'Ce n’est pas utile', 'Pour colorer les sacs'], answer: 1, explication: 'Un mauvais tri augmente la quantité de déchets à traiter comme dangereux et les risques.' },
      { q: 'Un réactif de labo périmé est un déchet…', options: ['Général', 'Chimique / pharmaceutique', 'Radioactif', 'Alimentaire'], answer: 1, explication: 'Les réactifs et médicaments périmés sont des déchets chimiques ou pharmaceutiques.' },
    ],
    flashcards: [
      { id: 'm8-d-1', recto: 'Part des déchets de soins non dangereux (OMS) ?', verso: 'Environ 85 %.' },
      { id: 'm8-d-2', recto: 'Exemples de piquants/coupants ?', verso: 'Aiguilles, seringues, scalpels, lames, pipettes, verre cassé.' },
      { id: 'm8-d-3', recto: 'Règle d’or du tri ?', verso: 'Trier à la source, au moment où le déchet est produit.' },
    ],
    sources: [S.omsDechets],
    verifieAvecCours: false,
  },
]
