import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  demoPath,
  homePath,
  localizedPath,
  platformDestination,
  preferredLocale,
  routeDetails,
} from '../src/presentation/routing.ts'
test('demo URLs retain language and channel on direct access and language switching', () => {
  for (const channel of ['personal', 'samples'] as const)
    for (const locale of ['es', 'en'] as const)
      for (const slug of ['barberia', 'dental', 'pasteleria'] as const) {
        const path = demoPath(locale, channel, slug)
        assert.deepEqual(routeDetails(path), { locale, channel, demo: slug })
        assert.equal(localizedPath(path, 'en'), demoPath('en', channel, slug))
        assert.equal(
          homePath(locale, channel),
          channel === 'samples' ? `/muestras/${locale}` : `/${locale}`,
        )
      }
})
test('legacy paths remain Spanish and personal', () => {
  assert.deepEqual(routeDetails('/demos/pasteleria'), {
    locale: 'es',
    channel: 'personal',
    demo: 'pasteleria',
  })
})
test('saved language wins over browser preference', () => {
  assert.equal(preferredLocale('en', ['es-CL']), 'en')
  assert.equal(preferredLocale('es', ['en-US']), 'es')
  assert.equal(preferredLocale(null, ['en-GB']), 'en')
  assert.equal(preferredLocale('invalid', ['es']), 'es')
  assert.equal(preferredLocale(null, []), 'es')
})
test('platform destination never enables a missing, unsafe or unrelated contact URL', () => {
  for (const value of [
    '',
    'not-a-url',
    'https://fiverr.com',
    'http://fiverr.com/user/gig',
    'https://wa.me/123',
    'https://fiverr.com.evil.test/user',
    'javascript:alert(1)',
  ])
    assert.equal(platformDestination(value), null)
  assert.equal(
    platformDestination('https://www.fiverr.com/example/real-gig'),
    'https://www.fiverr.com/example/real-gig',
  )
})
