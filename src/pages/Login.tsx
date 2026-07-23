import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: real auth later
    toast.success('Acceso concedido')
    navigate('/dashboard')
    setLoading(false)
  }

  return (
    <div className="auth-page">
      <h1>Accede a TubeVault</h1>
      <p>Tu panel de control de contenido evergreen</p>
      <div className="auth-card">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com" required />
          </div>
          <button className="btn btn-primary" style={{width:'100%'}} disabled={loading}>
            {loading ? 'Entrando...' : 'Acceder'}
          </button>
        </form>
      </div>
    </div>
  )
}