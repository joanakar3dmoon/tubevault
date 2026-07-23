export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Panel de control</h1>
          <p>Tus estadísticas de contenido evergreen</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="label">Vídeos publicados</div>
            <div className="value">12</div>
          </div>
          <div className="stat-card">
            <div className="label">Visualizaciones totales</div>
            <div className="value green">4.2K</div>
          </div>
          <div className="stat-card">
            <div className="label">Ingresos estimados</div>
            <div className="value green">$28.50</div>
          </div>
          <div className="stat-card">
            <div className="label">Próxima subida</div>
            <div className="value">En 2 días</div>
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
      </div>
    </div>
  )
}