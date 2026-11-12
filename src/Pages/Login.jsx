import Input from '../components/Input'
import Botao from '../components/Botao'

export default function Login({ setPagina }) {
  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', background: 'white', padding: '20px', borderRadius: '10px' }}>
      <h2>Login</h2>
      <Input label="Email" placeholder="seu@email.com" />
      <Input label="Senha" placeholder="****" type="password" />
      <Botao texto="Entrar" onClick={() => setPagina('dashboard')} />
    </div>
  )
}