import { Suspense, lazy, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { PresentationHome } from './presentation/PresentationHome'
import { DemoShell } from './presentation/DemoShell'
import { preferredLocale, routeDetails } from './presentation/routing'
import { copy } from './presentation/copy'
const Barberia = lazy(() =>
  import('./pages/demos/Barberia').then((m) => ({ default: m.Barberia })),
)
const Dental = lazy(() =>
  import('./pages/demos/Dental').then((m) => ({ default: m.Dental })),
)
const MigaMiel = lazy(() =>
  import('./pages/demos/miga/MigaMiel').then((m) => ({ default: m.MigaMiel })),
)
function EntryRedirect() {
  const { hash, search } = useLocation()
  let saved: string | null = null
  try {
    saved = localStorage.getItem('presentation-language')
  } catch {
    /* Storage is optional. */
  }
  return (
    <Navigate
      to={`/${preferredLocale(saved, navigator.languages)}${search}${hash}`}
      replace
    />
  )
}
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      let id = hash.slice(1)
      try {
        id = decodeURIComponent(id)
      } catch {
        /* Use the literal ID. */
      }
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'instant' as ScrollBehavior })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}
const demos = [
  { slug: 'barberia', element: <Barberia /> },
  { slug: 'dental', element: <Dental /> },
  { slug: 'pasteleria', element: <MigaMiel /> },
]
const bases = ['/es', '/en', '/muestras/es', '/muestras/en']
export default function App() {
  const { pathname } = useLocation()
  const { locale } = routeDetails(pathname)
  return (
    <>
      <a className="skip-link" href="#contenido">
        {copy[locale].skip}
      </a>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="route-loading" role="status" aria-live="polite">
            {locale === 'en' ? 'Loading demo…' : 'Cargando demo…'}
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<EntryRedirect />} />
          {bases.flatMap((base) => [
            <Route key={base} path={base} element={<PresentationHome />} />,
            ...demos.map((demo) => (
              <Route
                key={`${base}/${demo.slug}`}
                path={`${base}/demos/${demo.slug}`}
                element={<DemoShell>{demo.element}</DemoShell>}
              />
            )),
          ])}
          {demos.map((demo) => (
            <Route
              key={demo.slug}
              path={`/demos/${demo.slug}`}
              element={<DemoShell>{demo.element}</DemoShell>}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
