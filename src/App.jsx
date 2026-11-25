import './App.css'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Etudiants from './components/Etudiants'
import Ajouter from './components/Ajouter'
import Parametres from './components/Parametres'


function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/etudiants" element={<Etudiants />} />
  <Route path="/ajouter" element={<Ajouter />} />
  <Route path="/parametres" element={<Parametres />} />
</Routes>

      </main>
    </div>
  )
}

export default App