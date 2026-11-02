# Criterios de evolución · Carturitos

Este documento define el alcance y la aceptación de las próximas propuestas. El estado y las entregas completadas se resumen en [PLAN.md](../PLAN.md). Cada rediseño y ampliación funcional requiere revisar su propuesta visual y alcance antes de implementar.

## 1 Miga & Miel como referente

Composición, identidad, catálogo y ruta se conservan como referencia. Los ajustes de foco del menú cerrado, cambio a escritorio con menú abierto, desplazamiento del diálogo y lenguaje de contacto se completaron en [PR #42](https://github.com/carturitos/carturitos.github.io/pull/42). La demo no procesa compras ni reservas. Los precios de pastelería son ilustrativos; no son tarifas de desarrollo.

## 2 Próximo trabajo la landing de Samuel

Objetivo: explicar quién desarrolla, qué puede entregar hoy y mostrar Miga & Miel como pieza principal.

Entregables previos a código: arquitectura de contenido, textos, wireframes móvil/escritorio y propuesta visual. Mostrar experiencia en soporte/producto y desarrollo junior sin atribuir auditoría de seguridad ni dominio de cada línea generada. Oferta actual: landing y catálogo de consulta. Señalar preparación comercial y condiciones por definir.

Aceptación: CTA veraz, demos identificadas como conceptos, Miga & Miel destacada, contacto real, accesibilidad, móvil y build. No incorporar un backend solo para la portada. No reutilizar literalmente la marca de la pastelería.

## 3 Corte Real barbería

Primero: landing propia con servicios, profesionales, horarios ilustrativos y solicitud por WhatsApp claramente identificada. Proponer diseño y flujo antes de desarrollar.

Exploración full stack posterior: agenda para una sucursal, servicios con duración, profesionales y disponibilidad; crear/cancelar una reserva; bloquear horarios y evitar reservas simultáneas del mismo cupo. Panel de administración con acceso autorizado y validaciones del servidor. No anunciarla como disponible antes de probarla.

Fuera del primer MVP: pagos, múltiples sucursales, recordatorios automáticos y cuentas de clientes. Definir zona horaria, cancelaciones, acceso y despliegue del backend; GitHub Pages solo aloja el frontend. Criterio clave: dos solicitudes concurrentes no pueden confirmar el mismo cupo.

## 4 Dental Aurora clínica

Primero: landing informativa y solicitud de hora, sin diagnóstico ni confirmación automática. Demostración con datos sintéticos y consentimiento claro para el canal de contacto.

Exploración posterior: agenda administrativa por profesional, solicitud/confirmación/cancelación y notificación de estado. No incluir ficha clínica, síntomas, diagnósticos, documentos de pacientes ni pagos en el MVP. Definir permisos, retención de datos, despliegue y pruebas antes de implementar. Considerar compartir lógica de agenda con barbería solo después de validar su primer caso real.

## 5 Calidad y gestión

- Build y typecheck por cambio; pruebas de teclado, diálogo, enlaces y anchos relevantes para las interacciones tocadas.
- Teléfono real y mediciones del sitio publicado permanecen pendientes hasta tener evidencia.
- No garantizar puntuaciones Lighthouse ni ventas futuras con resultados históricos.
- Las auditorías anteriores se conservan como historial, no como lista vigente de fallos.
- Issues duplicadas o fuera de alcance se cierran como no planificadas, no como trabajo realizado.
- GitHub Projects distingue ahora, siguiente y después; sin cuotas comerciales ni fechas de entrega inventadas.
