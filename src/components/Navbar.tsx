import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem("tubevault_user")
    setLoggedIn(!!user)
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
