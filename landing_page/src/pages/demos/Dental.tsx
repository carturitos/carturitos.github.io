import { useState } from 'react'
import { DemoNotice } from '../../components/DemoNotice'
import { contactHref } from '../../config/site'
import { usePageMeta } from '../../hooks/usePageMeta'
import './dental.css'

const treatments = [
  {
    name: 'Limpieza y control',
    price: 'desde $25.000',
    time: '40 min',
    text: 'Destartraje, pulido y revisión general. La base para mantener todo en orden.',
  },
  {
    name: 'Ortodoncia',
    price: 'desde $1.290.000',
    time: 'Tratamiento',
    text: 'Brackets metálicos o estéticos, con controles mensuales y plan de pago.',
  },
  {
    name: 'Implantes',
    price: 'desde $650.000',
    time: 'Por implante',
    text: 'Reposición de piezas con evaluación previa, tomografía y seguimiento.',
  },
  {
    name: 'Blanqueamiento',
    price: 'desde $180.000',
    time: '1 sesión',
    text: 'Aclaramiento en consulta, con control de sensibilidad y kit de mantención.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Agenda en línea',
    text: 'Eliges día y hora en menos de un minuto. Te confirmamos por WhatsApp.',
  },
  {
    n: '02',
    title: 'Evaluación sin apuro',
    text: 'Revisamos tu caso, resolvemos dudas y te mostramos alternativas con precios.',
  },
  {
    n: '03',
    title: 'Plan claro',
    text: 'Recibes el presupuesto por escrito, con etapas y formas de pago.',
  },
]

const team = [
  { name: 'Dra. Camila Rojas', role: 'Odontología general', initials: 'CR' },
  { name: 'Dr. Ignacio Fuentes', role: 'Implantología', initials: 'IF' },
  { name: 'Dra. Valentina Soto', role: 'Ortodoncia', initials: 'VS' },
]

const reviews = [
  {
    text: 'Me explicaron cada paso antes de empezar. Salí sabiendo qué tenía y cuánto iba a costar.',
    author: 'Paciente de ejemplo',
  },
  {
    text: 'Llegué con dolor y me atendieron el mismo día. El trato fue increíble.',
    author: 'Paciente de ejemplo',
  },
  {
    text: 'Llevo el tratamiento de ortodoncia de mi hija acá. Puntuales y muy claros con los pagos.',
    author: 'Paciente de ejemplo',
  },
]

