import { Link } from 'react-router-dom'
import { demos } from '../data/demos'
import { Reveal } from '../components/Reveal'
import { ArrowUpRight } from '../components/Icons'

export function Demos() {
  return (
    <section className="section section-alt" id="demos">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">02 — Demos</span>
          <h2>Mira lo que vendo antes de contratarme.</h2>
          <p>
            Tres sitios completos, hechos por mí para tres rubros distintos. Puedes entrar,
            navegarlos y probarlos en tu celular. Si te gusta uno, lo adapto a tu negocio.
          </p>
        </Reveal>

        <div className="demos-grid">
          {demos.map((demo, index) => (
            <Reveal key={demo.slug} delay={index * 70}>
              <Link className="demo-card" to={`/demos/${demo.slug}`} target="_blank" rel="noreferrer">
                <div className="demo-shot">
                  <img src={demo.shot} alt={`Captura del sitio de demostración ${demo.name}`} loading="lazy" />
                  <span className="demo-overlay">
                    Abrir demo
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <div className="demo-body">
                  <span className="demo-sector">{demo.sector}</span>
                  <h3>{demo.name}</h3>
                  <p>{demo.summary}</p>
                  <div className="demo-tags">
                    {demo.highlights.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="section-footnote">
          Las demos usan datos y números de ejemplo. Tu proyecto se construye con tu marca, tus
          textos y tus precios reales.
        </p>
      </div>
    </section>
  )
}
