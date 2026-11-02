import { services } from '../data/services'
import { Reveal } from '../components/Reveal'
import { Check, Clock, IconByName } from '../components/Icons'

export function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">01 — Servicios</span>
          <h2>Soluciones concretas, no horas de código.</h2>
          <p>
            Propuesta freelance en preparación. Los servicios, valores, plazos y condiciones están
            en definición y se confirmarán por escrito para cada proyecto.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = IconByName[service.icon]
            return (
              <Reveal key={service.id} delay={index * 60}>
                <article className={`service-card${service.featured ? ' is-featured' : ''}`}>
                  <div className="service-top">
                    <span className="service-icon">
                      <Icon size={20} />
                    </span>
                    <div className="service-badges">
                      {service.featured && <span className="service-badge">Enfoque inicial</span>}
                      <span className="service-index">{service.index}</span>
                    </div>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="service-price">
                    <strong>{service.price}</strong>
                    {service.priceNote && <span>{service.priceNote}</span>}
                  </div>

                  <span className="service-meta">
                    <Clock size={13} />
                    {service.delivery}
                  </span>

                  <ul className="service-includes">
                    {service.includes.map((item) => (
                      <li key={item}>
                        <Check size={13} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        <p className="section-footnote">
          Valores y plazos por definir. Dominio, hosting, materiales, ajustes y soporte se acuerdan
          en cada propuesta antes de comenzar.
        </p>
      </div>
    </section>
  )
}
