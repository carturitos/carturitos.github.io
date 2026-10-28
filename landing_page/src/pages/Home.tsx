import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { Demos } from '../sections/Demos'
import { Process } from '../sections/Process'
import { About } from '../sections/About'
import { Faq } from '../sections/Faq'
import { Contact } from '../sections/Contact'

const tech = [
  'React',
  'TypeScript',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Docker',
  'GitHub Actions',
  'Ciberseguridad',
]

export function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />

        <div className="tech-strip">
          <div className="container">
            <ul className="tech-list" aria-label="Tecnologías con las que trabajo">
              {tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <Services />
        <Demos />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
