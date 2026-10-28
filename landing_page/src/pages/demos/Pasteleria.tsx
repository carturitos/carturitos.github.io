import { DemoBadge } from '../../components/DemoBadge'
import './pasteleria.css'

const products = [
  {
    name: 'Torta de chocolate',
    price: '$18.000',
    text: 'Bizcocho húmedo, ganache 70 % y una pizca de sal de mar.',
    tone: 'p1',
    tag: 'La favorita',
  },
  {
    name: 'Lemon pie',
    price: '$15.000',
    text: 'Masa quebrada, curd de limón de Pica y merengue tostado.',
    tone: 'p2',
    tag: 'Clásica',
  },
  {
    name: 'Torta de frambuesa',
    price: '$22.000',
    text: 'Vainilla, frambuesas frescas y crema chantilly.',
    tone: 'p3',
    tag: 'De temporada',
  },
  {
    name: 'Caja de galletas',
    price: '$7.000',
    text: 'Seis galletas de mantequilla con la receta de la abuela.',
    tone: 'p4',
    tag: 'Para regalar',
  },
]

const steps = [
  {
    n: '01',
    title: 'Elige y cuéntame',
    text: 'Escríbeme por WhatsApp con la torta, el tamaño y la fecha en que la necesitas.',
  },
  {
    n: '02',
    title: 'Confirmamos',
    text: 'Te envío el valor final y coordino el retiro o despacho. Reservo tu fecha con el 50 %.',
  },
  {
    n: '03',
    title: 'Disfruta',
    text: 'Retiras en Providencia o te la llevo a domicilio dentro de Santiago.',
  },
]

export function Pasteleria() {
  return (
    <div className="mm">
      <header className="mm-nav">
        <div className="mm-wrap mm-nav-inner">
          <a className="mm-logo" href="#inicio">
            <span className="mm-logo-name">
              Miga <i>&</i> Miel
            </span>
            <small>pastelería artesanal</small>
          </a>
          <nav className="mm-links" aria-label="Navegación">
            <a href="#catalogo">Catálogo</a>
            <a href="#encargar">Cómo encargar</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a className="mm-btn" href="#contacto">
            Encargar
          </a>
        </div>
      </header>

      <main>
        <section className="mm-hero" id="inicio">
          <div className="mm-wrap mm-hero-grid">
            <div className="mm-copy">
              <span className="mm-eyebrow">Hecho en casa · Providencia</span>
              <h1>
                Tortas que saben
                <br />a <em>domingo.</em>
              </h1>
              <p>
                Masa real, mantequilla de verdad y recetas que vienen de familia. Encarga tu torta
                y retírala el día que la necesites, sin filas ni robots.
              </p>
              <div className="mm-actions">
                <a className="mm-btn" href="#contacto">
                  Encargar por WhatsApp
                </a>
                <a className="mm-btn mm-btn-ghost" href="#catalogo">
                  Ver catálogo
                </a>
              </div>
              <p className="mm-note">Pedidos con 48 horas de anticipación · Despacho en Santiago</p>
            </div>

            <div className="mm-visual" aria-hidden="true">
              <div className="mm-blob" />
              <div className="mm-cake">
                <span className="mm-layer mm-top" />
                <span className="mm-layer mm-mid" />
                <span className="mm-layer mm-bottom" />
                <span className="mm-cherry" />
              </div>
              <span className="mm-tag">100 % artesanal</span>
              <span className="mm-badge">Desde 2019</span>
            </div>
          </div>
        </section>

        <section className="mm-strip">
          <div className="mm-wrap mm-strip-inner">
            <span>Ingredientes reales</span>
            <span>Sin conservantes</span>
            <span>Retiro en Providencia</span>
            <span>Despacho en Santiago</span>
          </div>
        </section>

        <section className="mm-section" id="catalogo">
          <div className="mm-wrap">
            <header className="mm-head">
              <span className="mm-eyebrow">Catálogo</span>
              <h2>Lo que sale del horno esta semana.</h2>
            </header>
            <div className="mm-grid">
              {products.map((p) => (
                <article className="mm-product" key={p.name}>
                  <div className={`mm-shot ${p.tone}`}>
                    <span className="mm-shot-tag">{p.tag}</span>
                  </div>
                  <div className="mm-product-body">
                    <div className="mm-product-top">
                      <h3>{p.name}</h3>
                      <strong>{p.price}</strong>
                    </div>
                    <p>{p.text}</p>
                    <a className="mm-link" href="#contacto">
                      Encargar <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mm-section mm-soft" id="encargar">
          <div className="mm-wrap">
            <header className="mm-head">
              <span className="mm-eyebrow">Cómo encargar</span>
              <h2>Tan simple como escribirme.</h2>
            </header>
            <div className="mm-steps">
              {steps.map((s) => (
                <article className="mm-step" key={s.n}>
                  <span className="mm-step-num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mm-quote-section">
          <div className="mm-wrap">
            <blockquote className="mm-quote">
              <span className="mm-quote-mark" aria-hidden="true">
                “
              </span>
              <p>
                Pedí la torta de frambuesa para el cumpleaños de mi mamá y fue el comentario de toda
                la mesa. Ya encargué la de chocolate para el próximo.
              </p>
              <footer>Carolina V. · Cliente desde 2021</footer>
            </blockquote>
          </div>
        </section>

        <section className="mm-contact" id="contacto">
          <div className="mm-wrap mm-contact-grid">
            <div>
              <span className="mm-eyebrow">Encargos</span>
              <h2>¿Para qué fecha la necesitas?</h2>
              <p>
                Escríbeme por WhatsApp con lo que tienes en mente. Te respondo con el valor, los
                sabores disponibles y la hora de retiro.
              </p>
              <a className="mm-btn mm-btn-light" href="#inicio">
                Escribir por WhatsApp
              </a>
            </div>
            <div className="mm-info">
              <div>
                <span>Retiro</span>
                <strong>Av. Providencia 1890, local 2</strong>
              </div>
              <div>
                <span>Horario</span>
                <strong>Mar a Sáb 10:00–19:00 · Dom 10:00–14:00</strong>
              </div>
              <div>
                <span>Despacho</span>
                <strong>Dentro de Santiago, coordinado al encargar</strong>
              </div>
              <div>
                <span>Pago</span>
                <strong>Transferencia o efectivo · 50 % para reservar</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mm-footer">
        <div className="mm-wrap mm-footer-inner">
          <span className="mm-logo">
            <span className="mm-logo-name">
              Miga <i>&</i> Miel
            </span>
          </span>
          <p>© {new Date().getFullYear()} Miga & Miel. Sitio de demostración.</p>
        </div>
      </footer>

      <DemoBadge />
    </div>
  )
}
