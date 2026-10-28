import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Barberia } from './pages/demos/Barberia'
import { Dental } from './pages/demos/Dental'
import { Pasteleria } from './pages/demos/Pasteleria'
import { NotFound } from './pages/NotFound'

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos/barberia" element={<Barberia />} />
        <Route path="/demos/dental" element={<Dental />} />
        <Route path="/demos/pasteleria" element={<Pasteleria />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
