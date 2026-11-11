export default function LinhaAluno({ aluno }) {
  return (
    <tr>
      <td>{aluno.nome}</td>
      <td>{aluno.email}</td>
      <td>{aluno.turma}</td>
    </tr>
  )
}