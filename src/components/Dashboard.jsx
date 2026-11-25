import { useState } from 'react'

function Dashboard() {

  const [search, setSearch] = useState('')

  const [students, setStudents] = useState([
    { id: 1, nom: 'Ezzarrary', prenom: 'Zakaria', filiere: 'Developpment full stack' },
    { id: 2, nom: 'Adil', prenom: 'Achraf', filiere: 'Developpment application' },
    { id: 3, nom: 'Chakir', prenom: 'Badr', filiere: 'Gestion' },
    { id: 4, nom: 'Kharbouch', prenom: 'Mustapha', filiere: 'Cyber Security' }
  ])

  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [filiere, setFiliere] = useState('')
  const [editingId, setEditingId] = useState(null)

  function ajouterEtudiant(e) {
    e.preventDefault()

    if (editingId !== null) {
      const updatedStudents = students.map((student) => {
        if (student.id === editingId) {
          return {
            ...student,
            nom: nom,
            prenom: prenom,
            filiere: filiere
          }
        }
        return student
      })

      setStudents(updatedStudents)
      setEditingId(null)

    } else {
      const newStudent = {
        id: Date.now(),
        nom: nom,
        prenom: prenom,
        filiere: filiere
      }

      setStudents([...students, newStudent])
    }

    setNom('')
    setPrenom('')
    setFiliere('')
  }

  function modifierEtudiant(student) {
    setNom(student.nom)
    setPrenom(student.prenom)
    setFiliere(student.filiere)
    setEditingId(student.id)
  }

  function supprimerEtudiant(id) {
    const newStudents = students.filter((student) => student.id !== id)
    setStudents(newStudents)
  }

  const filteredStudents = students.filter((student) =>
    student.nom.toLowerCase().includes(search.toLowerCase()) ||
    student.prenom.toLowerCase().includes(search.toLowerCase())
  )

return (
<div className="dashboard">

  <h2>Tableau de bord</h2>
  <p>Voici un aperçu de notre établissement</p>

  <div className="cards">

    <div className="card">
      <h3>Total étudiants</h3>
      <p>{students.length}</p>
    </div>

    <div className="card">
      <h3>Formations</h3>
      <p>3</p>
    </div>

    <div className="card">
      <h3>Étudiants actifs</h3>
      <p>20</p>
    </div>

  </div>

  <h2>
    {editingId !== null ? 'Modifier un étudiant' : 'Ajouter un étudiant'}
  </h2>

  <form onSubmit={ajouterEtudiant} className="student-form">

    <input
      type="text"
      placeholder="Nom"
      value={nom}
      onChange={(e) => setNom(e.target.value)}
      required
    />

    <input
      type="text"
      placeholder="Prénom"
      value={prenom}
      onChange={(e) => setPrenom(e.target.value)}
      required
    />

    <input
      type="text"
      placeholder="Filière"
      value={filiere}
      onChange={(e) => setFiliere(e.target.value)}
      required
    />

    <button type="submit">
      {editingId !== null ? 'Enregistrer' : 'Ajouter'}
    </button>

  </form>

  <h2>Liste des étudiants</h2>

  <input
    type="text"
    placeholder="Rechercher un étudiant..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Filière</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {filteredStudents.map((student) => (
        <tr key={student.id}>
          <td>{student.nom}</td>
          <td>{student.prenom}</td>
          <td>{student.filiere}</td>
          <td>
            <button onClick={() => modifierEtudiant(student)}>
              Modifier
            </button>

            <button onClick={() => supprimerEtudiant(student.id)}>
              Supprimer
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

</div>
)
}

export default Dashboard

