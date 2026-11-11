import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import PaginaLayout from './components/PaginaLayout.jsx'
import FormularioAluno from './components/FormularioAluno.jsx'
import TabelaAlunos from './components/TabelaAlunos.jsx'

function Dashboard() {
  return <h1>Bem-vindo ao Dashboard!</h1>
}
function Professores() {
  return <h1>Lista de Professores</h1>
}

function App() {
  const [alunos, setAlunos] = useState([])

  function adicionarAluno(novoAluno) {
    setAlunos([...alunos, novoAluno])
  }

  return (
    <PaginaLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alunos" element={
          <>
            <h1>Minha Escola - Alunos</h1>
            <FormularioAluno onSalvar={adicionarAluno} />
            <TabelaAlunos alunos={alunos} />
          </>
        } />
        <Route path="/professores" element={<Professores />} />
      </Routes>
    </PaginaLayout>
  )
}
export default App