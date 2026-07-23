import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="logo">Tube<span>Vault</span></Link>
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/#pricing">Planes</Link>
          <Link to="/login">Acceder</Link>
          <Link to="/checkout" className="btn btn-primary">Empezar</Link>
        </div>
      </div>
    </nav>
  )
}