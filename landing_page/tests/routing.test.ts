import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  demoPath,
  homePath,
  localizedPath,
  preferredLocale,
  routeDetails,
} from '../src/presentation/routing.ts'
test('demo URLs retain language on direct access and language switching', () => {
  for (const locale of ['es', 'en'] as const)
    for (const slug of ['barberia', 'dental', 'pasteleria'] as const) {
      const path = demoPath(locale, slug)
      assert.deepEqual(routeDetails(path), { locale, demo: slug })
      assert.equal(localizedPath(path, 'en'), demoPath('en', slug))
      assert.equal(homePath(locale), `/${locale}`)
    }
})
test('legacy paths remain Spanish', () => {
  assert.deepEqual(routeDetails('/demos/pasteleria'), {
    locale: 'es',
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
