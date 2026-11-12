import { useState, useEffect } from 'react'
import { supabase } from './supabase.js'

function App() {
  const [nome, setNome] = useState('')
  const [turma, setTurma] = useState('')
  const [nota, setNota] = useState('')
  const [alunos, setAlunos] = useState([])

  async function carregarAlunos() {
    const { data } = await supabase.from('alunos').select('*').order('created_at', { ascending: false })
    if (data) setAlunos(data)
  }

  useEffect(() => { carregarAlunos() }, [])

  async function cadastrar(e) {
    e.preventDefault()
    if (!nome) return alert('Digite o nome!')
    const { error } = await supabase.from('alunos').insert([{ nome, turma, nota: Number(nota) }])
    if (error) alert(error.message)
    else {
      setNome(''); setTurma(''); setNota('')
      carregarAlunos()
    }
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', maxWidth: '600px', margin: 'auto' }}>
      <h1>🏫 Minha Escola - minha-escola</h1>
      <p style={{color: 'green'}}>Supabase: Conectado em dttkhybhlozxodpgewrm.supabase.co ✅</p>
      
      <form onSubmit={cadastrar} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>Cadastrar Aluno</h3>
        <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
        <input placeholder="Turma (ex: 3A)" value={turma} onChange={e => setTurma(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
        <input placeholder="Nota" type="number" value={nota} onChange={e => setNota(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
        <button type="submit" style={{ width: '100%', padding: '10px', background: 'green', color: 'white', border: 'none', borderRadius: '4px' }}>Salvar no Supabase</button>
      </form>

      <h3>Alunos cadastrados ({alunos.length})</h3>
      <ul>
        {alunos.map(a => (
          <li key={a.id} style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
            <b>{a.nome}</b> - Turma: {a.turma} - Nota: {a.nota}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App