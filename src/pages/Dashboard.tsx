export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Panel de control</h1>
          <p className="owner-badge">👑 Propietario — Acceso total ilimitado</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card highlight">
            <div className="label">Estado</div>
            <div className="value">✅ Premium</div>
          </div>
          <div className="stat-card highlight">
            <div className="label">Créditos</div>
            <div className="value">♾️ Ilimitados</div>
          </div>
          <div className="stat-card highlight">
            <div className="label">Canales</div>
            <div className="value">🎬 Ilimitados</div>
          </div>
          <div className="stat-card highlight">
            <div className="label">Soporte</div>
            <div className="value">⭐ Prioritario</div>
          </div>
        </div>

        <div className="grid-2">
          <div className="card">
            <h3 style={{ marginBottom: 16 }}>📅 Programación semanal</h3>
            <p style={{ color: '#888', fontSize: 14 }}>
              Configura los días y horarios de publicación automática.
            </p>
            <div className="form-group" style={{ marginTop: 16 }}>
              <label>Días de publicación</label>
              <select>
                <option>Lunes, Miércoles, Viernes</option>
                <option>Todos los días</option>
                <option>Lunes a Viernes</option>
              </select>
            </div>
            <button className="btn btn-primary" style={{ marginTop: 8 }}>Guardar horario</button>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: 16 }}>🎯 Próximos vídeos</h3>
            <div style={{ color: '#888', fontSize: 14 }}>
              <div style={{ padding: '12px 0', borderBottom: '1px solid #222' }}>
                <strong style={{ color: '#fff' }}>5 datos sobre meditación</strong>
                <span style={{ float: 'right' }}>→ Mañana</span>
              </div>
              <div style={{ padding: '12px 0', borderBottom: '1px solid #222' }}>
                <strong style={{ color: '#fff' }}>Cómo mejorar tu enfoque</strong>
                <span style={{ float: 'right' }}>→ En 3 días</span>
              </div>
              <div style={{ padding: '12px 0' }}>
                <strong style={{ color: '#fff' }}>Música para concentrarse</strong>
                <span style={{ float: 'right' }}>→ En 5 días</span>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Tools */}
        <div className="card" style={{ marginTop: 32 }}>
          <h3 style={{ marginBottom: 16 }}>⚙️ Herramientas de administrador</h3>
          <div className="grid-3">
            <div className="admin-tool">
              <h4>📊 Estadísticas</h4>
              <p>Visualiza el rendimiento de todos los canales</p>
            </div>
            <div className="admin-tool">
              <h4>🤖 Generar contenido</h4>
              <p>Crea nuevos vídeos evergreen con IA</p>
            </div>
            <div className="admin-tool">
              <h4>📤 Subir a YouTube</h4>
              <p>Publica directamente en tus canales</p>
            </div>
          </div>
        </div>
      </div>

      {/* Amazon Affiliate */}
      <div className="container" style={{ marginTop: 40, marginBottom: 20 }}>
        <a href="https://www.amazon.es/s?k=equipo+streaming+youtuber&tag=r3dm01-21" 
           target="_blank" rel="nofollow sponsored"
           style={{ display: 'block', padding: 20, background: '#13131a', borderRadius: 12, border: '1px solid #ff9900', textAlign: 'center', color: '#ff9900', fontWeight: 700, fontSize: 14 }}>
          🛒 Equipo para creadores recomendado por TubeVault → Amazon
        </a>
      </div>
    </div>
  )
}
