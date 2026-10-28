import { Link } from 'react-router-dom'

/**
 * Aviso obligatorio en las demos: deja claro que el negocio y su contenido
 * son ficticios y que el sitio es una pieza de portafolio.
 */
export function DemoNotice() {
  return (
    <div className="demo-notice" role="note">
      <p>
        <strong>Proyecto demostrativo.</strong> Negocio y contenido ficticios creados para mostrar
        capacidades de diseño y desarrollo web.
      </p>
      <Link to="/">Volver al portafolio</Link>
    </div>
  )
}
