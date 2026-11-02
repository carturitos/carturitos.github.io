import { Link } from 'react-router-dom'
import { usePresentation } from '../presentation/usePresentation'
export function DemoNotice() {
  const { homeHref } = usePresentation()
  return (
    <div className="demo-notice" role="note">
      <p>
        <strong>Proyecto demostrativo.</strong> Negocio y contenido ficticios
        creados para mostrar interfaces e interacciones.
      </p>
      <Link to={`${homeHref}#projects`}>Volver a los proyectos</Link>
    </div>
  )
}
