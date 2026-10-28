/**
 * Datos de contacto y marca del sitio.
 *
 * Para publicar el botón de WhatsApp, completa `whatsapp` con el número en
 * formato internacional sin + ni espacios (ej: "56912345678").
 * Mientras esté vacío, todos los llamados a la acción abren el correo.
 */
export const site = {
  name: 'Samuel Gutiérrez',
  initials: 'SG',
  role: 'Desarrollador Full Stack',
  location: 'Santiago, Chile · trabajo remoto',
  email: 'sam.gutierrez.oliva@gmail.com',
  whatsapp: '56951048157',
  github: 'https://github.com/carturitos',
  linkedin: '',
  url: 'https://carturitos.github.io',
  availability: 'Disponible para nuevos proyectos',
  responseTime: 'Respondo en menos de 24 horas',
} as const

export type ContactChannel = 'whatsapp' | 'email'

export const hasWhatsapp = site.whatsapp.trim().length > 0

const DEFAULT_MESSAGE =
  'Hola Samuel, vi tu portafolio y quiero cotizar una página web para mi negocio.'

export function contactHref(message: string = DEFAULT_MESSAGE): string {
  if (hasWhatsapp) {
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
  }
  return `mailto:${site.email}?subject=${encodeURIComponent(
    'Cotización de página web',
  )}&body=${encodeURIComponent(message)}`
}

export function contactLabel(fallback = 'Escríbeme'): string {
  return hasWhatsapp ? 'Hablemos por WhatsApp' : fallback
}
