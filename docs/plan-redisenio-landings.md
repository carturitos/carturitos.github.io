# Criterios de implementación

El [plan técnico](../PLAN.md) indica el estado y el orden de trabajo. Este documento define alcance y criterios de aceptación por proyecto.

## Miga & Miel

Mantener identidad, catálogo y ruta `/demos/pasteleria`. El menú cerrado fuera del foco, cierre al pasar a escritorio, diálogo desplazable y estados veraces del formulario se corrigieron en [PR #42](https://github.com/carturitos/carturitos.github.io/pull/42).

Comprobar teclado, devolución de foco, bloqueo y liberación del scroll, selección de producto y composición de enlaces externos. No existe persistencia de pedidos o reservas.

## Página principal · #39

Definir arquitectura de información, wireframes móvil/escritorio y composición de componentes antes de modificar la interfaz. Integrar Miga & Miel como proyecto destacado y enlaces a las otras rutas.

Aceptación: navegación semántica, jerarquía de encabezados, foco visible, estados de formulario explícitos, ausencia de desbordamiento horizontal y metadatos coherentes. Mantener la implementación estática; no añadir backend para esta etapa.

## Corte Real · #40

Primero revisar la interfaz responsive, los componentes de profesionales y servicios y el flujo de selección de horario. Distinguir visualmente una solicitud de una reserva persistida.

Después definir un MVP de agenda para una sucursal:

- Entidades: profesional, servicio con duración, disponibilidad, bloqueo y reserva.
- Contratos HTTP para consultar disponibilidad y crear/cancelar reservas.
- Validaciones del servidor, autorización administrativa y persistencia.
- Política de zona horaria y transiciones de estado.
- Prueba de concurrencia: dos solicitudes para el mismo cupo no deben confirmar dos reservas.

Fuera del primer MVP: pagos, múltiples sucursales, recordatorios automáticos y cuentas de usuarios finales. Definir el despliegue del backend por separado; GitHub Pages aloja los archivos estáticos.

## Dental Aurora · #41

Primero revisar la interfaz informativa y el formulario de solicitud de hora. La confirmación debe depender de una operación real, con estados explícitos y tratamiento de errores.

Para una agenda administrativa posterior, definir profesionales, solicitudes, confirmaciones, cancelaciones, permisos y retención de datos. Usar datos sintéticos durante desarrollo y demostración. Quedan fuera las fichas clínicas, diagnósticos, síntomas, documentos de pacientes y pagos.

Evaluar reutilización de módulos solo después de validar el primer caso de agenda de Corte Real.

## Calidad

- TypeScript y build correctos para cambios de código.
- Pruebas de teclado, formularios, diálogos y breakpoints afectados.
- Comprobación de acceso directo a rutas y de recursos en el despliegue.
- Registrar mediciones de rendimiento y accesibilidad con versión y entorno; no reutilizar resultados históricos como evidencia actual.
- Mantener pendientes las pruebas físicas y mediciones hasta tener evidencia.
