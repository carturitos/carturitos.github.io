import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { site, contactHref } from '../config/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { copy } from './copy'
import { demoSlugs } from './routing'
import { saveLocale, usePresentation } from './usePresentation'
import './presentation.css'

const sections = [
  'projects',
  'focus',
  'process',
  'about',
  'questions',
  'contact',
]
const screenshots = [
  '/shots/barberia.png',
  '/shots/dental.png',
  '/shots/miga-miel.jpg',
]
const skills = [
  'Angular',
  'TypeScript',
  'Node.js',
  'React',
  'NestJS',
  'PostgreSQL',
  'Git',
  'Docker',
]

export function LanguageSwitch() {
  const route = usePresentation()
  const t = copy[route.locale]
  return (
    <nav className="p-languages" aria-label={t.language}>
      {(['es', 'en'] as const).map((locale) => (
        <Link
          key={locale}
          to={route.languageHref(locale)}
          lang={locale}
          aria-current={locale === route.locale ? 'page' : undefined}
          onClick={() => saveLocale(locale)}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </nav>
  )
}

function PlatformAction() {
  const { locale, platformHref } = usePresentation()
  const t = copy[locale]
  return platformHref ? (
    <a
      className="p-button"
      href={platformHref}
      target="_blank"
      rel="noreferrer"
    >
      {t.backPlatform} <span aria-hidden="true">↗</span>
    </a>
  ) : (
    <p className="p-unavailable">
      <span aria-hidden="true">○</span> {t.unavailable}
    </p>
  )
}

export function PresentationHome() {
  const route = usePresentation()
  const { locale, samples } = route
  const t = copy[locale]
  const root = useRef<HTMLDivElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [mobile, setMobile] = useState(
    () => window.matchMedia('(max-width: 900px)').matches,
  )
  const [prepared, setPrepared] = useState<string | null>(null)

  usePageMeta({
    title: t.title,
    description: t.description,
    path: route.homeHref,
  })

  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)')
    const sync = () => {
      setMobile(media.matches)
      if (!media.matches) setOpen(false)
    }
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    setOpen(false)
    setPrepared(null)
    saveLocale(locale)
  }, [locale, samples])

  useEffect(() => {
    // Content is visible before observing; animation is only an enhancement.
    if (!root.current || !('IntersectionObserver' in window)) return
    const elements = root.current.querySelectorAll('.p-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.add('has-entered')
            observer.unobserve(entry.target)
          }
      },
      { threshold: 0.12 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = `${t.formGreeting} ${String(data.get('name')).trim()}. ${t.detail} ${String(data.get('message')).trim()}`
    setPrepared(contactHref(message))
  }

  return (
    <div className="presentation" ref={root}>
      <header className="p-header">
        <div className="p-container p-header-inner">
          <Link className="p-brand" to={route.homeHref}>
            <span className="p-mark" aria-hidden="true">
              s.
            </span>
            <span>
              Samuel Gutiérrez<small>{t.role}</small>
            </span>
          </Link>
          <div className="p-header-controls">
            <LanguageSwitch />
            <button
              ref={menuButton}
              className="p-menu-button"
              type="button"
              aria-label={open ? t.close : t.open}
              aria-expanded={open}
              aria-controls="presentation-menu"
              onClick={() => setOpen(!open)}
            >
              {open ? t.close : t.open}{' '}
              <span aria-hidden="true">{open ? '−' : '+'}</span>
            </button>
          </div>
          <nav
            id="presentation-menu"
            className="p-nav"
            aria-label={t.navLabel}
            hidden={mobile && !open}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setOpen(false)
                menuButton.current?.focus()
              }
            }}
          >
            {sections.map((id, index) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {t.nav[index]}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className="p-container p-hero" aria-labelledby="p-title">
          <div className="p-hero-copy p-reveal">
            <p className="p-eyebrow">
              <span className="p-dot" aria-hidden="true" />
              {t.eyebrow}
            </p>
            <h1 id="p-title">
              {t.hero[0]}
              <br />
              <em>{t.hero[1]}</em>
            </h1>
            <p className="p-lead">{t.lead}</p>
            <div className="p-actions">
              <a className="p-button" href="#projects">
                {t.explore} <span aria-hidden="true">↘</span>
              </a>
              {!samples && (
                <a
                  className="p-text-link"
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.trajectory} ↗
                </a>
              )}
            </div>
          </div>
          <aside className="p-profile p-reveal">
            <span className="p-profile-sign" aria-hidden="true">
              Samuel.
            </span>
            <h2>{t.profileTitle}</h2>
            <p>{t.profileText}</p>
            <dl>
              {t.profileLabels.map((label, i) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{t.profileValues[i]}</dd>
                </div>
              ))}
            </dl>
            {!samples && (
              <a
                className="p-text-link"
                href={site.github}
                target="_blank"
                rel="noreferrer"
              >
                {t.source} ↗
              </a>
            )}
            {samples && <p className="p-mini-note">{t.samplesNotice}</p>}
          </aside>
        </section>

        <section
          className="p-container p-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="p-section-heading p-reveal">
            <div>
              <p className="p-eyebrow">{t.projectsEyebrow}</p>
              <h2 id="projects-title">{t.projectsTitle}</h2>
            </div>
            <p>{t.projectsText}</p>
          </div>
          <div className="p-project-grid">
            {demoSlugs.map((slug, i) => (
              <article className="p-project p-reveal" key={slug}>
                <Link
                  className="p-screenshot"
                  to={route.demoHref(slug)}
                  aria-label={`${t.openDemo}: ${t.demoNames[i]}`}
                >
                  <img
                    src={screenshots[i]}
                    alt={t.demoAlt[i]}
                    width="1440"
                    height="990"
                    loading="lazy"
                  />
                </Link>
                <div className="p-project-meta">
                  <span>
                    0{i + 1} / {t.demoSectors[i]}
                  </span>
                  <span aria-hidden="true">↗</span>
                </div>
                <h3>{t.demoNames[i]}</h3>
                <p>{t.demoTexts[i]}</p>
                <div className="p-project-links">
                  <Link to={route.demoHref(slug)}>{t.openDemo} ↗</Link>
                  {!samples && (
                    <a
                      href={`https://github.com/carturitos/carturitos.github.io/tree/main/landing_page/src/pages/demos${slug === 'pasteleria' ? '/miga' : ''}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.code}
                    </a>
                  )}
                </div>
                {locale === 'en' && (
                  <small className="p-demo-language">{t.spanishDemo}</small>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="p-focus" id="focus" aria-labelledby="focus-title">
          <div className="p-container">
            <div className="p-section-heading p-reveal">
              <div>
                <p className="p-eyebrow">{t.scopeEyebrow}</p>
                <h2 id="focus-title">{t.scopeTitle}</h2>
              </div>
              <p>{t.scopeText}</p>
            </div>
            <div className="p-scope-grid">
              {t.scopeNames.map((name, i) => (
                <article className="p-scope p-reveal" key={name}>
                  <span className="p-number" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3>{name}</h3>
                  <p>{t.scopeDescriptions[i]}</p>
                  <ul>
                    {t.scopeLists[i].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="p-scope-note">{t.scopeNote}</p>
          </div>
        </section>

        <section
          className="p-container p-section"
          id="process"
          aria-labelledby="process-title"
        >
          <div className="p-section-heading p-reveal">
            <div>
              <p className="p-eyebrow">{t.processEyebrow}</p>
              <h2 id="process-title">{t.processTitle}</h2>
            </div>
            <p>{t.processText}</p>
          </div>
          <ol className="p-process">
            {t.steps.map((step, i) => (
              <li className="p-reveal" key={step}>
                <span aria-hidden="true">0{i + 1}</span>
                <h3>{step}</h3>
                <p>{t.stepTexts[i]}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="p-about" id="about" aria-labelledby="about-title">
          <div className="p-container p-about-grid">
            <div className="p-reveal">
              <p className="p-eyebrow">{t.aboutEyebrow}</p>
              <h2 id="about-title">{t.aboutTitle}</h2>
              <p>{t.aboutText}</p>
              <p>{t.aboutLearning}</p>
              <p className="p-mini-note">{t.aboutAi}</p>
              {!samples && (
                <div className="p-actions">
                  <a
                    className="p-text-link"
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    className="p-text-link"
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
              )}
            </div>
            <aside className="p-skills p-reveal">
              <p className="p-eyebrow">{t.skillsLabel}</p>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <p className="p-mini-note">{t.skillsNote}</p>
            </aside>
          </div>
        </section>

        <section
          className="p-container p-section p-faq"
          id="questions"
          aria-labelledby="questions-title"
        >
          <div className="p-reveal">
            <p className="p-eyebrow">{t.faqEyebrow}</p>
            <h2 id="questions-title">{t.faqTitle}</h2>
          </div>
          <div>
            {t.faqs.map(([question, answer], i) => (
              <details className="p-reveal" key={`${locale}-${i}`}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="p-contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="p-container p-contact-grid">
            <div className="p-reveal">
              <p className="p-eyebrow">
                {samples ? t.samplesEyebrow : t.contactEyebrow}
              </p>
              <h2 id="contact-title">
                {samples ? t.samplesTitle : t.contactTitle}
              </h2>
              <p>{samples ? t.samplesText : t.contactText}</p>
              {samples ? (
                <PlatformAction />
              ) : (
                <div className="p-contact-links">
                  <a
                    href={contactHref(t.defaultMessage)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.whatsapp} ↗
                  </a>
                  <a href={`mailto:${site.email}`}>{t.email} ↗</a>
                  <a href={site.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn ↗
                  </a>
                </div>
              )}
            </div>
            {!samples && (
              <form
                className="p-form p-reveal"
                onSubmit={prepare}
                onChange={() => setPrepared(null)}
                key={locale}
              >
                <label htmlFor="p-name">{t.name}</label>
                <input
                  id="p-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                />
                <label htmlFor="p-message">{t.message}</label>
                <textarea
                  id="p-message"
                  name="message"
                  required
                  maxLength={2000}
                  rows={4}
                />
                <button className="p-button" type="submit">
                  {t.prepare} <span aria-hidden="true">↗</span>
                </button>
                <p className="p-form-note" aria-live="polite">
                  {prepared ? t.prepared : t.formNote}
                </p>
                {prepared && (
                  <a
                    className="p-prepared-link"
                    href={prepared}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.whatsapp} ↗
                  </a>
                )}
              </form>
            )}
            {samples && (
              <div className="p-sample-symbol" aria-hidden="true">
                s.
              </div>
            )}
          </div>
        </section>
      </main>
      <footer className="p-container p-footer">
        <p>
          {t.footer}
          <small>{t.footerNote}</small>
        </p>
        <div>
          {!samples && (
            <>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </>
          )}
          <LanguageSwitch />
        </div>
      </footer>
    </div>
  )
}
