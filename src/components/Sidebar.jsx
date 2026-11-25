import { Link } from 'react-router-dom'

function Sidebar() {
    return (
      <div className="sidebar">
        
        <h2>Gestion Étudiants</h2>

        <ul>
        <li>
            <Link to="/">Accueil</Link>
        </li>

        <li>
            <Link to="/etudiants">Étudiants</Link>
        </li>

        <li>
            <Link to="/ajouter">Ajouter étudiant</Link>
        </li>

        <li>
            <Link to="/parametres">Paramètres</Link>
    </li>
    </ul>
    </div>
  )
}

export default Sidebar