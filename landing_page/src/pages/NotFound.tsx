import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFound() {
  usePageMeta({
    title: 'Página no encontrada | Samuel Gutiérrez',
    description: 'La página que buscas no existe o cambió de dirección.',
    path: '/404',
    noindex: true,
  })

  return (
    <main className="not-found" id="contenido">
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
