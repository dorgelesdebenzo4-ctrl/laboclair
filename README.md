# LaboClair 🧪

🌐 **Site en ligne : https://dorgelesdebenzo4-ctrl.github.io/laboclair/**

Site d'apprentissage personnel pour la formation **TBM (Technicien en Biologie Médicale)** à l'INFAS.
Leçons simples, schémas, quiz, flashcards, glossaire et exercices de calcul. Fonctionne hors ligne
et s'installe sur le téléphone comme une application.

> ⚠️ Le contenu est rédigé avec Claude à partir de sources citées sous chaque leçon
> (OMS, Manuel MSD, organismes de santé publique). Il doit être vérifié avec les cours
> de l'INFAS : en cas de différence, c'est le cours qui fait foi.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse affichée (souvent http://localhost:5173).

## Mettre en ligne sur GitHub Pages

1. Crée un dépôt GitHub (par exemple `laboclair`) et envoie le code sur la branche `main`.
2. Dans le dépôt : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
3. Chaque `git push` sur `main` déploie automatiquement le site (fichier `.github/workflows/deploy.yml`).
4. Adresse du site : `https://<ton-pseudo>.github.io/laboclair/`

Sur le téléphone : ouvre le site dans Chrome → menu ⋮ → **Ajouter à l'écran d'accueil**.

## Ajouter une leçon

Les leçons sont dans `src/data/lessons/` (un fichier par module).

1. Copie une leçon existante dans le bon fichier et change son `id` (ex. `m1-ph`).
2. Remplis : `objectif`, `explication` (paragraphes, `**gras**` autorisé), `exempleLabo`, `aRetenir`,
   `motsCles`, `quiz`, `flashcards` et `sources` (liste dans `src/data/sources.ts`).
3. Passe `verifieAvecCours` à `true` une fois la leçon vérifiée avec ton cours.
4. Pour un nouveau module : crée `moduleX.ts`, puis branche-le dans `src/data/modules.ts`
   (même modèle que `module1Lessons`).
5. Ajoute les nouveaux termes dans `src/data/glossary.ts`.

Les schémas sont des SVG dans `src/diagrams/Diagrams.tsx`.

## Structure

```
src/
  data/          contenu (modules, leçons, glossaire)
  diagrams/      schémas SVG
  lib/store.ts   progression (stockée dans le navigateur)
  components/    mise en page, éléments d'interface
  pages/         écrans (accueil, modules, leçon, cartes, glossaire, calculs, paramètres…)
```

## Technique

React 19 · TypeScript · Vite · Tailwind CSS · PWA (vite-plugin-pwa) · HashRouter (compatible GitHub Pages).

La progression est enregistrée dans le navigateur (`localStorage`), avec export/import dans les paramètres.
Le format (`AppState` dans `src/lib/store.ts`) est prévu pour être déplacé vers Supabase en V2,
quand le site sera partagé avec d'autres élèves.

## Scripts

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Version de production (dossier `dist/`, avec PWA) |
| `npm run build:preview` | Version en un seul fichier HTML (dossier `dist-preview/`) |
