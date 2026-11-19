import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { localizedPath, routeDetails } from '../presentation/routing'
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

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
): void {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )
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
  const { pathname } = useLocation()
  const { locale, channel } = routeDetails(pathname)
  const effectivePath = noindex ? path : pathname
  useEffect(() => {
    const url = `${site.url}${effectivePath}`
    document.documentElement.lang = locale === 'en' ? 'en' : 'es-CL'
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', '#193e33')
    upsertMeta('property', 'og:locale', locale === 'en' ? 'en_US' : 'es_CL')
    document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)

    {
      const socialImage = image ?? '/og.png'
      const absolute = socialImage.startsWith('http')
        ? socialImage
        : `${site.url}${socialImage}`
      upsertMeta('property', 'og:image', absolute)
      upsertMeta('name', 'twitter:image', absolute)
    }

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    document.head
      .querySelectorAll('link[data-presentation-alternate]')
      .forEach((el) => el.remove())
    if (!noindex) {
      for (const language of ['es', 'en'] as const) {
        const link = document.createElement('link')
        link.rel = 'alternate'
        link.hreflang = language
        link.href = `${site.url}${localizedPath(pathname, language)}`
        link.dataset.presentationAlternate = 'true'
        document.head.appendChild(link)
      }
    }
    const robots = document.head.querySelector<HTMLMetaElement>(
      'meta[name="robots"]',
    )
    if (noindex || channel === 'samples') {
      upsertMeta('name', 'robots', 'noindex, follow')
    } else if (robots) {
      robots.remove()
    }
  }, [
    title,
    description,
    effectivePath,
    pathname,
    image,
    noindex,
    locale,
    channel,
  ])
}
