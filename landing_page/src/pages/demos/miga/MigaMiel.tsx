import { useEffect, useMemo, useRef, useState } from 'react'
import { contactHref } from '../../../config/site'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { ProductDialog } from './ProductDialog'
import { Reveal } from './Reveal'
import {
  faqs,
  gallery,
  needOptions,
  priceFormatter,
  products,
  steps,
  type Product,
} from './data'
import './migaMiel.css'

const HERO = {
  src: '/photos/miga-miel/hero.webp',
  small: '/photos/miga-miel/hero-sm.webp',
  width: 1000,
  height: 1250,
  alt: 'Torta de dos pisos con flores naturales sobre una mesa de celebración',
}

export function MigaMiel() {
  usePageMeta({
    title: 'Miga & Miel — Pastelería de autor | Demo de Carturitos',
    description:
      'Tortas, cupcakes y mesas dulces por encargo. Proyecto demostrativo de diseño y desarrollo web de Carturitos.',
    path: '/demos/pasteleria',
    image: '/og/miga-miel.jpg',
  })

  const [product, setProduct] = useState<Product | null>(null)
  const [needId, setNeedId] = useState(needOptions[0].id)
  const [picked, setPicked] = useState<Product | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [barVisible, setBarVisible] = useState(false)

  const heroRef = useRef<HTMLElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)

  const need = needOptions.find((option) => option.id === needId) ?? needOptions[0]

  const message = useMemo(() => {
    const parts = [`Hola Samuel, vi la demo Miga & Miel y me interesa ${need.need}.`]
    if (picked) parts.push(`Consulta de ejemplo: ${picked.name}, ${picked.servings}.`)
    parts.push('¿Podemos hablar del proyecto?')
    return parts.join(' ')
  }, [need, picked])

  const waHref = contactHref(message)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => {
      const hero = heroRef.current
      const trigger = hero ? hero.offsetHeight * 0.8 : 480
      setBarVisible(window.scrollY > trigger)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  function consultProduct(selected: Product) {
    setPicked(selected)
    setNeedId('catalogo')
    setProduct(null)
    document.getElementById('consultar')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="mm">
      <div className="mm-topbar">
        <p>Proyecto demostrativo de diseño y desarrollo web</p>
        <a href="/">
          Volver a Carturitos <span aria-hidden="true">↗</span>
        </a>
      </div>

      <header className="mm-head">
        <div className="mm-wrap mm-head-inner">
          <a className="mm-brand" href="#inicio">
            <span className="mm-brand-symbol" aria-hidden="true">
              <svg viewBox="0 0 32 32" focusable="false">
                <path
                  d="M16.5 26.5c-6.2 0-10.5-4.2-10.5-9.4C6 11.8 10.2 8 15.2 8c4.6 0 7.8 3 7.8 6.9 0 3.5-2.6 6.3-6.1 6.3-3 0-5.3-2-5.3-4.7 0-2.4 1.8-4.2 4.2-4.2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="mm-brand-text">
              <span className="mm-brand-name">
                miga <i>&amp;</i> miel
              </span>
              <span className="mm-brand-tag">pastelería de autor</span>
            </span>
          </a>

          <nav
            className={`mm-nav${menuOpen ? ' is-open' : ''}`}
            id="mm-menu"
            aria-label="Navegación principal"
          >
            <a href="#catalogo" onClick={closeMenu}>Catálogo</a>
            <a href="#personalizados" onClick={closeMenu}>Personalizados</a>
            <a href="#galeria" onClick={closeMenu}>Galería</a>
            <a href="#encargar" onClick={closeMenu}>Antes de encargar</a>
          </nav>

          <div className="mm-head-actions">
            <a className="mm-btn mm-btn-coral mm-btn-sm" href="#consultar">Consultar</a>
            <button
              ref={toggleRef}
              type="button"
              className="mm-menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mm-menu"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main id="contenido">
        {/* 1 · Hero */}
        <section className="mm-hero" id="inicio" ref={heroRef}>
          <div className="mm-wrap mm-hero-grid">
            <div className="mm-hero-copy">
              <h1>
                Hecho para celebrar lo <span className="mm-mark">rico</span> de cada momento
              </h1>
              <p className="mm-lead">
                Tortas, cupcakes y mesas dulces con receta propia, en tandas pequeñas. Cuéntanos qué
                celebras y para cuándo, y armamos algo que se recuerde.
              </p>
              <div className="mm-hero-actions">
                <a className="mm-btn mm-btn-coral" href="#catalogo">
                  Ver productos
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a className="mm-btn mm-btn-outline" href="#consultar">Encargar</a>
              </div>
              <p className="mm-hero-note">
                Piezas hechas por encargo · Entrega o retiro coordinados al confirmar
              </p>
            </div>

            <div className="mm-hero-visual">
              <div className="mm-hero-arch" aria-hidden="true" />
              <figure className="mm-photo mm-photo-arch">
                <img
                  src={HERO.src}
                  srcSet={`${HERO.small} 640w, ${HERO.src} 1000w`}
                  sizes="(max-width: 760px) 84vw, (max-width: 1020px) 60vw, 42vw"
                  alt={HERO.alt}
                  width={HERO.width}
                  height={HERO.height}
                  fetchPriority="high"
                  decoding="async"
                />
              </figure>
              <span className="mm-sticker">
                hecho
                <br />
                a mano
              </span>
            </div>
          </div>
        </section>

        {/* Cinta */}
        <div className="mm-marquee" aria-hidden="true">
          <div className="mm-marquee-track">
            {[0, 1].map((copy) => (
              <span className="mm-marquee-set" key={copy}>
                <span>tortas por encargo</span>
                <b>✳</b>
                <span>cupcakes</span>
                <b>✳</b>
                <span>mesas dulces</span>
                <b>✳</b>
                <span>box regalo</span>
                <b>✳</b>
                <span>galletas de mantequilla</span>
                <b>✳</b>
                <span>postres</span>
                <b>✳</b>
              </span>
            ))}
          </div>
        </div>

        {/* 2 · Catálogo */}
        <section className="mm-catalogo" id="catalogo" aria-labelledby="mm-catalogo-title">
          <div className="mm-wrap">
            <Reveal className="mm-sec-head mm-sec-head-row">
              <div>
                <span className="mm-eyebrow">Catálogo</span>
                <h2 id="mm-catalogo-title">
                  Lo que sale del horno
                  <br />
                  cada semana.
                </h2>
              </div>
              <p className="mm-aside">
                Toca una pieza para ver el detalle y preparar una consulta de ejemplo.
              </p>
            </Reveal>

            <div className="mm-catalogo-grid">
              {products.map((item, index) => (
                <Reveal
                  key={item.id}
                  as="article"
                  className={`mm-product${index === 0 ? ' mm-product-feature' : ''}`}
                  delay={index * 60}
                >
                  {/* Atajo con mouse: la acción accesible es el botón "Ver detalle" */}
                  <button
                    type="button"
                    className="mm-product-open"
                    onClick={() => setProduct(item)}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <span className="mm-photo">
                      <img
                        src={item.image.src}
                        srcSet={`${item.image.small} 640w, ${item.image.src} 1000w`}
                        sizes="(max-width: 760px) 78vw, (max-width: 1020px) 45vw, 30vw"
                        alt=""
                        width={item.image.width}
                        height={item.image.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className="mm-plate-tag">{item.tag}</span>
                  </button>

                  <div className="mm-product-body">
                    <div className="mm-product-top">
                      <h3>{item.name}</h3>
                      <span className="mm-price">{priceFormatter.format(item.price)}</span>
                    </div>
                    <p>{item.description}</p>
                    {item.meta.length > 0 && (
                      <ul className="mm-product-meta">
                        {item.meta.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    )}
                    <button
                      type="button"
                      className="mm-link-arrow"
                      onClick={() => setProduct(item)}
                    >
                      Ver detalle <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mm-price-note">
              Precios referenciales de demostración. Cada encargo se cotiza según tamaño y fecha.
            </p>
            <p className="mm-mobile-hint" aria-hidden="true">Desliza para ver más →</p>
          </div>
        </section>

        {/* 3 · Personalizados */}
        <section className="mm-custom" id="personalizados" aria-labelledby="mm-custom-title">
          <div className="mm-wrap mm-custom-grid">
            <Reveal className="mm-custom-visual">
              <figure className="mm-photo mm-photo-arch-sm mm-custom-main">
                <img
                  src="/photos/miga-miel/custom-main.webp"
                  srcSet="/photos/miga-miel/custom-main-sm.webp 560w, /photos/miga-miel/custom-main.webp 800w"
                  sizes="(max-width: 1020px) 66vw, 33vw"
                  alt="Mesa dulce montada para una celebración"
                  width={800}
                  height={1067}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="mm-photo mm-custom-detail">
                <img
                  src="/photos/miga-miel/custom-detail.webp"
                  srcSet="/photos/miga-miel/custom-detail-sm.webp 520w, /photos/miga-miel/custom-detail.webp 700w"
                  sizes="(max-width: 1020px) 50vw, 25vw"
                  alt="Manos acomodando frambuesas sobre una torta"
                  width={700}
                  height={933}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <span className="mm-sticker mm-sticker-custom">
                tu fecha
                <br />
                manda
              </span>
            </Reveal>

            <Reveal className="mm-custom-copy">
              <span className="mm-eyebrow mm-eyebrow-light">Personalizados</span>
              <h2 id="mm-custom-title">
                Tu idea,
                <br />
                nuestra receta.
              </h2>
              <p>
                Cumpleaños, matrimonios, lanzamientos o un martes cualquiera. Partimos de una
                referencia, una paleta o una historia y la convertimos en torta.
              </p>
              <ol className="mm-reasons">
                <li>
                  <span>01</span>
                  <h3>Masa de verdad</h3>
                  <p>Mantequilla, huevos y fruta de temporada. Sin mezclas industriales.</p>
                </li>
                <li>
                  <span>02</span>
                  <h3>Diseño a tu medida</h3>
                  <p>Sabores, tamaño y decoración se eligen según lo que celebres.</p>
                </li>
                <li>
                  <span>03</span>
                  <h3>Coordinación simple</h3>
                  <p>Fecha, retiro o entrega y pago se acuerdan al confirmar.</p>
                </li>
              </ol>
              <a
                className="mm-btn mm-btn-cream"
                href="#consultar"
                onClick={() => setNeedId('reservas')}
              >
                Conversemos tu idea
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Reveal>
          </div>
        </section>

        {/* 4 · Galería */}
        <section className="mm-galeria" id="galeria" aria-labelledby="mm-galeria-title">
          <div className="mm-wrap">
            <Reveal className="mm-sec-head mm-sec-head-row">
              <div>
                <span className="mm-eyebrow">Galería</span>
                <h2 id="mm-galeria-title">Del horno a la mesa.</h2>
              </div>
              <p className="mm-aside">
                Producto, detalle y montaje. Fotografía de Pexels con licencia libre, documentada en
                el proyecto.
              </p>
            </Reveal>

            <div className="mm-galeria-grid">
              {gallery.map((item, index) => (
                <Reveal
                  key={item.id}
                  as="figure"
                  className={`mm-gal-${item.id}`}
                  delay={index * 50}
                >
                  <img
                    src={item.src}
                    srcSet={`${item.small} 480w, ${item.src} 700w`}
                    sizes="(max-width: 760px) 48vw, 32vw"
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{item.caption}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · Antes de encargar */}
        <section className="mm-encargar" id="encargar" aria-labelledby="mm-encargar-title">
          <div className="mm-wrap">
            <Reveal className="mm-sec-head">
              <span className="mm-eyebrow">Antes de encargar</span>
              <h2 id="mm-encargar-title">Cuatro pasos, cero letra chica.</h2>
            </Reveal>

            <ol className="mm-steps">
              {steps.map((step, index) => (
                <Reveal as="li" key={step.title} delay={index * 70}>
                  <span className="mm-step-n">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </Reveal>
              ))}
            </ol>

            <div className="mm-faq">
              <Reveal className="mm-faq-copy">
                <h3>Preguntas frecuentes</h3>
                <p>
                  Lo que más nos consultan antes de cerrar un encargo. Si falta algo, escríbenos y lo
                  resolvemos.
                </p>
              </Reveal>

              <Reveal className="mm-faq-list">
                {faqs.map((faq, index) => (
                  <details key={faq.q} open={index === 0}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* 6 · Consulta */}
        <section className="mm-consulta" id="consultar" aria-labelledby="mm-consulta-title">
          <div className="mm-wrap mm-consulta-grid">
            <Reveal className="mm-consulta-copy">
              <span className="mm-eyebrow mm-eyebrow-dark">Sobre este proyecto</span>
              <h2 id="mm-consulta-title">Tu negocio, con una web a esta altura.</h2>
              <p>
                Miga &amp; Miel es un proyecto demostrativo de Carturitos. Si te gustó cómo se ve y
                cómo se siente, podemos construir algo así para tu negocio: catálogo, consultas y una
                identidad que no se parezca a una plantilla.
              </p>
              <ul className="mm-deliverables">
                <li>Diseño a medida</li>
                <li>Catálogo editable</li>
                <li>Consultas por WhatsApp</li>
              </ul>
            </Reveal>

            <Reveal className="mm-consulta-card">
              <p className="mm-form-title">¿Qué necesitas?</p>

              <div className="mm-chips" role="group" aria-label="Tipo de proyecto">
                {needOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`mm-chip${option.id === needId ? ' is-on' : ''}`}
                    aria-pressed={option.id === needId}
                    onClick={() => setNeedId(option.id)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {picked && (
                <p className="mm-picked">
                  Consulta de ejemplo: <strong>{picked.name}</strong>
                  <button
                    type="button"
                    className="mm-picked-clear"
                    aria-label={`Quitar ${picked.name}`}
                    onClick={() => setPicked(null)}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </p>
              )}

              <a className="mm-btn mm-btn-ink mm-btn-block" href={waHref} target="_blank" rel="noreferrer">
                Escribir por WhatsApp
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <p className="mm-form-note">
                Abre WhatsApp con la consulta escrita. No es una compra a Miga &amp; Miel y no se
                guardan datos en este sitio.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="mm-foot" id="carturitos">
        <div className="mm-wrap mm-foot-grid">
          <div className="mm-foot-brand">
            <span className="mm-brand-name">
              miga <i>&amp;</i> miel
            </span>
            <p>
              Proyecto conceptual de Carturitos. Diseño y desarrollo: Samuel Gutiérrez. Las piezas,
              precios y textos son ilustrativos.
            </p>
          </div>

          <nav className="mm-foot-nav" aria-label="Navegación del pie">
            <span>Productos</span>
            <a href="#catalogo">Catálogo</a>
            <a href="#personalizados">Personalizados</a>
            <a href="#galeria">Galería</a>
          </nav>

          <nav className="mm-foot-nav" aria-label="Proyecto">
            <span>Proyecto</span>
            <a href="#consultar">Quiero una web así</a>
            <a href="/">Carturitos</a>
          </nav>
        </div>

        <div className="mm-wrap mm-foot-legal">
          <p>© {new Date().getFullYear()} Miga &amp; Miel · demostración</p>
          <p>Carturitos · carturitos.github.io</p>
        </div>
      </footer>

      <div
        className={`mm-bar${(barVisible || picked) && !menuOpen ? ' is-on' : ''}`}
        aria-hidden={!(barVisible || picked) || menuOpen}
        inert={!(barVisible || picked) || menuOpen}
      >
        <span>{picked ? `Consulta · ${picked.name}` : '¿Quieres una web así?'}</span>
        <a className="mm-btn mm-btn-coral mm-btn-sm" href="#consultar">Hablemos</a>
      </div>

      <ProductDialog
        product={product}
        price={product ? priceFormatter.format(product.price) : ''}
        onClose={() => setProduct(null)}
        onConsult={consultProduct}
      />
    </div>
  )
}
