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
            Cada servicio tiene precio de partida y plazo definido. Si tu necesidad no aparece en
            la lista, escríbeme igual: la revisamos y te digo con honestidad si puedo ayudarte.
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
                      {service.featured && <span className="service-badge">Más pedido</span>}
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
          Precios de referencia en pesos chilenos. El valor final depende del alcance y siempre se
          confirma por escrito antes de comenzar.
        </p>
      </div>
    </section>
  )
}
