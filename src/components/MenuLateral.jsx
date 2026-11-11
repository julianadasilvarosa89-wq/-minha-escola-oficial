import { useNavigate } from 'react-router-dom'

function MenuLateral() {
  const navigate = useNavigate()

  function PaginaDashboard() {
    navigate('/')
  }

  function PaginaAluno() {
    navigate('/alunos')
  }

  function PaginaProfessores() {
    navigate('/professores')
  }

  function Sair() {
    navigate('/')
  }

  return (
    <div style={{padding: '20px'}}>
      <h3>Menu</h3>
      <ul style={{listStyle: 'none', padding: 0}}>
        <li 
          onClick={PaginaDashboard} 
          style={{cursor: 'pointer', marginBottom: '10px', color: 'blue', textDecoration: 'underline'}}
        >
          Dashboard
        </li>
        <li 
          onClick={PaginaAluno} 
          style={{cursor: 'pointer', marginBottom: '10px', color: 'blue', textDecoration: 'underline'}}
        >
          Alunos
        </li>
        <li 
          onClick={PaginaProfessores} 
          style={{cursor: 'pointer', marginBottom: '10px', color: 'blue', textDecoration: 'underline'}}
        >
          Professores
        </li>
      </ul>

      <button 
        onClick={Sair}
        style={{background: 'red', color: 'white', padding: '10px', marginTop: '20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}
      >
        Sair
      </button>
    </div>
  )
}

export default MenuLateral