export function Dental() {
  const [selectedDay, setSelectedDay] = useState(1)

  usePageMeta({
    title: 'Dental Aurora — Demo de clínica dental | Samuel Gutiérrez',
    description:
      'Proyecto demostrativo de sitio para clínica dental: tratamientos, equipo y agenda. Negocio y contenido ficticios.',
    path: '/demos/dental',
  })

  return (
    <div className="da">
      <header className="da-nav">
        <DemoNotice />
        <div className="da-wrap da-nav-inner">
          <a className="da-logo" href="#inicio">
            <span className="da-logo-mark" aria-hidden="true">
              +
            </span>
            Dental Aurora
          </a>
          <nav className="da-links" aria-label="Navegación">
            <a href="#tratamientos">Tratamientos</a>
            <a href="#primera-visita">Primera visita</a>
            <a href="#equipo">Equipo</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a className="da-btn" href="#contacto">
            Agendar hora
          </a>
        </div>
      </header>

      <main id="contenido">
        <section className="da-hero" id="inicio">
          <div className="da-wrap da-hero-grid">
            <div className="da-copy">
              <span className="da-pill">Clínica dental en Ñuñoa</span>
              <h1>
                Sonríe sin miedo: acá te <em>explican todo.</em>
              </h1>
              <p>
                Odontología general y estética con agenda online, atención puntual y presupuesto
                por escrito antes de empezar. Sin sorpresas ni letra chica.
              </p>
              <div className="da-actions">
                <a className="da-btn" href="#contacto">
                  Agendar mi hora
                </a>
                <a className="da-btn da-btn-ghost" href="#tratamientos">
                  Ver tratamientos
                </a>
              </div>
              <ul className="da-trust">
                <li>Urgencias el mismo día</li>
                <li>Hasta 3 cuotas sin interés</li>
                <li>Presupuesto por escrito</li>
              </ul>
            </div>

            <div className="da-hero-card">
              <div className="da-card-head">
                <span>Reserva online</span>
                <strong>Agenda tu hora</strong>
              </div>
              <div className="da-field">
                <label htmlFor="da-tratamiento">Tratamiento</label>
                <select id="da-tratamiento" defaultValue="Limpieza y control">
                  {treatments.map((t) => (
                    <option key={t.name}>{t.name}</option>
                  ))}
                  <option>No estoy seguro, necesito evaluación</option>
                </select>
              </div>
              <div className="da-days">
                {[
                  { day: 'Lun', date: '3' },
                  { day: 'Mar', date: '4' },
                  { day: 'Mié', date: '5' },
                  { day: 'Jue', date: '6' },
                ].map((d, i) => (
                  <button
                    type="button"
                    key={d.day}
                    className={`da-day${selectedDay === i ? ' is-active' : ''}`}
                    aria-pressed={selectedDay === i}
                    onClick={() => setSelectedDay(i)}
                  >
                    <span>{d.day}</span>
                    <strong>{d.date}</strong>
                  </button>
                ))}
              </div>
              <a className="da-btn da-btn-full" href="#contacto">
                Continuar
              </a>
              <p className="da-card-note">Selección de ejemplo: no reserva una hora real.</p>
              <p className="da-card-note demo-note">
                Agenda, precios y reseñas son contenido ficticio de esta demostración.
              </p>
            </div>
          </div>
        </section>

        <section className="da-strip">
          <div className="da-wrap da-strip-inner">
            <span>Convenios de ejemplo</span>
            <strong>Isapres</strong>
            <strong>Pago en cuotas</strong>
          </div>
        </section>

        <section className="da-section" id="tratamientos">
          <div className="da-wrap">
            <header className="da-head">
              <span className="da-eyebrow">Tratamientos</span>
              <h2>Todo lo que necesitas, en un solo lugar.</h2>
              <p>Precios de ejemplo. El presupuesto final depende de tu evaluación.</p>
            </header>
            <div className="da-grid">
              {treatments.map((t) => (
                <article className="da-card" key={t.name}>
                  <div className="da-card-top">
                    <h3>{t.name}</h3>
                    <span>{t.time}</span>
                  </div>
                  <p>{t.text}</p>
                  <div className="da-price">{t.price}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="da-section da-soft" id="primera-visita">
          <div className="da-wrap">
            <header className="da-head">
              <span className="da-eyebrow">Primera visita</span>
              <h2>Tres pasos y ninguna sorpresa.</h2>
            </header>
            <div className="da-steps">
              {steps.map((s) => (
                <article className="da-step" key={s.n}>
                  <span className="da-step-num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="da-section" id="equipo">
          <div className="da-wrap">
            <header className="da-head">
              <span className="da-eyebrow">Equipo</span>
              <h2>Equipo de ejemplo.</h2>
            </header>
            <div className="da-team">
              {team.map((person) => (
                <article className="da-person" key={person.name}>
                  <span className="da-avatar">{person.initials}</span>
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="da-section da-soft">
          <div className="da-wrap">
            <header className="da-head">
              <span className="da-eyebrow">Contenido de ejemplo</span>
              <h2>Testimonios de ejemplo.</h2>
            </header>
            <div className="da-reviews">
              {reviews.map((r) => (
                <blockquote className="da-review" key={r.text}>
                  <span className="demo-example">Ejemplo</span>
                  <p>“{r.text}”</p>
                  <footer>{r.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="da-contact" id="contacto">
          <div className="da-wrap da-contact-grid">
            <div>
              <span className="da-eyebrow">Contacto</span>
              <h2>Tu primera consulta empieza acá.</h2>
              <p>
                Escríbenos por WhatsApp o déjanos tus datos. Coordinamos una hora que te acomode y
                te entregamos el presupuesto en la misma visita.
              </p>
              <a
                className="da-btn da-btn-light"
                href={contactHref(
                  'Hola Samuel, vi la demo de Dental Aurora y quiero una web similar para mi negocio.',
                )}
                target="_blank"
                rel="noreferrer"
              >
                Quiero una web así
              </a>
              <p className="demo-note">Sitio de demostración: no agenda horas reales.</p>
            </div>
            <div className="da-info">
              <div>
                <span>Dirección</span>
                <strong>Av. Irarrázaval 2345, Ñuñoa</strong>
              </div>
              <div>
                <span>Horario</span>
                <strong>Lun a Vie 9:00–19:00 · Sáb 9:00–14:00</strong>
              </div>
              <div>
                <span>Teléfono</span>
                <strong>Dato de ejemplo</strong>
              </div>
              <div>
                <span>Estacionamiento</span>
                <strong>Gratis para pacientes</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="da-footer">
        <div className="da-wrap da-footer-inner">
          <span className="da-logo">
            <span className="da-logo-mark" aria-hidden="true">
              +
            </span>
            Dental Aurora
          </span>
          <p>© {new Date().getFullYear()} Dental Aurora. Sitio de demostración.</p>
        </div>
      </footer>
    </div>
  )
}
