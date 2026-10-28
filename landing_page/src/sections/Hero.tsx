import { contactHref, contactLabel, site } from '../config/site'
import { ArrowRight, ArrowUpRight, Check, Shield, Zap } from '../components/Icons'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="status-pill">
            <span className="pulse-dot" aria-hidden="true" />
            {site.availability}
          </span>

          <h1>
            Webs y sistemas que <span className="mark">hacen crecer</span> tu negocio.
          </h1>

          <p className="lede">
            Diseño y programo landing pages, sistemas de login y paneles de administración para
            pymes y emprendedores. Full stack, precios claros y entregas en días, no en meses.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contacto">
              Cotizar mi proyecto
              <ArrowRight size={17} />
            </a>
            <a className="btn btn-ghost" href="#demos">
              Ver demos reales
              <ArrowUpRight size={16} />
            </a>
          </div>

          <ul className="hero-checks">
            <li>
              <Check size={15} /> Presupuesto sin costo
            </li>
            <li>
              <Check size={15} /> Desde $149.000 CLP
            </li>
            <li>
              <Check size={15} /> 30 días de soporte
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="mock">
            <div className="mock-top">
              <span className="mock-dot" />
              <span className="mock-dot" />
              <span className="mock-dot" />
              <span className="mock-url">tunegocio.cl</span>
            </div>
            <div className="mock-page">
              <div className="mini-nav">
                <span className="mini-logo">N</span>
                <span className="mini-links">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="mini-cta">Reservar</span>
              </div>
              <div className="mini-hero">
                <div className="mini-lines">
                  <span className="l1" />
                  <span className="l2" />
                  <span className="l3" />
                  <span className="l4" />
                  <span className="mini-btn" />
                </div>
                <div className="mini-art" />
              </div>
              <div className="mini-cards">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="float-chip chip-a">
            <span className="chip-icon">
              <Zap size={15} />
            </span>
            <span>
              Entrega en 5–7 días
              <small>sin esperas eternas</small>
            </span>
          </div>

          <div className="float-chip chip-b">
            <span className="chip-icon">
              <Shield size={15} />
            </span>
            <span>
              Código 100% tuyo
              <small>sin quedarte amarrado</small>
            </span>
          </div>
        </div>
      </div>

      <span className="visually-hidden">
        {contactLabel('Escríbeme y conversemos sobre tu proyecto')} — {contactHref()}
      </span>
    </section>
  )
}
