import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  useEffect(() => {
    // Eres el propietario — acceso directo
    localStorage.setItem("tubevault_user", JSON.stringify({
      id: "owner-joan",
      email: "joanlazaro83@gmail.com",
      name: "Joan r3dm",
      role: "admin"
    }))
    navigate('/dashboard', { replace: true })
  }, [navigate])

  return null
}
