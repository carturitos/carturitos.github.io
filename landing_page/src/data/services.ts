export type Service = {
  id: string
  index: string
  title: string
  description: string
  price: string
  priceNote?: string
  delivery: string
  includes: string[]
  featured?: boolean
  icon: 'layout' | 'browser' | 'shield' | 'server' | 'grid' | 'wrench'
}

export const services: Service[] = [
  {
    id: 'landing', index: '01', title: 'Landing page para tu negocio',
    description: 'Una página para presentar tus servicios y facilitar consultas por WhatsApp o correo. Miga & Miel es el referente visual de esta propuesta.',
    price: 'Por definir', priceNote: 'Según alcance', delivery: 'Plazo a acordar',
    includes: ['Diseño adaptado a tu marca', 'Diseño adaptable a móviles', 'Presentación, contacto y metadatos básicos'],
    featured: true, icon: 'layout',
  },
  {
    id: 'catalogo', index: '02', title: 'Catálogo de consulta',
    description: 'Productos o servicios con imágenes, fichas y una consulta preparada. Sin pagos, inventario ni confirmación automática de pedidos.',
    price: 'Por definir', priceNote: 'Según alcance', delivery: 'Plazo a acordar',
    includes: ['Contenido definido contigo', 'Fichas de productos o servicios', 'Consultas por WhatsApp'],
    icon: 'browser',
  },
]
