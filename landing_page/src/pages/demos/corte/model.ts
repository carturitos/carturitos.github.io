export const services = [
  {
    id: 'corte',
    name: 'Corte clásico',
    duration: 45,
    price: 12000,
    detail: 'Tijera y máquina, forma y terminación.',
  },
  {
    id: 'barba',
    name: 'Barba',
    duration: 30,
    price: 9000,
    detail: 'Perfilado y definición de la barba.',
  },
  {
    id: 'combo',
    name: 'Corte + barba',
    duration: 75,
    price: 18000,
    detail: 'Dos servicios en una misma visita.',
  },
] as const
export const professionals = [
  {
    id: 'nico',
    name: 'Nico',
    initials: 'N',
    specialty: 'Tijera y cortes clásicos',
    detail:
      'Un perfil de ejemplo para quien busca forma, proporción y una terminación sobria.',
  },
  {
    id: 'alex',
    name: 'Alex',
    initials: 'A',
    specialty: 'Degradados y perfilado',
    detail:
      'Un perfil de ejemplo centrado en transiciones, contornos y líneas definidas.',
  },
] as const
export const days = [
  {
    id: 'day-a',
    label: 'Martes 10 noviembre',
    short: 'Mar 10 nov',
    iso: '2026-11-10',
  },
  {
    id: 'day-b',
    label: 'Miércoles 11 noviembre',
    short: 'Mié 11 nov',
    iso: '2026-11-11',
  },
] as const
export type ServiceId = (typeof services)[number]['id']
export type ProfessionalId = (typeof professionals)[number]['id']
export type DayId = (typeof days)[number]['id']
export type Selection = {
  step: 0 | 1 | 2 | 3
  service: ServiceId | null
  professional: ProfessionalId | null
  day: DayId | null
  time: string | null
}
export const initialSelection: Selection = {
  step: 0,
  service: null,
  professional: null,
  day: null,
  time: null,
}
export type SelectionAction =
  | { type: 'service'; value: ServiceId }
  | { type: 'professional'; value: ProfessionalId }
  | { type: 'day'; value: DayId }
  | { type: 'time'; value: string }
  | { type: 'next' | 'back' | 'reset' }

export function exampleTimes(selection: Selection): readonly string[] {
  if (!selection.service || !selection.professional || !selection.day) return []
  if (selection.day === 'day-b')
    return selection.service === 'combo'
      ? ['11:00', '15:00']
      : ['11:00', '15:00', '16:30']
  return selection.professional === 'nico'
    ? ['10:00', '11:30', '16:00']
    : ['10:30', '14:00', '17:00']
}
export function canContinue(selection: Selection): boolean {
  if (selection.step === 0) return selection.service !== null
  if (selection.step === 1)
    return selection.service !== null && selection.professional !== null
  return (
    selection.service !== null &&
    selection.professional !== null &&
    selection.day !== null &&
    selection.time !== null &&
    exampleTimes(selection).includes(selection.time)
  )
}
export function selectionReducer(
  state: Selection,
  action: SelectionAction,
): Selection {
  switch (action.type) {
    case 'service':
      return action.value === state.service
        ? state
        : { ...initialSelection, service: action.value }
    case 'professional':
      return !state.service || action.value === state.professional
        ? state
        : { ...state, professional: action.value, day: null, time: null }
    case 'day':
      return !state.professional || action.value === state.day
        ? state
        : { ...state, day: action.value, time: null }
    case 'time':
      return exampleTimes(state).includes(action.value)
        ? { ...state, time: action.value }
        : state
    case 'next':
      return state.step < 3 && canContinue(state)
        ? { ...state, step: (state.step + 1) as Selection['step'] }
        : state
    case 'back':
      return {
        ...state,
        step: Math.max(0, state.step - 1) as Selection['step'],
      }
    case 'reset':
      return { ...initialSelection }
  }
}
export function formatPrice(value: number) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value)
}
