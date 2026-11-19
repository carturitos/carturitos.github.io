import { useLocation } from 'react-router-dom'
import {
  demoPath,
  homePath,
  localizedPath,
  routeDetails,
  type Locale,
  type DemoSlug,
} from './routing'

export const repoUrl = 'https://github.com/carturitos/carturitos.github.io'

export function demoSourceUrl(slug: DemoSlug): string {
  return `${repoUrl}/tree/main/landing_page/src/pages/demos${slug === 'pasteleria' ? '/miga' : ''}`
}

export function usePresentation() {
  const location = useLocation()
  const details = routeDetails(location.pathname)
  return {
    ...details,
    homeHref: homePath(details.locale),
    demoHref: (slug: DemoSlug) => demoPath(details.locale, slug),
    languageHref: (locale: Locale) =>
      localizedPath(location.pathname, locale) + location.hash,
  }
}

export function saveLocale(locale: Locale) {
  try {
    localStorage.setItem('presentation-language', locale)
  } catch {
    /* Preference is optional. */
  }
}
