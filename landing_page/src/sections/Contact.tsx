import { useState, type FormEvent } from 'react'
import { contactHref, hasWhatsapp, site } from '../config/site'
import { Reveal } from '../components/Reveal'
import { ArrowUpRight, Check, Clock, Mail, MapPin, WhatsApp } from '../components/Icons'

const serviceOptions = ['Landing page', 'Catálogo de consulta', 'Sitio de presentación', 'Aún no lo tengo claro']

export function Contact() {
  const [prepared, setPrepared] = useState(false)
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const nombre = String(data.get('nombre') ?? '').trim()
    const negocio = String(data.get('negocio') ?? '').trim()
    const contacto = String(data.get('contacto') ?? '').trim()
    const servicio = String(data.get('servicio') ?? '').trim()
    const mensaje = String(data.get('mensaje') ?? '').trim()

    const lines = [
      `Hola Samuel, soy ${nombre || 'un interesado'}.`,
      negocio ? `Mi negocio: ${negocio}.` : '',
      servicio ? `Me interesa: ${servicio}.` : '',
      mensaje ? `Detalle: ${mensaje}` : '',
      contacto ? `Mi contacto: ${contacto}` : '',
    ].filter(Boolean)

    const url = contactHref(lines.join(' '))
    if (hasWhatsapp) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = url
    }
    setPrepared(true)
  }

  return (
    <section className="contact" id="contacto">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <span className="kicker">06 — Contacto</span>
          <h2>Conversemos sobre tu próxima página web.</h2>
          <p>
            La propuesta freelance está en preparación. Alcance, valor, plazo, ajustes y soporte
            se definirán por escrito para cada proyecto.
          </p>

          <div className="contact-actions">
            <a
              className="btn btn-accent"
              href={contactHref()}
              target={hasWhatsapp ? '_blank' : undefined}
              rel={hasWhatsapp ? 'noreferrer' : undefined}
            >
              {hasWhatsapp ? <WhatsApp size={18} /> : <Mail size={18} />}
              {hasWhatsapp ? 'Escribir por WhatsApp' : 'Escribir por correo'}
            </a>
            <a className="btn btn-outline-light" href={`mailto:${site.email}`}>
              <Mail size={18} />
              {site.email}
            </a>
            <button type="button" className="btn btn-outline-light btn-sm copy-button" onClick={copyEmail}>
              {copied ? <Check size={16} /> : <Mail size={16} />}
              {copied ? 'Correo copiado' : 'Copiar correo'}
            </button>
            <span className="visually-hidden" role="status">
              {copied ? 'Correo copiado al portapapeles' : ''}
            </span>
          </div>

          <ul className="contact-meta">
            <li>
              <MapPin size={16} />
              {site.location}
            </li>
            <li>
              <Clock size={16} />
              {site.responseTime}
            </li>
            <li>
              <ArrowUpRight size={16} />
              <a href={site.github} target="_blank" rel="noreferrer">
                github.com/carturitos
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="nombre">Tu nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ana Pérez"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="negocio">Tu negocio</label>
                <input
                  id="negocio"
                  name="negocio"
                  type="text"
                  placeholder="Barbería, clínica, tienda…"
                  autoComplete="organization"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="contacto">Email o teléfono</label>
                <input
                  id="contacto"
                  name="contacto"
                  type="text"
                  placeholder="ana@correo.cl"
                  autoComplete="email"
                />
              </div>
              <div className="field">
                <label htmlFor="servicio">Qué necesitas</label>
                <select id="servicio" name="servicio" defaultValue={serviceOptions[0]}>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="mensaje">Cuéntame un poco más</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Tengo una barbería y necesito una página para que los clientes reserven hora…"
                required
              />
            </div>

            <button className="btn btn-accent" type="submit">
              Preparar mensaje
              <ArrowUpRight size={17} />
            </button>

            <div className="form-status" aria-live="polite">
              {prepared ? (
                <p className="form-success">
                  El mensaje está preparado para abrirse en {hasWhatsapp ? 'WhatsApp' : 'tu correo'}.
                  Debes enviarlo allí. Si no se abrió, usa los enlaces de contacto de esta sección.
                </p>
              ) : (
                <p className="form-note">
                  Se abrirá {hasWhatsapp ? 'WhatsApp' : 'tu correo'} con el mensaje listo para
                  enviar. Este sitio no guarda datos personales.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
