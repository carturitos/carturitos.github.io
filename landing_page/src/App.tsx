import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

/**
 * Las demos se cargan por ruta: así cada visita descarga solo el CSS y el JS de
 * la demo que abre, y la portada no paga el peso de las tres.
 */
const Barberia = lazy(() => import('./pages/demos/Barberia').then((m) => ({ default: m.Barberia })))
const Dental = lazy(() => import('./pages/demos/Dental').then((m) => ({ default: m.Dental })))
const MigaMiel = lazy(() => import('./pages/demos/miga/MigaMiel').then((m) => ({ default: m.MigaMiel })))

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <ScrollToTop />
      <Suspense fallback={<div className="route-loading" role="status" aria-live="polite" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demos/barberia" element={<Barberia />} />
          <Route path="/demos/dental" element={<Dental />} />
          <Route path="/demos/pasteleria" element={<MigaMiel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
