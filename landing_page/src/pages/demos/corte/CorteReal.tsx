import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { usePresentation } from '../../../presentation/usePresentation'
import { BookingDemo } from './BookingDemo'
import { formatPrice, professionals, services } from './model'
import './corte-real.css'

const faqs = [
  [
    '¿Esta página permite reservar de verdad?',
    'No. Corte Real es una barbería ficticia. La selección de servicio, profesional y horario se mantiene solo en memoria y no se envía ni se guarda como reserva.',
  ],
  [
    '¿Qué diferencia hay entre una solicitud y una confirmación?',
    'Una solicitud expresa una preferencia. Una confirmación requiere comprobar disponibilidad y registrar el cupo. Este ejemplo no realiza ninguna de esas operaciones en un servidor.',
  ],
  [
    '¿Los profesionales y sus especialidades son reales?',
    'No. Nico y Alex son perfiles conceptuales para demostrar la elección. Las fotografías son imágenes ilustrativas de oficio y no retratos de esas personas.',
  ],
  [
    '¿Se envía la selección por WhatsApp?',
    'No. El recorrido termina en un resumen de ejemplo. El contacto sobre el desarrollo de esta web está en otro bloque y no contiene tu selección de servicio u horario.',
  ],
]

export function CorteReal() {
  const { homeHref, samples, platformHref, contactTarget, locale } =
    usePresentation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobile, setMobile] = useState(
    () => matchMedia('(max-width: 760px)').matches,
  )
  const menuButton = useRef<HTMLButtonElement>(null)
  usePageMeta({
    title: 'Corte Real · Barbería conceptual y recorrido de selección',
    description:
      'Demo de interfaz de barbería: servicios, profesionales y horarios ilustrativos. Recorrido de selección sin envío ni reservas reales.',
    path: '/demos/barberia',
  })
  useEffect(() => {
    const media = matchMedia('(max-width: 760px)')
    const sync = () => {
      setMobile(media.matches)
      if (!media.matches) setMenuOpen(false)
    }
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return (
    <div className="corte">
      <header className="corte-header">
        <div className="corte-wrap corte-header-inner">
          <a
            className="corte-wordmark"
            href="#corte-inicio"
            aria-label="Corte Real"
          >
            CORTE
            <br />
            REAL
            <span aria-hidden="true" />
          </a>
          <button
            ref={menuButton}
            className="corte-menu"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="corte-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Cerrar' : 'Menú'}{' '}
            <span aria-hidden="true">{menuOpen ? '−' : '+'}</span>
          </button>
          <nav
            id="corte-nav"
            aria-label="Navegación de Corte Real"
            hidden={mobile && !menuOpen}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setMenuOpen(false)
                menuButton.current?.focus()
              }
            }}
          >
            {[
              ['#corte-seleccion', 'El recorrido'],
              ['#corte-servicios', 'Servicios'],
              ['#corte-profesionales', 'Profesionales'],
              ['#corte-oficio', 'Oficio'],
              ['#corte-preguntas', 'Preguntas'],
            ].map(([href, label]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a className="corte-header-cta" href="#corte-seleccion">
            Explorar horarios <span aria-hidden="true">↘</span>
          </a>
        </div>
      </header>
      <main id="contenido">
        <section
          className="corte-hero corte-wrap"
          id="corte-inicio"
          aria-labelledby="corte-title"
        >
          <div className="corte-hero-copy">
            <p className="corte-eyebrow">Barbería conceptual / Oficio urbano</p>
            <h1 id="corte-title">
              Tu corte.
              <br />
              Tu barbero.
              <br />
              <span>Tu hora.</span>
            </h1>
            <p>
              Elegir cómo te vas a ver no debería empezar con diez mensajes.
              Servicio, profesional y horario: un recorrido claro para explorar
              la próxima visita.
            </p>
            <div className="corte-hero-actions">
              <a className="corte-button" href="#corte-seleccion">
                Explorar el recorrido <span aria-hidden="true">↘</span>
              </a>
              <a className="corte-text-link" href="#corte-servicios">
                Ver servicios de ejemplo
              </a>
            </div>
            <p className="corte-micro">
              Esto es una demo. No se reciben solicitudes ni se confirman horas.
            </p>
          </div>
          <figure className="corte-hero-photo">
            <img
              src="/photos/corte-real/hero.jpg"
              srcSet="/photos/corte-real/hero-sm.jpg 700w, /photos/corte-real/hero.jpg 1400w"
              sizes="(max-width: 760px) calc(100vw - 42px), 48vw"
              alt="Un barbero trabajando con un cliente frente al espejo"
              width="1400"
              height="2100"
              fetchPriority="high"
            />
            <figcaption>
              <span>El oficio, de cerca.</span>
              <small>Fotografía ilustrativa · cottonbro studio / Pexels</small>
            </figcaption>
          </figure>
        </section>
        <div className="corte-strip" aria-label="Recorrido">
          <div className="corte-wrap">
            <span>01 · Elige el servicio</span>
            <span>02 · Conoce el perfil</span>
            <span>03 · Revisa el horario</span>
            <strong>Una selección. Ningún mensaje enviado.</strong>
          </div>
        </div>
        <BookingDemo />
        <section
          className="corte-section corte-services"
          id="corte-servicios"
          aria-labelledby="corte-services-title"
        >
          <div className="corte-wrap">
            <div className="corte-section-head">
              <div>
                <p className="corte-eyebrow">02 / Servicios</p>
                <h2 id="corte-services-title">
                  Lo que eliges.
                  <br />
                  Lo que dura.
                </h2>
              </div>
              <p>
                La duración y el valor se muestran juntos para comparar sin
                abrir otra conversación. Estos son datos ilustrativos de la
                barbería conceptual.
              </p>
            </div>
            <div className="corte-service-grid">
              {services.map((item, index) => (
                <article key={item.id}>
                  <span className="corte-index">0{index + 1}</span>
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                  <div>
                    <span>{item.duration} min</span>
                    <strong>{formatPrice(item.price)}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="corte-section"
          id="corte-profesionales"
          aria-labelledby="corte-people-title"
        >
          <div className="corte-wrap">
            <div className="corte-section-head">
              <div>
                <p className="corte-eyebrow">03 / Profesionales</p>
                <h2 id="corte-people-title">
                  Cada mano,
                  <br />
                  su manera.
                </h2>
              </div>
              <p>
                Perfiles ficticios para explorar estilos de trabajo. No son
                personas de las fotografías ni integrantes de un local real.
              </p>
            </div>
            <div className="corte-people-grid">
              {professionals.map((item) => (
                <article key={item.id}>
                  <span className="corte-profile-initial" aria-hidden="true">
                    {item.initials}
                  </span>
                  <div>
                    <span className="corte-eyebrow">Perfil conceptual</span>
                    <h3>{item.name}</h3>
                    <strong>{item.specialty}</strong>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="corte-section corte-craft"
          id="corte-oficio"
          aria-labelledby="corte-craft-title"
        >
          <div className="corte-wrap">
            <div className="corte-section-head">
              <div>
                <p className="corte-eyebrow">04 / Oficio y detalle</p>
                <h2 id="corte-craft-title">
                  Precisión.
                  <br />
                  Sin vueltas.
                </h2>
              </div>
              <p>
                Una selección fotográfica sobre herramientas y trabajo manual.
                No se presenta como un catálogo de cortes realizados por Corte
                Real.
              </p>
            </div>
            <div className="corte-craft-grid">
              <figure>
                <img
                  src="/photos/corte-real/detalle.jpg"
                  srcSet="/photos/corte-real/detalle-sm.jpg 480w, /photos/corte-real/detalle.jpg 900w"
                  sizes="(max-width: 760px) calc(100vw - 42px), 42vw"
                  width="900"
                  height="1350"
                  alt="Una mano sujetando tijeras en un salón"
                  loading="lazy"
                />
                <figcaption>
                  Herramientas en uso <span>cottonbro studio / Pexels</span>
                </figcaption>
              </figure>
              <div>
                <figure>
                  <img
                    src="/photos/corte-real/herramientas.jpg"
                    width="1000"
                    height="667"
                    alt="Máquinas, tijeras, navaja y peines ordenados sobre una toalla"
                    loading="lazy"
                  />
                  <figcaption>
                    El detalle también cuenta{' '}
                    <span>RDNE Stock project / Pexels</span>
                  </figcaption>
                </figure>
                <p className="corte-craft-statement">
                  Una identidad de oficio.
                  <br />
                  Un recorrido pensado
                  <br />
                  para decidir.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="corte-section"
          id="corte-preguntas"
          aria-labelledby="corte-faq-title"
        >
          <div className="corte-wrap corte-faq-grid">
            <div>
              <p className="corte-eyebrow">05 / Antes de seguir</p>
              <h2 id="corte-faq-title">
                Claro desde
                <br />
                el principio.
              </h2>
            </div>
            <div>
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          className="corte-developer"
          aria-labelledby="corte-developer-title"
        >
          <div className="corte-wrap corte-developer-grid">
            <div>
              <p className="corte-eyebrow">
                06 / Sobre el desarrollo de esta web
              </p>
              <h2 id="corte-developer-title">
                ¿Buscas una web
                <br />
                para tu proyecto?
              </h2>
              <p>
                Esta consulta es para Samuel, el desarrollador. No es para pedir
                un corte ni enviar la selección de la demo.
              </p>
            </div>
            <div>
              {samples ? (
                platformHref ? (
                  <a
                    className="corte-button"
                    href={platformHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {locale === 'en'
                      ? 'Continue on Fiverr'
                      : 'Continuar en Fiverr'}{' '}
                    ↗
                  </a>
                ) : (
                  <p className="corte-platform-unavailable">
                    {locale === 'en'
                      ? 'Fiverr link not available yet'
                      : 'Enlace a Fiverr aún no disponible'}
                  </p>
                )
              ) : (
                <a
                  className="corte-button"
                  href={contactTarget(
                    'Hola Samuel, vi la demo de Corte Real y me gustaría consultar sobre el desarrollo de una web para mi proyecto.',
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar sobre una web ↗
                </a>
              )}
              <p className="corte-micro">
                {samples
                  ? 'El recorrido de muestras no incluye contacto externo.'
                  : 'Abre un mensaje dirigido al desarrollador, no a una barbería.'}
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="corte-footer">
        <div className="corte-wrap">
          <a
            className="corte-wordmark"
            href="#corte-inicio"
            aria-label="Corte Real, volver al inicio"
          >
            CORTE
            <br />
            REAL
            <span aria-hidden="true" />
          </a>
          <p>
            Corte Real es un proyecto conceptual de Samuel Gutiérrez.
            <br />
            Sin local, clientes, solicitudes ni reservas reales.
          </p>
          <Link to={`${homeHref}#projects`}>Volver a los proyectos ↗</Link>
        </div>
      </footer>
    </div>
  )
}
