import Botao from '../components/Botao'
import Input from '../components/Input'

export default function Pacientes() {
  return (
    <div>
      <h2>Pacientes</h2>
      <Input label="Buscar Paciente" placeholder="Nome do paciente" />
      <Botao texto="Cadastrar Paciente" onClick={() => alert('Paciente cadastrado!')} />
      <ul style={{ marginTop: '20px' }}>
        <li>João Silva - Fisioterapia Ortopédica</li>
        <li>Maria Souza - RPG</li>
      </ul>
    </div>
  )
}