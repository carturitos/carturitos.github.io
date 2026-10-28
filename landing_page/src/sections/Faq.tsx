import { faqs } from '../data/content'
import { contactHref, contactLabel } from '../config/site'
import { Reveal } from '../components/Reveal'
import { ArrowRight } from '../components/Icons'

export function Faq() {
  return (
    <section className="section section-alt" id="preguntas">
      <div className="container faq-grid">
        <Reveal className="faq-side">
          <span className="kicker">05 — Preguntas</span>
          <h2>Lo que suelen preguntarme.</h2>
          <p>
            Si te queda otra duda, escríbeme y te respondo sin vueltas. Prefiero una conversación
            honesta antes que venderte algo que no necesitas.
          </p>
          <a
            className="btn btn-ghost"
            href={contactHref('Hola Samuel, tengo una duda antes de cotizar.')}
            target="_blank"
            rel="noreferrer"
          >
            {contactLabel('Preguntar')}
            <ArrowRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary>
                  {faq.question}
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
