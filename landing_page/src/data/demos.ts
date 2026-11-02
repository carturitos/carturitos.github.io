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
      'Demo de barbería con servicios y contacto. Pendiente de evolucionar hacia una propuesta de landing; la agenda real se definirá en otra etapa.',
    highlights: ['Demo en evolución', 'Servicios', 'Contacto'],
    shot: '/shots/barberia.png',
    accent: '#c9a227',
  },
  {
    slug: 'dental',
    name: 'Dental Aurora',
    sector: 'Clínica dental',
    summary:
      'Demo informativa de clínica, pendiente de redefinir su flujo de solicitud de horas. No constituye una agenda clínica operativa.',
    highlights: ['Demo en evolución', 'Información', 'Solicitud de contacto'],
    shot: '/shots/dental.png',
    accent: '#0e7490',
  },
  {
    slug: 'pasteleria',
    name: 'Miga & Miel',
    sector: 'Pastelería artesanal',
    summary:
      'Referente visual de la propuesta: catálogo explorable y consulta de ejemplo a Carturitos. No recibe pedidos de pastelería.',
    highlights: ['Referente visual', 'Catálogo', 'Consulta de ejemplo'],
    shot: '/shots/pasteleria.png',
    accent: '#b45309',
  },
]
