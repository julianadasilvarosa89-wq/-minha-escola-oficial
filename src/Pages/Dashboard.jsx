import Card from '../components/Card'

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        <Card titulo="Pacientes" valor="32" />
        <Card titulo="Fisioterapeutas" valor="5" />
        <Card titulo="Consultas Hoje" valor="12" />
      </div>
    </div>
  )
}