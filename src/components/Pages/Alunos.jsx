import PaginaLayout from '../components/PaginaLayout'
import FormularioAluno from '../components/FormularioAluno'
import TabelaAlunos from '../components/TabelaAlunos'

function Alunos() {
  return (
    <PaginaLayout>
      <FormularioAluno />
      <TabelaAlunos />
    </PaginaLayout>
  )
}
export default Alunos