export type Locale = 'es' | 'en'
export type Channel = 'personal' | 'samples'
export type DemoSlug = 'barberia' | 'dental' | 'pasteleria'
export const demoSlugs: DemoSlug[] = ['barberia', 'dental', 'pasteleria']

export function homePath(locale: Locale, channel: Channel): string {
  return `${channel === 'samples' ? '/muestras' : ''}/${locale}`
}

export function demoPath(
  locale: Locale,
  channel: Channel,
  slug: DemoSlug,
): string {
  return `${homePath(locale, channel)}/demos/${slug}`
}

export function routeDetails(pathname: string) {
  const parts = pathname.split('/').filter(Boolean)
  const channel: Channel = parts[0] === 'muestras' ? 'samples' : 'personal'
  const offset = channel === 'samples' ? 1 : 0
  const locale: Locale = parts[offset] === 'en' ? 'en' : 'es'
  const slug = parts[parts.length - 1]
  const demo = demoSlugs.includes(slug as DemoSlug) ? (slug as DemoSlug) : null
  return { locale, channel, demo }
}

export function localizedPath(pathname: string, locale: Locale): string {
  const { channel, demo } = routeDetails(pathname)
  return demo ? demoPath(locale, channel, demo) : homePath(locale, channel)
}

// A missing or malformed platform URL never falls back to direct contact.
export function platformDestination(value: string): string | null {
  try {
    const url = new URL(value)
    if (
      url.protocol !== 'https:' ||
      !['www.fiverr.com', 'fiverr.com'].includes(url.hostname)
    )
      return null
    if (!url.pathname.split('/').filter(Boolean).length) return null
    return url.href
  } catch {
    return null
  }
}

export function preferredLocale(
  saved: string | null,
  languages: readonly string[],
): Locale {
  if (saved === 'es' || saved === 'en') return saved
  return languages[0]?.toLowerCase().startsWith('en') ? 'en' : 'es'
}
