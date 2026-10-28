import { steps } from '../data/content'
import { contactHref, contactLabel } from '../config/site'
import { Reveal } from '../components/Reveal'
import { ArrowRight, Clock } from '../components/Icons'

export function Process() {
  return (
    <section className="section" id="proceso">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">03 — Cómo trabajo</span>
          <h2>Un proceso simple, sin sorpresas.</h2>
          <p>
            Tú sabes qué recibes, cuándo lo recibes y cuánto cuesta desde el primer día. Yo me
            encargo de lo técnico.
          </p>
        </Reveal>

        <div className="process-grid">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 70}>
              <article className={`step${index === 0 ? ' is-first' : ''}`}>
                <span className="step-num">{step.number}</span>
                <span className="step-meta">{step.meta}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="process-cta">
            <p>
              <strong>¿No tienes claro qué necesitas?</strong> Escríbeme con una idea general y te
              ayudo a definir el alcance, sin compromiso.
            </p>
            <a
              className="btn btn-primary"
              href={contactHref('Hola Samuel, tengo una idea pero no sé bien qué necesito. ¿Me ayudas a definirla?')}
              target="_blank"
              rel="noreferrer"
            >
              {contactLabel('Hablemos')}
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        <p className="section-footnote">
          <Clock size={13} style={{ verticalAlign: '-2px', marginRight: 6 }} />
          Trabajo con cupos limitados para cuidar los plazos: máximo 2 proyectos a la vez.
        </p>
      </div>
    </section>
  )
}
