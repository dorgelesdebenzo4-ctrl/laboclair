import type { Lesson } from '../types'
import { S } from '../sources'

// MODULES 3 (Hématologie), 4 (Parasitologie) et 5 (Bactériologie).
// Rédigé à partir des sources citées sous chaque leçon.

export const module3Lessons: Lesson[] = [
  {
    id: 'm3-nfs',
    moduleId: 'm3',
    titre: 'La NFS (numération formule sanguine)',
    duree: 15,
    objectif: 'Savoir ce que mesure une NFS, connaître ses principaux paramètres et comprendre ce qu’est une anémie.',
    explication: [
      "La **NFS** (on dit aussi **hémogramme**) est l'analyse de sang **la plus souvent réalisée**. Elle évalue tous les éléments cellulaires du sang : **globules rouges, globules blancs et plaquettes**.",
      "**Côté globules rouges**, la NFS donne : le **nombre de globules rouges** ; l'**hémoglobine** (la quantité de cette protéine qui transporte l'oxygène dans un volume de sang) ; l'**hématocrite** (la part du volume sanguin occupée par les globules rouges) ; et des **indices** qui décrivent les globules rouges, comme la quantité moyenne d'hémoglobine par globule rouge (**TCMH**), sa concentration moyenne (**CCMH**) ou la variabilité de leur taille.",
      "**Côté globules blancs**, on obtient le **nombre total de globules blancs** et la **formule leucocytaire** (numération différentielle) : le pourcentage et le nombre de chaque type de globule blanc.",
      "**Côté plaquettes**, on obtient la **numération plaquettaire**.",
      "Une **anémie**, c'est quand le taux de globules rouges ou d'hémoglobine est trop bas : le sang transporte alors moins d'oxygène. Une NFS faite lors d'un bilan de routine peut révéler une anémie.",
    ],
    exempleLabo:
      "La NFS se fait sur un **tube EDTA** (sang non coagulé). Aujourd'hui, elle est réalisée par des automates qui comptent les cellules et mesurent aussi leur volume et leur contenu en hémoglobine. **Attention aux valeurs normales** : les intervalles de référence ont souvent été établis sur des populations européennes et peuvent être différents pour d'autres populations. Utilise toujours les valeurs de référence données par **ton labo** et par **ton cours**.",
    aRetenir: [
      'NFS = analyse des globules rouges, globules blancs et plaquettes.',
      'Hémoglobine = quantité de la protéine qui transporte l’oxygène.',
      'Hématocrite = part du volume sanguin occupée par les globules rouges.',
      'Formule leucocytaire = pourcentage et nombre de chaque type de globule blanc.',
      'Anémie = taux de globules rouges ou d’hémoglobine trop bas.',
    ],
    motsCles: ['NFS', 'Hématocrite', 'Hémoglobine', 'Formule leucocytaire', 'Anémie'],
    quiz: [
      { q: 'Que mesure l’hématocrite ?', options: ['Le nombre de plaquettes', 'La part du volume sanguin occupée par les globules rouges', 'La quantité de glucose', 'Le nombre de globules blancs'], answer: 1, explication: 'L’hématocrite est la fraction du sang constituée de globules rouges.' },
      { q: 'La formule leucocytaire donne…', options: ['Le groupe sanguin', 'Le pourcentage et le nombre de chaque type de globule blanc', 'Le taux d’hémoglobine', 'Le temps de coagulation'], answer: 1, explication: 'C’est la numération différentielle des globules blancs.' },
      { q: 'Une anémie correspond à…', options: ['Trop de globules blancs', 'Un taux bas de globules rouges ou d’hémoglobine', 'Trop de plaquettes', 'Un sang trop sucré'], answer: 1, explication: 'Le sang transporte alors moins d’oxygène.' },
      { q: 'Pourquoi faut-il utiliser les valeurs de référence du labo ?', options: ['Parce qu’elles sont toujours identiques partout', 'Parce que les intervalles peuvent varier selon la population et la méthode', 'Parce que la NFS n’a pas de valeurs normales', 'Ce n’est pas nécessaire'], answer: 1, explication: 'Les intervalles de référence ont souvent été établis sur d’autres populations.' },
    ],
    flashcards: [
      { id: 'm3-n-1', recto: 'NFS : 3 grandes familles de cellules analysées ?', verso: 'Globules rouges, globules blancs, plaquettes.' },
      { id: 'm3-n-2', recto: 'Hématocrite = ?', verso: 'La part du volume sanguin occupée par les globules rouges.' },
      { id: 'm3-n-3', recto: 'TCMH = ?', verso: 'Quantité moyenne d’hémoglobine par globule rouge.' },
      { id: 'm3-n-4', recto: 'Anémie = ?', verso: 'Taux trop bas de globules rouges ou d’hémoglobine.' },
    ],
    sources: [S.msdAnalysesSang, S.msdTableNFS, S.msdConstituantsSang, S.refValeurs],
    verifieAvecCours: false,
  },
  {
    id: 'm3-groupes',
    moduleId: 'm3',
    titre: 'Les groupes sanguins ABO et Rhésus',
    duree: 15,
    objectif: 'Comprendre les groupes A, B, AB et O, le facteur Rhésus, et pourquoi la compatibilité est vitale lors d’une transfusion.',
    explication: [
      "À la surface des globules rouges, il y a des **antigènes**. Les plus importants pour la transfusion sont les antigènes **A** et **B** (système **ABO**) et l'antigène **Rhésus D** (système **Rh**).",
      "**Les 4 groupes ABO :** groupe **A** = antigène A ; groupe **B** = antigène B ; groupe **AB** = antigènes A et B ; groupe **O** = ni A ni B.",
      "Contre les antigènes A et B qu'elle ne possède pas, une personne a **naturellement des anticorps** dans son plasma. Par exemple, une personne du groupe A a des anticorps **anti-B**. Une personne du groupe O a des anti-A et des anti-B.",
      "**Le facteur Rhésus :** si l'antigène D est présent, on est **Rh positif (+)** ; s'il est absent, on est **Rh négatif (−)**. On obtient ainsi 8 groupes : O−, O+, A−, A+, B−, B+, AB−, AB+.",
      "**Pourquoi c'est vital :** si on transfuse des globules rouges incompatibles, les anticorps du receveur les détruisent (**hémolyse**). L'hémolyse la plus fréquente et la plus grave arrive quand des globules rouges **ABO incompatibles** du donneur sont détruits par les anticorps du plasma du receveur. En règle générale, on transfuse du sang du **même groupe ABO**. En urgence, quand le groupe est inconnu, on utilise des **concentrés de globules rouges O Rh négatif**.",
    ],
    exempleLabo:
      "Avant une transfusion, le labo fait le **typage ABO et Rh(D)** du receveur et du donneur, un **dépistage des anticorps**, et des **tests de compatibilité**. C'est un des actes où **l'identification du tube et du patient** ne doit souffrir d'aucune erreur.",
    aRetenir: [
      'Groupe = antigènes présents sur les globules rouges.',
      'A = antigène A ; B = antigène B ; AB = les deux ; O = aucun.',
      'Le plasma contient naturellement des anticorps contre les antigènes A/B absents.',
      'Rh+ = antigène D présent ; Rh− = absent.',
      'Urgence, groupe inconnu : concentrés de globules rouges O Rh négatif.',
    ],
    motsCles: ['Système ABO', 'Rhésus', 'Antigène', 'Anticorps', 'Hémolyse'],
    quiz: [
      { q: 'Une personne du groupe B possède sur ses globules rouges…', options: ['L’antigène A', 'L’antigène B', 'Les antigènes A et B', 'Aucun antigène'], answer: 1, explication: 'Groupe B = antigène B.' },
      { q: 'Une personne du groupe A a dans son plasma des anticorps…', options: ['Anti-A', 'Anti-B', 'Anti-A et anti-B', 'Aucun'], answer: 1, explication: 'On a des anticorps contre l’antigène qu’on ne possède pas : ici anti-B.' },
      { q: 'Rh négatif signifie que…', options: ['L’antigène D est absent', 'L’antigène A est absent', 'Le sang ne coagule pas', 'Le patient est anémique'], answer: 0, explication: 'Rh− = absence de l’antigène D.' },
      { q: 'En urgence, si le groupe est inconnu, on transfuse des globules rouges…', options: ['AB+', 'A+', 'O Rh négatif', 'B−'], answer: 2, explication: 'Les globules rouges O Rh− ne portent ni A, ni B, ni D.' },
      { q: 'Le groupe O possède…', options: ['Les antigènes A et B', 'Aucun antigène A ni B', 'Seulement l’antigène D', 'Seulement l’antigène A'], answer: 1, explication: 'Groupe O = ni A ni B (et il a des anti-A et anti-B dans le plasma).' },
    ],
    flashcards: [
      { id: 'm3-g-1', recto: 'Groupe AB : antigènes ?', verso: 'A et B.' },
      { id: 'm3-g-2', recto: 'Groupe O : anticorps dans le plasma ?', verso: 'Anti-A et anti-B.' },
      { id: 'm3-g-3', recto: 'Rh+ = ?', verso: 'Antigène D présent sur les globules rouges.' },
      { id: 'm3-g-4', recto: 'Globules rouges utilisés en urgence (groupe inconnu) ?', verso: 'O Rh négatif.' },
    ],
    sources: [S.msdTransfusion, S.msdCollecteSang, S.msdComplicationsTransfusion],
    verifieAvecCours: false,
  },
]

