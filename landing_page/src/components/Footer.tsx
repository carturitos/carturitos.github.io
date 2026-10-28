import { contactHref, site } from '../config/site'
import { ArrowUpRight, GitHub, Mail, WhatsApp } from './Icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">{site.initials}</span>
          <div>
            <strong>{site.name}</strong>
            <p>{site.location}</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Enlaces del pie de página">
          <a href="#servicios">Servicios</a>
          <a href="#demos">Demos</a>
          <a href="#proceso">Cómo trabajo</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="footer-contact">
          <a className="icon-link" href={`mailto:${site.email}`} aria-label="Correo electrónico">
            <Mail size={18} />
          </a>
          <a
            className="icon-link"
            href={contactHref()}
            target={site.whatsapp ? '_blank' : undefined}
            rel={site.whatsapp ? 'noreferrer' : undefined}
            aria-label="WhatsApp"
          >
            {site.whatsapp ? <WhatsApp size={18} /> : <ArrowUpRight size={18} />}
          </a>
          <a
            className="icon-link"
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHub size={18} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} {site.name}. Hecho con React, Vite y TypeScript, publicado en GitHub Pages.
        </p>
        <p className="footer-note">Trabajo remoto desde Chile · Boleta de honorarios</p>
      </div>
    </footer>
  )
}
