export default function Input({ label, placeholder, type="text" }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px' }}>{label}</label>
      <input type={type} placeholder={placeholder} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
    </div>
  )
}