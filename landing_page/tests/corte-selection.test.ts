import test from 'node:test'
import assert from 'node:assert/strict'
import {
  canContinue,
  exampleTimes,
  initialSelection,
  selectionReducer,
  type Selection,
  type SelectionAction,
} from '../src/pages/demos/corte/model.ts'
const complete = (): Selection => ({
  step: 2,
  service: 'corte',
  professional: 'nico',
  day: 'day-a',
  time: '10:00',
})
test('a summary cannot be reached without all required decisions', () => {
  let state = initialSelection
  assert.equal(selectionReducer(state, { type: 'next' }).step, 0)
  const actions: SelectionAction[] = [
    { type: 'service', value: 'corte' },
    { type: 'next' },
    { type: 'professional', value: 'nico' },
    { type: 'next' },
  ]
  for (const action of actions) state = selectionReducer(state, action)
  assert.equal(state.step, 2)
  assert.equal(canContinue(state), false)
  state = selectionReducer(state, { type: 'day', value: 'day-a' })
  assert.equal(
    selectionReducer(state, { type: 'time', value: '03:00' }).time,
    null,
  )
  state = selectionReducer(state, { type: 'time', value: '10:00' })
  assert.equal(selectionReducer(state, { type: 'next' }).step, 3)
})
test('changing a prerequisite invalidates stale downstream selections', () => {
  assert.equal(
    selectionReducer(complete(), { type: 'day', value: 'day-b' }).time,
    null,
  )
  const personChange = selectionReducer(complete(), {
    type: 'professional',
    value: 'alex',
  })
  assert.equal(personChange.time, null)
  assert.equal(personChange.day, null)
  const serviceChange = selectionReducer(complete(), {
    type: 'service',
    value: 'combo',
  })
  assert.equal(serviceChange.professional, null)
  assert.equal(serviceChange.time, null)
  assert.equal(serviceChange.step, 0)
})
test('back preserves decisions; reset removes them; times require prerequisites', () => {
  const summary = selectionReducer(complete(), { type: 'next' })
  assert.equal(selectionReducer(summary, { type: 'back' }).time, '10:00')
  assert.deepEqual(
    selectionReducer(summary, { type: 'reset' }),
    initialSelection,
  )
  assert.deepEqual(exampleTimes(initialSelection), [])
  assert.deepEqual(
    selectionReducer(initialSelection, { type: 'professional', value: 'alex' }),
    initialSelection,
  )
})
