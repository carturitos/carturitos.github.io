import { useEffect } from 'react'
import { site } from '../config/site'

type PageMetaOptions = {
  title: string
  description: string
  /** Ruta absoluta del sitio, empezando con "/". */
  path: string
  /** Imagen social relativa al dominio, empezando con "/". */
  image?: string
  noindex?: boolean
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

/**
 * Actualiza los metadatos del documento al cambiar de ruta.
 *
 * Se hace con la API del DOM y no con react-helmet para no agregar una
 * dependencia: el HTML base ya trae las etiquetas de la home y acá solo se
 * actualizan, evitando duplicados.
 */
export function usePageMeta({
  title,
  description,
  path,
  image,
  noindex = false,
}: PageMetaOptions): void {
  useEffect(() => {
    const url = `${site.url}${path}`
    document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)

    if (image) {
      const absolute = image.startsWith('http') ? image : `${site.url}${image}`
      upsertMeta('property', 'og:image', absolute)
      upsertMeta('name', 'twitter:image', absolute)
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (noindex) {
      upsertMeta('name', 'robots', 'noindex, follow')
    } else if (robots) {
      robots.remove()
    }
  }, [title, description, path, image, noindex])
}
