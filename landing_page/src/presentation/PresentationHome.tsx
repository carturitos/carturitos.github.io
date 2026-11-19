import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { copy } from './copy'
import { demoSlugs } from './routing'
import { demoSourceUrl, saveLocale, usePresentation } from './usePresentation'
import './presentation.css'

const sections = ['projects', 'experience', 'about', 'contact']
const screenshots = [
  '/shots/barberia.png',
  '/shots/dental.png',
  '/shots/miga-miel.jpg',
]
const skills = [
  'Angular',
  'TypeScript',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'NestJS',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'Docker',
]
const backendRepo = 'https://github.com/carturitos/login-project'

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

export function PresentationHome() {
  const route = usePresentation()
  const { locale } = route
  const t = copy[locale]
  const root = useRef<HTMLDivElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [mobile, setMobile] = useState(
    () => window.matchMedia('(max-width: 900px)').matches,
  )

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
    saveLocale(locale)
  }, [locale])

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
              <a
                className="p-text-link"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {t.trajectory} ↗
              </a>
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
            <a
              className="p-text-link"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              {t.source} ↗
            </a>
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
                  <a href={demoSourceUrl(slug)} target="_blank" rel="noreferrer">
                    {t.code}
                  </a>
                </div>
                {locale === 'en' && (
                  <small className="p-demo-language">{t.spanishDemo}</small>
                )}
              </article>
            ))}
          </div>
          <article className="p-backend p-reveal">
            <div>
              <p className="p-eyebrow">{t.backendLabel}</p>
              <h3>{t.backendName}</h3>
            </div>
            <div>
              <p>{t.backendText}</p>
              <p className="p-backend-stack">{t.backendStack}</p>
              <div className="p-project-links">
                <a href={backendRepo} target="_blank" rel="noreferrer">
                  {t.code} ↗
                </a>
                <a href={site.github} target="_blank" rel="noreferrer">
                  {t.moreProjects}
                </a>
              </div>
            </div>
          </article>
        </section>

        <section
          className="p-container p-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="p-section-heading p-reveal">
            <div>
              <p className="p-eyebrow">{t.experienceEyebrow}</p>
              <h2 id="experience-title">{t.experienceTitle}</h2>
            </div>
            <p>{t.experienceText}</p>
          </div>
          <ol className="p-process p-timeline">
            {t.experience.map((item) => (
              <li className="p-reveal" key={`${item.period}-${item.title}`}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p className="p-timeline-place">{item.place}</p>
                <p>{item.text}</p>
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
            </div>
            <aside className="p-skills p-reveal">
              <p className="p-eyebrow">{t.skillsLabel}</p>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section
          className="p-contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="p-container p-contact-grid">
            <div className="p-reveal">
              <p className="p-eyebrow">{t.contactEyebrow}</p>
              <h2 id="contact-title">{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <div className="p-contact-links">
                <a href={`mailto:${site.email}`}>{t.email} ↗</a>
                <a href={site.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
                <a href={site.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
            </div>
            <div className="p-sample-symbol" aria-hidden="true">
              s.
            </div>
          </div>
        </section>
      </main>
      <footer className="p-container p-footer">
        <p>
          {t.footer}
          <small>{t.footerNote}</small>
        </p>
        <div>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <LanguageSwitch />
        </div>
      </footer>
    </div>
  )
}
