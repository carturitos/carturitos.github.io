import { useEffect, useState } from 'react'
import { contactHref, contactLabel, site } from '../config/site'
import { ArrowUpRight, Close, Menu, WhatsApp } from './Icons'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#demos', label: 'Demos' },
  { href: '#proceso', label: 'Cómo trabajo' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#inicio" onClick={() => setOpen(false)}>
          <span className="brand-mark">{site.initials}</span>
          <span className="brand-text">
            <strong>{site.name}</strong>
            <small>{site.role}</small>
          </span>
        </a>

        <nav className={`site-nav${open ? ' is-open' : ''}`} aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary nav-cta"
            href={contactHref()}
            target={site.whatsapp ? '_blank' : undefined}
            rel={site.whatsapp ? 'noreferrer' : undefined}
            onClick={() => setOpen(false)}
          >
            {site.whatsapp ? <WhatsApp size={18} /> : null}
            {site.whatsapp ? 'WhatsApp' : 'Escríbeme'}
            <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Close size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <span className="visually-hidden">{contactLabel()}</span>
    </header>
  )
}
