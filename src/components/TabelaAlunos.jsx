function TabelaAlunos({ alunos }) {
  return (
    <table style={{width: '100%', marginTop: '10px', borderCollapse: 'collapse'}}>
      <thead>
        <tr style={{background: '#2c3e50', color: 'white'}}>
          <th style={{padding: '10px'}}>Nome</th>
          <th>E-mail</th>
          <th>Turma</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno, index) => (
          <tr key={index} style={{borderBottom: '1px solid #ccc'}}>
            <td style={{padding: '8px'}}>{aluno.nome}</td>
            <td>{aluno.email}</td>
            <td>{aluno.turma}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default TabelaAlunos