export default function Card({ titulo, valor }) {
  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px #ddd' }}>
      <h3>{titulo}</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{valor}</p>
    </div>
  )
}