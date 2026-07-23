import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Tu canal de YouTube<br/>que trabaja <span>por ti</span></h1>
          <p>
            Contenido evergreen automatizado que genera visitas y dinero 
            mientras tú te dedicas a lo que importa.
          </p>
          <Link to="/checkout" className="btn btn-primary btn-lg">
            Empezar ahora
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <h2>Cómo funciona</h2>
          <div className="grid-3">
            <div className="card feature-card">
              <h3>🎬 Conecta tu canal</h3>
              <p>Vincula tu YouTube en un clic. Nosotros analizamos tu nicho y audiencia.</p>
            </div>
            <div className="card feature-card">
              <h3>🤖 IA genera contenido</h3>
              <p>Vídeos evergreen con guión, voz, música y edición automatizada al 100%.</p>
            </div>
            <div className="card feature-card">
              <h3>📈 Sube y monetiza</h3>
              <p>Publicación automática en tu canal. Ganas con AdSense mientras duermes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <div className="container">
          <h2>Planes</h2>
          <div className="grid-3">
            <div className="price-card">
              <h3>Starter</h3>
              <div className="price">9<span>/mes</span></div>
              <p className="desc">Para empezar a generar contenido evergreen</p>
              <ul>
                <li>5 vídeos/mes</li>
                <li>Guiones con IA</li>
                <li>Voz sintética</li>
                <li>Subida automática</li>
              </ul>
              <Link to="/checkout?plan=starter" className="btn btn-secondary" style={{width:'100%'}}>Elegir</Link>
            </div>
            <div className="price-card featured">
              <div className="popular">Popular</div>
              <h3>Pro</h3>
              <div className="price">29<span>/mes</span></div>
              <p className="desc">Para creadores en serio</p>
              <ul>
                <li>20 vídeos/mes</li>
                <li>Guiones + thumbnail IA</li>
                <li>Voz premium + música</li>
                <li>Programación semanal</li>
                <li>Estadísticas detalladas</li>
              </ul>
              <Link to="/checkout?plan=pro" className="btn btn-primary" style={{width:'100%'}}>Elegir</Link>
            </div>
            <div className="price-card">
              <h3>Studio</h3>
              <div className="price">79<span>/mes</span></div>
              <p className="desc">Para agencias y múltiples canales</p>
              <ul>
                <li>100 vídeos/mes</li>
                <li>Todo lo de Pro</li>
                <li>Hasta 5 canales</li>
                <li>Soporte prioritario</li>
                <li>API personalizada</li>
              </ul>
              <Link to="/checkout?plan=studio" className="btn btn-secondary" style={{width:'100%'}}>Elegir</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}