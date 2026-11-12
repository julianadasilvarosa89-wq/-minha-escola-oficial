export default function Sidebar({ setPagina }) {
  return (
    <aside style={{ width: '200px', background: '#f1f1f1', padding: '20px', height: '100vh' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => setPagina('dashboard')}>📊 Dashboard</li>
        <li style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => setPagina('pacientes')}>🧍 Pacientes</li>
        <li style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => setPagina('fisioterapeutas')}>👨‍⚕️ Fisioterapeutas</li>
        <li style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => setPagina('login')}>🔒 Login</li>
      </ul>
    </aside>
  )
}