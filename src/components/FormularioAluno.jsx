import { useState } from 'react'

function FormularioAluno({ onSalvar }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [turma, setTurma] = useState('')

  function handleSalvar() {
    if (!nome || !email || !turma) {
      alert('Preencha tudo!')
      return
    }
    onSalvar({ nome, email, turma })
    setNome('')
    setEmail('')
    setTurma('')
  }

  return (
    <div>
      <h3>Cadastro de aluno</h3>
      Nome <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite o nome" />
      {' '}E-mail <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite o e-mail" />
      <div style={{marginTop: '10px'}}>
        Turma <input value={turma} onChange={e => setTurma(e.target.value)} placeholder="Digite a turma" />
        {' '}<button onClick={handleSalvar}>Salvar aluno</button>
      </div>
    </div>
  )
}
export default FormularioAluno