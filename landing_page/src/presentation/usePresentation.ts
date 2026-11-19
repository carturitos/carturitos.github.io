import { useLocation } from 'react-router-dom'
import { contactHref, site } from '../config/site'
import {
  demoPath,
  homePath,
  localizedPath,
  platformDestination,
  routeDetails,
  type Locale,
  type DemoSlug,
} from './routing'

export function usePresentation() {
  const location = useLocation()
  const details = routeDetails(location.pathname)
  const samples = details.channel === 'samples'
  const platformHref = platformDestination(site.fiverrGig)
  return {
    ...details,
    samples,
    platformHref,
    homeHref: homePath(details.locale, details.channel),
    demoHref: (slug: DemoSlug) =>
      demoPath(details.locale, details.channel, slug),
    languageHref: (locale: Locale) =>
      localizedPath(location.pathname, locale) + location.hash,
    contactTarget: (message?: string) =>
      samples ? (platformHref ?? '#demo-context') : contactHref(message),
    actionLabel: samples
      ? details.locale === 'en'
        ? 'Back to Fiverr'
        : 'Volver a Fiverr'
      : details.locale === 'en'
        ? 'Write on WhatsApp'
        : 'Escribir por WhatsApp',
  }
}

export function saveLocale(locale: Locale) {
  try {
    localStorage.setItem('presentation-language', locale)
  } catch {
    /* Preference is optional. */
  }
}
