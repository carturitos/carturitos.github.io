import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { usePresentation } from '../presentation/usePresentation'
import { copy } from '../presentation/copy'
export function NotFound() {
  const route = usePresentation()
  const t = copy[route.locale]
  usePageMeta({
    title: t.notFound,
    description: t.notFoundText,
    path: '/404',
    noindex: true,
  })
  return (
    <main className="not-found" id="contenido">
      <div className="container">
        <span className="kicker">404</span>
        <h1>{t.notFound}</h1>
        <p>{t.notFoundText}</p>
        <Link className="btn btn-primary" to={route.homeHref}>
          {t.returnHome} ↗
        </Link>
      </div>
    </main>
  )
}
