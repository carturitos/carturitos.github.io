import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'

export function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <span className="kicker">Error 404</span>
        <h1>Esta página no existe.</h1>
        <p>Puede que el enlace esté mal escrito o que el contenido se haya movido.</p>
        <Link className="btn btn-primary" to="/">
          Volver al portafolio
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  )
}
