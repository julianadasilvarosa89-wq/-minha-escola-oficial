export default function Botao({ texto, onClick }) {
  return (
    <button onClick={onClick} style={{ background: '#2e7d32', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      {texto}
    </button>
  )
}