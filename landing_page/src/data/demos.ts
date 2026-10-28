export type Demo = {
  slug: string
  name: string
  sector: string
  summary: string
  highlights: string[]
  shot: string
  accent: string
}

export const demos: Demo[] = [
  {
    slug: 'barberia',
    name: 'Corte Real',
    sector: 'Barbería',
    summary:
      'Reservas por WhatsApp, carta de servicios con precios y galería. Una imagen oscura y directa para un negocio con carácter.',
    highlights: ['Reserva en 1 clic', 'Precios visibles', 'Galería'],
    shot: '/shots/barberia.png',
    accent: '#c9a227',
  },
  {
    slug: 'dental',
    name: 'Dental Aurora',
    sector: 'Clínica dental',
    summary:
      'Agenda de horas, tratamientos explicados sin tecnicismos y señales de confianza. Diseño limpio, luminoso y cercano.',
    highlights: ['Agenda de horas', 'Tratamientos', 'Testimonios'],
    shot: '/shots/dental.png',
    accent: '#0e7490',
  },
  {
    slug: 'pasteleria',
    name: 'Miga & Miel',
    sector: 'Pastelería artesanal',
    summary:
      'Catálogo de tortas y encargos por WhatsApp, con fechas especiales y un tono cálido que se siente hecho a mano.',
    highlights: ['Catálogo', 'Encargos', 'Fechas especiales'],
    shot: '/shots/pasteleria.png',
    accent: '#b45309',
  },
]
