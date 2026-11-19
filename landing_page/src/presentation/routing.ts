export type Locale = 'es' | 'en'
export type DemoSlug = 'barberia' | 'dental' | 'pasteleria'
export const demoSlugs: DemoSlug[] = ['barberia', 'dental', 'pasteleria']

export function homePath(locale: Locale): string {
  return `/${locale}`
}

export function demoPath(locale: Locale, slug: DemoSlug): string {
  return `${homePath(locale)}/demos/${slug}`
}

export function routeDetails(pathname: string) {
  const parts = pathname.split('/').filter(Boolean)
  const locale: Locale = parts[0] === 'en' ? 'en' : 'es'
  const slug = parts[parts.length - 1]
  const demo = demoSlugs.includes(slug as DemoSlug) ? (slug as DemoSlug) : null
  return { locale, demo }
}

export function localizedPath(pathname: string, locale: Locale): string {
  const { demo } = routeDetails(pathname)
  return demo ? demoPath(locale, demo) : homePath(locale)
}

export function preferredLocale(
  saved: string | null,
  languages: readonly string[],
): Locale {
  if (saved === 'es' || saved === 'en') return saved
  return languages[0]?.toLowerCase().startsWith('en') ? 'en' : 'es'
}
