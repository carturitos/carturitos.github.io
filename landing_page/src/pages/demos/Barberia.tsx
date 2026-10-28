import { DemoNotice } from '../../components/DemoNotice'
import { contactHref } from '../../config/site'
import { usePageMeta } from '../../hooks/usePageMeta'
import './barberia.css'

const services = [
  {
    name: 'Corte clásico',
    price: '$12.000',
    time: '45 min',
    text: 'Tijera y máquina, lavado, peinado y terminación con cera mate.',
  },
  {
    name: 'Barba y afeitado',
    price: '$9.000',
    time: '30 min',
    text: 'Perfilado con navaja, toalla caliente y bálsamo para después del afeitado.',
  },
  {
    name: 'Combo corte + barba',
    price: '$18.000',
    time: '1 h 15',
    text: 'El paquete completo de la casa, con bebida de cortesía incluida.',
  },
]

const gallery = [
  { label: 'Fade clásico', tone: 'g1' },
  { label: 'Barba perfilada', tone: 'g2' },
  { label: 'Ritual de navaja', tone: 'g3' },
  { label: 'El local', tone: 'g4' },
]

const testimonials = [
  {
    quote:
      'Llevo tres años viniendo y nunca salgo con un corte que no pedí. Eso, para mí, lo es todo.',
    author: 'Cliente de ejemplo',
    detail: 'Testimonio de ejemplo',
  },
  {
    quote:
      'Reservar por WhatsApp me salvó la semana: entro a mi hora y salgo en cuarenta minutos.',
    author: 'Cliente de ejemplo',
    detail: 'Testimonio de ejemplo',
  },
]

export function Barberia() {
  usePageMeta({
    title: 'Corte Real — Demo de barbería | Samuel Gutiérrez',
    description:
      'Proyecto demostrativo de sitio para barbería: servicios, precios y reserva. Negocio y contenido ficticios.',
    path: '/demos/barberia',
  })

  return (
    <div className="cr">
      <header className="cr-nav">
        <DemoNotice />
        <div className="cr-wrap cr-nav-inner">
          <a className="cr-logo" href="#inicio">
            CORTE<span>REAL</span>
          </a>
          <nav className="cr-links" aria-label="Navegación">
            <a href="#servicios">Servicios</a>
            <a href="#galeria">Galería</a>
            <a href="#resena">Reseñas</a>
            <a href="#reservar">Contacto</a>
          </nav>
          <a className="cr-btn cr-btn-gold" href="#reservar">
            Reservar hora
          </a>
        </div>
      </header>

      <main id="contenido">
        <section className="cr-hero" id="inicio">
          <div className="cr-wrap cr-hero-grid">
            <div className="cr-hero-copy">
              <span className="cr-eyebrow">Barbería · Providencia, Santiago</span>
              <h1>
                Corte clásico,
                <br />
                actitud <em>moderna.</em>
              </h1>
              <p>
                Barbería de barrio con estándar de autor. Reserva en línea, llega a tu hora y sal
                con el corte exacto que pediste.
              </p>
              <div className="cr-hero-actions">
                <a className="cr-btn cr-btn-gold" href="#reservar">
                  Reservar hora
                </a>
                <a className="cr-btn cr-btn-line" href="#servicios">
                  Ver precios
                </a>
              </div>
              <ul className="cr-stats">
                <li>
                  <strong>6</strong>
                  <span>servicios en carta</span>
                </li>
                <li>
                  <strong>3</strong>
                  <span>barberos</span>
                </li>
                <li>
                  <strong>Lun–Sáb</strong>
                  <span>horario</span>
                </li>
              </ul>
            </div>

            <div className="cr-hero-visual" aria-hidden="true">
              <div className="cr-photo">
                <span className="cr-photo-mark">CR</span>
                <span className="cr-photo-caption">Av. Providencia 1234</span>
              </div>
              <div className="cr-pole" />
              <div className="cr-mini-card">
                <span>Próxima hora</span>
                <strong>Hoy · 17:30</strong>
                <small>Dato de ejemplo</small>
              </div>
            </div>
          </div>
        </section>

        <section className="cr-section" id="servicios">
          <div className="cr-wrap">
            <header className="cr-section-head">
              <span className="cr-eyebrow">Servicios</span>
              <h2>Lo que hacemos, con precio a la vista.</h2>
            </header>
            <div className="cr-services">
              {services.map((service) => (
                <article className="cr-service" key={service.name}>
                  <div className="cr-service-top">
                    <h3>{service.name}</h3>
                    <span>{service.time}</span>
                  </div>
                  <p>{service.text}</p>
                  <div className="cr-service-price">{service.price}</div>
                </article>
              ))}
            </div>
            <p className="cr-note">Precios de ejemplo; no corresponden a una oferta comercial.</p>
          </div>
        </section>

        <section className="cr-section cr-section-dark" id="galeria">
          <div className="cr-wrap">
            <header className="cr-section-head">
              <span className="cr-eyebrow">Galería</span>
              <h2>El trabajo habla mejor que nosotros.</h2>
            </header>
            <div className="cr-gallery">
              {gallery.map((item) => (
                <figure className={`cr-tile ${item.tone}`} key={item.label}>
                  <figcaption>{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="cr-section" id="resena">
          <div className="cr-wrap">
            <header className="cr-section-head">
              <span className="cr-eyebrow">Contenido de ejemplo</span>
              <h2>Testimonios de ejemplo.</h2>
            </header>
            <div className="cr-quotes">
              {testimonials.map((item) => (
                <blockquote className="cr-quote" key={item.quote}>
                  <span className="demo-example">Ejemplo</span>
                  <p>“{item.quote}”</p>
                  <footer>
                    <strong>{item.author}</strong>
                    <span>{item.detail}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="cr-section cr-reserve" id="reservar">
          <div className="cr-wrap cr-reserve-grid">
            <div>
              <span className="cr-eyebrow">Reserva tu hora</span>
              <h2>Te esperamos en Providencia.</h2>
              <p>
                Escríbenos por WhatsApp con el día y la hora que prefieres. Confirmamos en minutos
                y te guardamos el cupo.
              </p>
              <a
                className="cr-btn cr-btn-gold cr-btn-lg"
                href={contactHref(
                  'Hola Samuel, vi la demo de Corte Real y quiero una web similar para mi negocio.',
                )}
                target="_blank"
                rel="noreferrer"
              >
                Quiero una web así
              </a>
              <p className="cr-note">
                Este sitio es una demostración: no reserva horas reales.
              </p>
            </div>
            <div className="cr-info">
              <div>
                <span>Dirección</span>
                <strong>Av. Providencia 1234, local 3</strong>
              </div>
              <div>
                <span>Horario</span>
                <strong>Lun a Vie 10:00–20:00 · Sáb 10:00–18:00</strong>
              </div>
              <div>
                <span>Teléfono</span>
                <strong>Dato de ejemplo</strong>
              </div>
              <div>
                <span>Pago</span>
                <strong>Efectivo, débito y transferencia</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="cr-footer">
        <div className="cr-wrap cr-footer-inner">
          <a className="cr-logo" href="#inicio">
            CORTE<span>REAL</span>
          </a>
          <p>© {new Date().getFullYear()} Corte Real. Sitio de demostración.</p>
        </div>
      </footer>
    </div>
  )
}
