import { site } from '../config/site'
import { Reveal } from '../components/Reveal'
import { ArrowUpRight, Code, GitHub, Lock, Mail, Shield } from '../components/Icons'

const stack = [
  'React',
  'TypeScript',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Docker',
  'Git',
  'GitHub Actions',
]

export function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <span className="kicker">04 — Sobre mí</span>
          <h2>Programo, y también pienso en cómo te pueden atacar.</h2>
          <p>
            Soy <strong>Samuel Gutiérrez</strong>, analista programador y estudiante de Ingeniería
            en Informática con mención en Ciberseguridad. Construyo aplicaciones full stack: React
            y Angular en el frontend, Node.js, NestJS y PostgreSQL en el backend.
          </p>
          <p>
            Uso herramientas de IA para avanzar rápido, pero reviso y entiendo cada línea que
            entrego. Eso importa especialmente en autenticación: un login mal hecho no es un
            detalle estético, es una puerta abierta.
          </p>
          <p>
            Mi objetivo es simple: que tengas una web o un sistema que funcione, se vea bien y no te
            dé problemas. Y que puedas recomendarme sin miedo.
          </p>

          <ul className="security-list">
            <li>
              <Lock size={18} />
              <div>
                <strong>Autenticación con estándares</strong>
                <span>Contraseñas con hash, JWT con expiración y refresh tokens.</span>
              </div>
            </li>
            <li>
              <Shield size={18} />
              <div>
                <strong>Validación en ambos lados</strong>
                <span>No confío solo en el frontend: el backend valida todo de nuevo.</span>
              </div>
            </li>
            <li>
              <Code size={18} />
              <div>
                <strong>Código tuyo, sin cajas negras</strong>
                <span>Te entrego el repositorio y los accesos, documentados.</span>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <aside className="profile-card">
            <div className="profile-top">
              <span className="profile-avatar">{site.initials}</span>
              <div>
                <strong>{site.name}</strong>
                <span>{site.role}</span>
              </div>
            </div>

            <dl className="profile-facts">
              <div>
                <dt>Ubicación</dt>
                <dd>Santiago, Chile</dd>
              </div>
              <div>
                <dt>Estudios</dt>
                <dd>Analista Programador · Ing. Informática y Ciberseguridad</dd>
              </div>
              <div>
                <dt>Enfoque</dt>
                <dd>Web, autenticación y paneles</dd>
              </div>
              <div>
                <dt>Disponibilidad</dt>
                <dd>Proyectos freelance</dd>
              </div>
            </dl>

            <div className="profile-stack">
              {stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="profile-links">
              <a href={site.github} target="_blank" rel="noreferrer">
                <GitHub size={15} />
                GitHub
                <ArrowUpRight size={13} />
              </a>
              <a href={`mailto:${site.email}`}>
                <Mail size={15} />
                Correo
              </a>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
