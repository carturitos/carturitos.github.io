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
          <h2>Desarrollo web con atención al producto y sus usuarios.</h2>
          <p>
            Soy <strong>Samuel Gutiérrez</strong>, analista programador y estudiante de Ingeniería
            en Informática y Ciberseguridad. Tengo experiencia colaborando en desarrollo con Angular,
            TypeScript y Node.js; actualmente refuerzo backend con NestJS y PostgreSQL y practico React.
          </p>
          <p>
            Uso IA para consultar alternativas y apoyar la implementación, revisando el código
            y desarrollando mayor autonomía. Mi oferta inicial se centra en páginas de presentación
            y catálogos de consulta.
          </p>
          <p>
            Miga &amp; Miel muestra la dirección visual que quiero ofrecer. Las funcionalidades de
            gestión y reservas se explorarán en etapas posteriores antes de ofrecerlas como servicio.
          </p>

          <ul className="security-list">
            <li>
              <Lock size={18} />
              <div>
                <strong>Aprendizaje de backend</strong>
                <span>Proyecto de autenticación con NestJS y PostgreSQL en desarrollo.</span>
              </div>
            </li>
            <li>
              <Shield size={18} />
              <div>
                <strong>Oferta en preparación</strong>
                <span>Alcance, pruebas, plazo y soporte acordados para cada entrega.</span>
              </div>
            </li>
            <li>
              <Code size={18} />
              <div>
                <strong>Entrega y mantenimiento</strong>
                <span>Documentación de configuración, contenidos y accesos según lo acordado.</span>
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
                <dd>Landing pages y catálogos de consulta</dd>
              </div>
              <div>
                <dt>Disponibilidad</dt>
                <dd>Propuesta freelance en preparación</dd>
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
