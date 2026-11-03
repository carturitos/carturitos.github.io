import { useReducer, useRef } from 'react'
import {
  canContinue,
  days,
  exampleTimes,
  formatPrice,
  initialSelection,
  professionals,
  selectionReducer,
  services,
  type ServiceId,
} from './model'

export function BookingDemo() {
  const [selection, dispatch] = useReducer(selectionReducer, initialSelection)
  const heading = useRef<HTMLHeadingElement>(null)
  const service = services.find((item) => item.id === selection.service)
  const professional = professionals.find(
    (item) => item.id === selection.professional,
  )
  const day = days.find((item) => item.id === selection.day)
  const next = () => {
    dispatch({ type: 'next' })
    requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }))
  }
  const back = () => {
    dispatch({ type: 'back' })
    requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }))
  }
  const selectService = (id: ServiceId) =>
    dispatch({ type: 'service', value: id })
  const stepTitles = [
    '¿Qué te vas a hacer?',
    '¿Con quién te atiendes?',
    'Elige un día y una hora.',
    'Tu selección, a la vista.',
  ]

  return (
    <section
      id="corte-seleccion"
      className="corte-section corte-booking"
      aria-labelledby="corte-booking-title"
    >
      <div className="corte-wrap">
        <div className="corte-section-head">
          <div>
            <p className="corte-eyebrow">01 / Recorrido de ejemplo</p>
            <h2 id="corte-booking-title">
              Menos mensajes.
              <br />
              Decisiones más claras.
            </h2>
          </div>
          <p>
            El problema de esta barbería ficticia: coordinar cada detalle en
            conversaciones separadas. Este recorrido reúne las decisiones antes
            de una posible solicitud.
          </p>
        </div>
        <p className="corte-demo-caption">
          Agenda simulada · Valores, perfiles y fechas ilustrativos. No hay
          disponibilidad real ni envío de solicitudes.
        </p>
        <div className="corte-booking-grid">
          <div className="corte-booking-work">
            <ol className="corte-progress" aria-label="Pasos de selección">
              {['Servicio', 'Profesional', 'Horario'].map((label, index) => (
                <li
                  key={label}
                  aria-current={
                    Math.min(selection.step, 2) === index ? 'step' : undefined
                  }
                >
                  <span aria-hidden="true">0{index + 1}</span>
                  {label}
                </li>
              ))}
            </ol>
            <h3 ref={heading} tabIndex={-1} className="corte-step-title">
              {stepTitles[selection.step]}
            </h3>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                next()
              }}
            >
              {selection.step === 0 && (
                <fieldset>
                  <legend>Compara duración y valor; elige un servicio.</legend>
                  <div className="corte-options">
                    {services.map((item) => (
                      <label className="corte-option" key={item.id}>
                        <input
                          type="radio"
                          name="corte-service"
                          value={item.id}
                          checked={selection.service === item.id}
                          onChange={() => selectService(item.id)}
                          required
                        />
                        <span>
                          <strong>{item.name}</strong>
                          <small>
                            {item.detail} · {item.duration} min
                          </small>
                        </span>
                        <span className="corte-option-price">
                          {formatPrice(item.price)}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              )}
              {selection.step === 1 && (
                <fieldset>
                  <legend>
                    Perfiles conceptuales. No corresponden a personas del banco
                    de imágenes.
                  </legend>
                  <div className="corte-options">
                    {professionals.map((item) => (
                      <label className="corte-option" key={item.id}>
                        <input
                          type="radio"
                          name="corte-professional"
                          value={item.id}
                          checked={selection.professional === item.id}
                          onChange={() =>
                            dispatch({ type: 'professional', value: item.id })
                          }
                          required
                        />
                        <span className="corte-person-mark" aria-hidden="true">
                          {item.initials}
                        </span>
                        <span>
                          <strong>{item.name}</strong>
                          <small>{item.specialty}</small>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              )}
              {selection.step === 2 && (
                <>
                  <fieldset>
                    <legend>
                      Fechas fijas de demostración · noviembre de 2026.
                    </legend>
                    <div className="corte-day-options">
                      {days.map((item) => (
                        <label className="corte-option" key={item.id}>
                          <input
                            type="radio"
                            name="corte-day"
                            value={item.id}
                            checked={selection.day === item.id}
                            onChange={() =>
                              dispatch({ type: 'day', value: item.id })
                            }
                            required
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  {selection.day && (
                    <fieldset className="corte-time-field">
                      <legend>
                        Horas de ejemplo. No son cupos consultados a una agenda.
                      </legend>
                      <div className="corte-time-options">
                        {exampleTimes(selection).map((time) => (
                          <label className="corte-option" key={time}>
                            <input
                              type="radio"
                              name="corte-time"
                              value={time}
                              checked={selection.time === time}
                              onChange={() =>
                                dispatch({ type: 'time', value: time })
                              }
                              required
                            />
                            <span>{time}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  )}
                </>
              )}
              {selection.step === 3 && (
                <div className="corte-result">
                  <p className="corte-result-label">
                    Selección de ejemplo · No enviada
                  </p>
                  <p>
                    <strong>
                      No se ha guardado ni confirmado una reserva.
                    </strong>
                  </p>
                  <dl>
                    <div>
                      <dt>Servicio</dt>
                      <dd>
                        {service?.name} · {service?.duration} min
                      </dd>
                    </div>
                    <div>
                      <dt>Profesional</dt>
                      <dd>{professional?.name}</dd>
                    </div>
                    <div>
                      <dt>Fecha de ejemplo</dt>
                      <dd>
                        {day?.label} de 2026 · {selection.time}
                      </dd>
                    </div>
                  </dl>
                  <p>
                    Una agenda real validaría el cupo en el servidor antes de
                    confirmar. Este ejemplo solo permite revisar tus decisiones.
                  </p>
                </div>
              )}
              <div className="corte-flow-actions">
                {selection.step > 0 && (
                  <button className="corte-back" type="button" onClick={back}>
                    ← {selection.step === 3 ? 'Editar horario' : 'Volver'}
                  </button>
                )}
                {selection.step < 3 ? (
                  <button
                    type="submit"
                    className="corte-button"
                    disabled={!canContinue(selection)}
                  >
                    {selection.step === 2
                      ? 'Ver resumen de ejemplo'
                      : 'Continuar'}{' '}
                    <span aria-hidden="true">→</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="corte-button"
                    onClick={() => {
                      dispatch({ type: 'reset' })
                      requestAnimationFrame(() =>
                        heading.current?.focus({ preventScroll: true }),
                      )
                    }}
                  >
                    Reiniciar ejemplo <span aria-hidden="true">↺</span>
                  </button>
                )}
              </div>
            </form>
            <p className="corte-step-status" role="status" aria-live="polite">
              {selection.step === 3
                ? 'Selección de ejemplo completa. No enviada.'
                : `Paso ${selection.step + 1} de 3 · ${['Elige un servicio.', 'Elige un profesional.', 'Elige un día y horario.'][selection.step]}`}
            </p>
          </div>
          <aside className="corte-summary" aria-label="Resumen de selección">
            <p className="corte-eyebrow">Tu selección / Ejemplo</p>
            <h3>Todo a la vista.</h3>
            <dl>
              <div>
                <dt>Servicio</dt>
                <dd>{service?.name ?? 'Sin seleccionar'}</dd>
              </div>
              <div>
                <dt>Duración</dt>
                <dd>{service ? `${service.duration} min` : '—'}</dd>
              </div>
              <div>
                <dt>Profesional</dt>
                <dd>{professional?.name ?? 'Sin seleccionar'}</dd>
              </div>
              <div>
                <dt>Día y hora</dt>
                <dd>
                  {day && selection.time
                    ? `${day.short} · ${selection.time}`
                    : 'Sin seleccionar'}
                </dd>
              </div>
            </dl>
            <div className="corte-summary-total">
              <span>Valor ilustrativo</span>
              <strong>{service ? formatPrice(service.price) : '—'}</strong>
            </div>
            <p>
              Sin pagos, datos personales ni envío de mensajes. La selección se
              borra al recargar.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
