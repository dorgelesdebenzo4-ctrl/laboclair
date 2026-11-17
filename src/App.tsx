import { HashRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { Modules, ModuleDetail } from './pages/Modules'
import Lesson from './pages/Lesson'
import Flashcards from './pages/Flashcards'
import { Glossary, Search } from './pages/Glossary'
import Calculs from './pages/Calculs'
import { More, Progression, Settings } from './pages/More'

// HashRouter : compatible GitHub Pages sans configuration serveur.
// MemoryRouter : pour l'aperçu en un seul fichier (affiché dans un cadre).
const Router = import.meta.env.MODE === 'preview' ? MemoryRouter : HashRouter

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="modules" element={<Modules />} />
          <Route path="module/:id" element={<ModuleDetail />} />
          <Route path="lecon/:id" element={<Lesson />} />
          <Route path="cartes" element={<Flashcards />} />
          <Route path="glossaire" element={<Glossary />} />
          <Route path="recherche" element={<Search />} />
          <Route path="calculs" element={<Calculs />} />
          <Route path="plus" element={<More />} />
          <Route path="progression" element={<Progression />} />
          <Route path="parametres" element={<Settings />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}
