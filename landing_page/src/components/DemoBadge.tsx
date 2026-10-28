import { Link } from 'react-router-dom'

export function DemoBadge() {
  return (
    <Link className="demo-badge" to="/" aria-label="Volver al portafolio de Samuel Gutiérrez">
      <span className="demo-badge-dot" aria-hidden="true" />
      <span className="demo-badge-label">Demo de Samuel Gutiérrez</span>
      <span className="demo-badge-sep" aria-hidden="true" />
      <span className="demo-badge-link">Volver al portafolio</span>
    </Link>
  )
}
