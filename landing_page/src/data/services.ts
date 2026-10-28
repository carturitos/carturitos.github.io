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
    id: 'landing',
    index: '01',
    title: 'Landing page que convierte',
    description:
      'Una página, un objetivo: que quien te visite te escriba o te compre. Diseño propio, textos ordenados y botón de WhatsApp siempre a mano.',
    price: '$149.000',
    priceNote: 'CLP · referencial',
    delivery: '5 a 7 días',
    includes: [
      'Diseño a medida, sin plantillas',
      'Versión móvil impecable',
      'WhatsApp, formulario y SEO básico',
    ],
    featured: true,
    icon: 'layout',
  },
  {
    id: 'sitio',
    index: '02',
    title: 'Sitio web para tu negocio',
    description:
      'Hasta 5 secciones para mostrar servicios, precios, ubicación, equipo y todo lo que un cliente necesita saber antes de elegirte.',
    price: '$249.000',
    priceNote: 'CLP · referencial',
    delivery: '10 a 14 días',
    includes: [
      'Estructura y contenidos guiados',
      'Galería y catálogo simple',
      'Google Maps y redes sociales',
    ],
    icon: 'browser',
  },
  {
    id: 'login',
    index: '03',
    title: 'Login y roles seguros',
    description:
      'Registro, inicio de sesión, recuperación de contraseña y permisos por rol. Construido con NestJS, JWT y PostgreSQL siguiendo buenas prácticas de seguridad.',
    price: '$449.000',
    priceNote: 'CLP · referencial',
    delivery: '2 a 3 semanas',
    includes: [
      'Contraseñas con hash (bcrypt/argon2)',
      'JWT con expiración y refresh',
      'Panel de usuarios y roles',
    ],
    icon: 'shield',
  },
  {
    id: 'panel',
    index: '04',
    title: 'Panel de administración',
    description:
      'Deja de manejar todo en planillas. Un panel para crear, editar y buscar productos, clientes, reservas o inventario, con base de datos real.',
    price: '$399.000',
    priceNote: 'CLP · referencial',
    delivery: '2 a 3 semanas',
    includes: [
      'CRUD completo con validaciones',
      'Búsqueda, filtros y exportar',
      'Usuarios con permisos',
    ],
    icon: 'server',
  },
  {
    id: 'seguridad',
    index: '05',
    title: 'Revisión de seguridad web',
    description:
      'Reviso formularios, autenticación, permisos y configuración de tu sitio o app, y te entrego un informe claro con lo que hay que corregir y cómo.',
    price: '$119.000',
    priceNote: 'CLP · referencial',
    delivery: '3 a 5 días',
    includes: [
      'Informe con prioridades',
      'Pruebas de formularios y sesiones',
      'Recomendaciones concretas',
    ],
    icon: 'grid',
  },
  {
    id: 'mantencion',
    index: '06',
    title: 'Mantención mensual',
    description:
      'Tu web al día: respaldos, actualizaciones, pequeños cambios de contenido y monitoreo. Ideal si no quieres preocuparte de nada técnico.',
    price: '$39.000',
    priceNote: 'CLP · al mes · referencial',
    delivery: 'Mensual',
    includes: [
      'Cambios menores incluidos',
      'Respaldos y actualizaciones',
      'Soporte por WhatsApp',
    ],
    icon: 'wrench',
  },
]