export const module4Lessons: Lesson[] = [
  {
    id: 'm4-paludisme',
    moduleId: 'm4',
    titre: 'Le paludisme et son diagnostic',
    duree: 16,
    objectif: 'Connaître l’agent du paludisme, son mode de transmission, et les trois examens de diagnostic : goutte épaisse, frottis et TDR.',
    explication: [
      "Le **paludisme** est une maladie causée par un parasite du genre **Plasmodium**. C'est un **protozoaire** (un être vivant fait d'une seule cellule, avec un noyau).",
      "Il est transmis par la piqûre d'un moustique, l'**anophèle femelle** : elle a besoin d'un repas de sang pour pondre et injecte alors le parasite. Les moustiques mâles ne piquent pas.",
      "Plusieurs espèces infectent l'être humain : **P. falciparum** (la plus dangereuse, responsable de la majorité des décès), **P. vivax**, **P. ovale**, **P. malariae** et **P. knowlesi**. Fait intéressant : la plupart des populations d'Afrique subsaharienne sont résistantes à P. vivax, car leurs globules rouges n'ont pas l'antigène **Duffy** qui lui sert de porte d'entrée.",
      "Le paludisme pèse surtout sur l'Afrique : en 2023, on estimait environ **263 millions de cas**, dont **94 % en Afrique**, et environ **597 000 décès**, surtout des enfants de moins de 5 ans.",
      "**Le diagnostic au labo :** on recherche le parasite dans le sang, au **microscope** ou avec un **test de diagnostic rapide (TDR)**. Au microscope, la **goutte épaisse** est **plus sensible** pour détecter le parasite, tandis que le **frottis mince** permet de **mieux identifier l'espèce**. Les lames sont colorées au **Giemsa**.",
    ],
    exempleLabo:
      "Comme le paludisme est très fréquent en Afrique, la goutte épaisse et le frottis font partie des examens de base du labo. Sur le frottis, le globule rouge reste intact et on voit le parasite à l'intérieur, ce qui aide à reconnaître l'espèce. Le TDR peut être utilisé seul ou avec la microscopie ; il est particulièrement utile là où la microscopie n'est pas disponible (zones rurales, sans électricité ou sans personnel formé). Pour apprendre à reconnaître les formes du parasite, l'OMS publie des **planches de diagnostic microscopique du paludisme**.",
    aRetenir: [
      'Agent : Plasmodium (protozoaire).',
      'Vecteur : anophèle femelle.',
      'P. falciparum = l’espèce la plus dangereuse.',
      'Goutte épaisse = plus sensible ; frottis = meilleure identification de l’espèce.',
      'Coloration des lames : Giemsa. Alternative sans microscope : TDR.',
    ],
    motsCles: ['Plasmodium', 'Anophèle', 'Goutte épaisse', 'Frottis sanguin', 'TDR'],
    quiz: [
      { q: 'Quel moustique transmet le paludisme ?', options: ['L’Aedes mâle', 'L’anophèle femelle', 'Le Culex mâle', 'L’anophèle mâle'], answer: 1, explication: 'Seule la femelle pique (repas de sang pour pondre).' },
      { q: 'Quelle espèce de Plasmodium est la plus dangereuse ?', options: ['P. vivax', 'P. malariae', 'P. falciparum', 'P. ovale'], answer: 2, explication: 'P. falciparum est responsable de la majorité des décès.' },
      { q: 'Quel examen est le plus sensible pour détecter le parasite ?', options: ['Le frottis mince', 'La goutte épaisse', 'La NFS', 'Le groupe sanguin'], answer: 1, explication: 'La goutte épaisse est plus sensible ; le frottis identifie mieux l’espèce.' },
      { q: 'Quelle coloration utilise-t-on pour les lames de paludisme ?', options: ['Gram', 'Giemsa', 'Ziehl', 'Lugol'], answer: 1, explication: 'Gouttes épaisses et frottis sont colorés au Giemsa.' },
      { q: 'Pourquoi P. vivax est rare en Afrique subsaharienne ?', options: ['Il n’y a pas de moustiques', 'Beaucoup de personnes n’ont pas l’antigène Duffy', 'Il fait trop chaud', 'Les TDR le détruisent'], answer: 1, explication: 'P. vivax utilise l’antigène Duffy pour entrer dans les globules rouges.' },
    ],
    flashcards: [
      { id: 'm4-p-1', recto: 'Agent du paludisme ?', verso: 'Plasmodium (un protozoaire).' },
      { id: 'm4-p-2', recto: 'Vecteur du paludisme ?', verso: 'L’anophèle femelle.' },
      { id: 'm4-p-3', recto: 'Goutte épaisse vs frottis ?', verso: 'Goutte épaisse : plus sensible. Frottis : meilleure identification de l’espèce.' },
      { id: 'm4-p-4', recto: 'TDR = ?', verso: 'Test de diagnostic rapide.' },
    ],
    sources: [S.pasteurPalu, S.msdPaludisme, S.onuPalu, S.omsPlanchesPalu],
    verifieAvecCours: false,
  },
  {
    id: 'm4-helminthes',
    moduleId: 'm4',
    titre: 'Les vers intestinaux : ascaris et ankylostomes',
    duree: 14,
    objectif: 'Connaître deux vers intestinaux fréquents, leur mode de contamination, et savoir comment on les diagnostique au labo.',
    explication: [
      "Les **helminthes** sont des vers parasites. Parmi les plus fréquents dans les régions chaudes et humides, il y a les **vers ronds** (nématodes) comme l'**ascaris** et les **ankylostomes**.",
      "**L'ascaris (Ascaris lumbricoides)** vit dans l'intestin grêle. Ses **œufs** sont éliminés dans les **selles** et se développent dans le **sol** pendant plusieurs semaines avant de devenir infestants. On s'infecte en **avalant ces œufs**, par exemple avec des aliments en contact avec un sol contaminé par des excréments humains. Les œufs sont très résistants : ils peuvent survivre plusieurs années dans le sol.",
      "**Les ankylostomes** (Ancylostoma duodenale et Necator americanus) ont un autre mode d'entrée. Leurs œufs, éliminés dans les selles, éclosent dans un sol chaud et humide en 1 à 2 jours. Les **larves pénètrent à travers la peau** (par exemple en marchant pieds nus).",
      "Les ankylostomes adultes s'accrochent à la paroi de l'intestin grêle et **se nourrissent de sang** : la personne perd du sang et peut développer une **anémie**. Les vers adultes peuvent vivre au moins 2 ans.",
    ],
    exempleLabo:
      "Le diagnostic repose sur l'**examen parasitologique des selles** : on recherche les **œufs** au microscope (et parfois des vers adultes). Pour les ankylostomes, l'échantillon doit être **examiné rapidement** : si les selles ne sont pas conservées au froid et analysées dans les heures qui suivent, les œufs peuvent éclore.",
    aRetenir: [
      'Ascaris : contamination en avalant les œufs (aliments, mains, sol souillé).',
      'Ankylostomes : les larves traversent la peau.',
      'Les ankylostomes se nourrissent de sang → risque d’anémie.',
      'Diagnostic : recherche des œufs dans les selles au microscope.',
      'Selles à examiner rapidement (les œufs d’ankylostome peuvent éclore).',
    ],
    motsCles: ['Helminthe', 'Examen parasitologique des selles', 'Anémie'],
    quiz: [
      { q: 'Comment s’infecte-t-on par l’ascaris ?', options: ['Par piqûre de moustique', 'En avalant des œufs présents dans un sol ou des aliments souillés', 'Par transfusion', 'Par la respiration'], answer: 1, explication: 'Les œufs ingérés éclosent dans l’intestin.' },
      { q: 'Par où les larves d’ankylostome entrent-elles dans le corps ?', options: ['Par la bouche', 'Par la peau', 'Par les yeux', 'Par les oreilles'], answer: 1, explication: 'Les larves vivent dans le sol et pénètrent à travers la peau.' },
      { q: 'Pourquoi les ankylostomes peuvent-ils provoquer une anémie ?', options: ['Ils détruisent les reins', 'Ils se nourrissent de sang dans l’intestin', 'Ils bloquent la moelle osseuse', 'Ils produisent du sucre'], answer: 1, explication: 'Les adultes fixés à la paroi intestinale se nourrissent de sang.' },
      { q: 'Quel examen permet le diagnostic de ces vers ?', options: ['La NFS', 'L’examen parasitologique des selles', 'La glycémie', 'Le groupe sanguin'], answer: 1, explication: 'On recherche les œufs dans les selles au microscope.' },
    ],
    flashcards: [
      { id: 'm4-h-1', recto: 'Ascaris : mode de contamination ?', verso: 'Ingestion d’œufs (sol, aliments souillés par des excréments).' },
      { id: 'm4-h-2', recto: 'Ankylostome : porte d’entrée ?', verso: 'La peau (larves présentes dans le sol).' },
      { id: 'm4-h-3', recto: 'Complication classique de l’ankylostomiase ?', verso: 'L’anémie (perte de sang).' },
      { id: 'm4-h-4', recto: 'Diagnostic des vers intestinaux ?', verso: 'Recherche des œufs dans les selles au microscope.' },
    ],
    sources: [S.msdAscaris, S.msdAnkylo],
    verifieAvecCours: false,
  },
]

