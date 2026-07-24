import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const OWNER = {
  id: "owner-joan",
  email: "joanlazaro83@gmail.com",
  name: "Joan r3dm",
  role: "admin"
}

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("tubevault_user")
    if (!saved) {
      localStorage.setItem("tubevault_user", JSON.stringify(OWNER))
    }
    setLoggedIn(true)
  }, [])

  return (
    <nav>
      <div className="container">
        <Link to="/" className="logo">Tube<span>Vault</span></Link>
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/#pricing">Planes</Link>
          {loggedIn ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : (
            <>
              <Link to="/login">Acceder</Link>
              <Link to="/checkout" className="btn btn-primary">Empezar</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