export const module5Lessons: Lesson[] = [
  {
    id: 'm5-gram',
    moduleId: 'm5',
    titre: 'Les bactéries et la coloration de Gram',
    duree: 15,
    objectif: 'Connaître les formes des bactéries, les étapes de la coloration de Gram et la différence entre Gram positif et Gram négatif.',
    explication: [
      "Seules quelques espèces de bactéries sont **pathogènes** (elles causent des maladies). Pour les identifier, on regarde d'abord leur **forme** et leur **coloration**.",
      "**Les 3 formes de base :** les **coques** (ou cocci, rondes), les **bacilles** (en bâtonnet) et les **spirochètes** (en spirale).",
      "**La coloration de Gram** est la coloration la plus utilisée en bactériologie. Elle a été mise au point par le médecin danois **Gram en 1884**. Les étapes : on **fixe** le prélèvement sur une lame (par la chaleur), puis on applique successivement le **cristal violet** (violet de gentiane), l'**iode** (lugol), un **décolorant** (alcool), et enfin une **contre-coloration** (safranine ou fuchsine).",
      "**Le résultat :** les bactéries **Gram positif** gardent le violet et apparaissent **violet foncé / bleu**. Les bactéries **Gram négatif** perdent le violet à l'alcool et prennent la contre-coloration : elles apparaissent **roses / rouges**.",
      "**Pourquoi cette différence ?** À cause de leur **paroi**. Les Gram positif ont une **paroi épaisse de peptidoglycane** qui retient le colorant. Les Gram négatif ont une paroi plus mince et une **membrane externe**, qui les protège aussi contre certains antibiotiques.",
    ],
    exempleLabo:
      "La plupart des prélèvements reçus en bactériologie passent par une coloration de Gram. Associée à la **forme** des bactéries et à leur **disposition** (en amas, en chaînettes…), elle oriente l'identification du germe et le choix du traitement. Exemple : **E. coli** apparaît comme des **bacilles Gram négatif** (bâtonnets roses). Aucune coloration n'est spécifique à 100 % : ce n'est qu'une première orientation.",
    aRetenir: [
      'Formes : coques, bacilles, spirochètes.',
      'Gram : cristal violet → lugol → alcool → safranine/fuchsine.',
      'Gram positif = violet ; Gram négatif = rose/rouge.',
      'Différence due à la paroi (peptidoglycane épais chez les Gram +).',
      'E. coli = bacille Gram négatif.',
    ],
    motsCles: ['Coloration de Gram', 'Peptidoglycane', 'Bacille', 'Coque'],
    quiz: [
      { q: 'Dans quel ordre se fait la coloration de Gram ?', options: ['Alcool → cristal violet → lugol → fuchsine', 'Cristal violet → lugol → alcool → safranine/fuchsine', 'Lugol → fuchsine → alcool → cristal violet', 'Fuchsine → alcool → lugol → cristal violet'], answer: 1, explication: 'Colorant, fixation par l’iode, décoloration, contre-coloration.' },
      { q: 'De quelle couleur apparaissent les bactéries Gram négatif ?', options: ['Violet foncé', 'Roses / rouges', 'Vertes', 'Incolores'], answer: 1, explication: 'Elles perdent le violet et prennent la contre-coloration rose/rouge.' },
      { q: 'Une bactérie en forme de bâtonnet s’appelle…', options: ['Une coque', 'Un bacille', 'Un spirochète', 'Un protozoaire'], answer: 1, explication: 'Bacille = bâtonnet ; coque = sphère ; spirochète = spirale.' },
      { q: 'Pourquoi les Gram positif restent violets ?', options: ['Leur paroi épaisse de peptidoglycane retient le colorant', 'Ils n’ont pas de paroi', 'Ils sont plus gros', 'Ils absorbent l’alcool'], answer: 0, explication: 'La paroi épaisse retient le complexe colorant-iode malgré l’alcool.' },
    ],
    flashcards: [
      { id: 'm5-g-1', recto: '3 formes de bactéries ?', verso: 'Coques (sphères), bacilles (bâtonnets), spirochètes (spirales).' },
      { id: 'm5-g-2', recto: 'Étapes du Gram ?', verso: 'Cristal violet → lugol → alcool → safranine (ou fuchsine).' },
      { id: 'm5-g-3', recto: 'Couleur des Gram positif ?', verso: 'Violet foncé / bleu.' },
      { id: 'm5-g-4', recto: 'E. coli au Gram ?', verso: 'Bacille Gram négatif (rose).' },
    ],
    sources: [S.msdBacteries, S.msdMicroscopie, S.msdGramNeg, S.larousseGram],
    verifieAvecCours: false,
  },
  {
    id: 'm5-culture',
    moduleId: 'm5',
    titre: 'La culture et l’antibiogramme',
    duree: 14,
    objectif: 'Comprendre pourquoi on met les bactéries en culture et à quoi sert un antibiogramme.',
    explication: [
      "**La culture**, c'est faire **pousser** un micro-organisme sur ou dans un **milieu nutritif**, solide (gélose) ou liquide (bouillon). En augmentant le nombre de bactéries, on facilite leur **identification**, et on peut ensuite tester les antibiotiques.",
      "**Les prélèvements « stériles » :** certains endroits du corps ne contiennent normalement **aucun microbe** : le **sang**, l'**urine** (dans la vessie) ou le **liquide céphalorachidien**. Y trouver un microbe est anormal, à condition que la peau ait été désinfectée avant le prélèvement pour éviter une contamination.",
      "Certaines bactéries demandent des conditions particulières. Par exemple, les **mycobactéries** (comme celle de la tuberculose) poussent très lentement : les cultures sont gardées **8 semaines** avant d'être déclarées négatives.",
      "**L'antibiogramme** sert à déterminer la **sensibilité** d'une bactérie aux antibiotiques : on met une quantité standard de bactéries en présence de concentrations précises d'antibiotiques et on regarde lesquels empêchent sa croissance.",
      "**La méthode des disques :** des disques imprégnés d'antibiotique sont posés sur une gélose ensemencée. L'antibiotique **diffuse** dans le milieu et **empêche la croissance** des bactéries sensibles autour du disque. On peut aussi mesurer la **CMI** (concentration minimale inhibitrice) : la plus petite concentration d'antibiotique qui inhibe la bactérie.",
    ],
    exempleLabo:
      "Les résultats d'un antibiogramme dépendent de nombreux facteurs (milieu, quantité de bactéries, conservation des disques…). C'est pour cela que le labo teste en parallèle des **souches de contrôle qualité** de référence (par exemple une souche d'E. coli), pour vérifier que la technique est fiable.",
    aRetenir: [
      'Culture = faire pousser le germe sur un milieu nutritif pour l’identifier.',
      'Sang, urine et LCR sont normalement stériles.',
      'Antibiogramme = tester la sensibilité d’une bactérie aux antibiotiques.',
      'Méthode des disques : l’antibiotique diffuse et bloque les bactéries sensibles.',
      'CMI = plus petite concentration d’antibiotique qui inhibe la bactérie.',
    ],
    motsCles: ['Culture', 'Antibiogramme', 'CMI'],
    quiz: [
      { q: 'À quoi sert la culture bactérienne ?', options: ['À tuer les bactéries', 'À faire pousser le germe pour l’identifier et tester les antibiotiques', 'À colorer les bactéries', 'À compter les globules blancs'], answer: 1, explication: 'Plus de bactéries = identification plus facile, et antibiogramme possible.' },
      { q: 'Lequel de ces liquides est normalement stérile ?', options: ['Les selles', 'Le liquide céphalorachidien', 'La salive', 'Les crachats'], answer: 1, explication: 'Le LCR, le sang et l’urine (dans la vessie) ne contiennent normalement pas de microbes.' },
      { q: 'L’antibiogramme permet de…', options: ['Connaître le groupe sanguin', 'Savoir à quels antibiotiques la bactérie est sensible', 'Mesurer la glycémie', 'Colorer les bactéries'], answer: 1, explication: 'C’est un test de sensibilité aux antibiotiques.' },
      { q: 'La CMI, c’est…', options: ['La concentration maximale d’antibiotique tolérée', 'La plus petite concentration d’antibiotique qui inhibe la bactérie', 'Le nombre de colonies', 'Un milieu de culture'], answer: 1, explication: 'CMI = concentration minimale inhibitrice.' },
    ],
    flashcards: [
      { id: 'm5-c-1', recto: 'But de la culture ?', verso: 'Faire pousser le germe pour l’identifier et réaliser l’antibiogramme.' },
      { id: 'm5-c-2', recto: 'Antibiogramme = ?', verso: 'Test de la sensibilité d’une bactérie aux antibiotiques.' },
      { id: 'm5-c-3', recto: 'CMI = ?', verso: 'Concentration minimale inhibitrice.' },
      { id: 'm5-c-4', recto: 'Pourquoi des souches de contrôle qualité ?', verso: 'Pour vérifier que la technique de l’antibiogramme est fiable.' },
    ],
    sources: [S.msdCulture, S.msdAntibiogramme, S.omsCQAntibio, S.msdDiagInfection],
    verifieAvecCours: false,
  },
]
