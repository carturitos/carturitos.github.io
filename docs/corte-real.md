# Corte Real: interfaz y selección de ejemplo

Implementación frontend de la identidad aprobada: marfil, grafito, cobalto y titulares condensados. Sustituye la demo anterior sin cambiar las rutas ni los contextos de navegación.

## Módulos

- `src/pages/demos/Barberia.tsx`: exporta el componente usado por las rutas existentes.
- `src/pages/demos/corte/CorteReal.tsx`: composición de página, navegación, fotografías y acceso a consulta del desarrollador.
- `BookingDemo.tsx`: controles y resumen del recorrido.
- `model.ts`: datos ilustrativos, estado, transiciones, validación de avance y horarios de ejemplo.
- `corte-real.css`: estilos y tipografía local aislados bajo `.corte`.
- `tests/corte-selection.test.ts`: contratos del recorrido e invalidación de decisiones dependientes.

## Tres caminos separados

1. **Selección de ejemplo:** servicio → profesional → día/hora → resumen. Todo se mantiene en memoria. No hay captura de datos personales, petición HTTP, enlace de mensajería ni persistencia. El resultado dice “No enviada”.
2. **Consulta del desarrollo:** bloque independiente dirigido al desarrollador. El enlace usa un texto fijo y nunca incorpora decisiones de la selección. El contexto personal utiliza su canal de contacto; el contexto de muestras conserva el destino de plataforma o el estado no disponible cuando falta URL.
3. **Agenda real:** fuera de esta implementación. Requiere disponibilidad y persistencia del servidor, autorización, zona horaria, cancelaciones, manejo de conflictos y pruebas de concurrencia.

No se ofrece “enviar una reserva” como sustituto de un backend inexistente.

## Reglas de estado

- No avanzar sin los datos requeridos del paso.
- Cambiar servicio elimina profesional, día y hora y vuelve al primer paso.
- Cambiar profesional elimina día y hora.
- Cambiar día elimina la hora anterior.
- Rechazar una hora que no pertenezca al conjunto de ejemplo de la selección.
- Volver conserva las decisiones; reiniciar o recargar las elimina.

Las fechas de noviembre de 2026 son fijas y explícitamente ilustrativas. No representan disponibilidad presente ni se actualizan fingiendo cupos reales.

## Navegación y accesibilidad

Se mantienen las rutas originales y sus variantes ES/EN y personal/muestras. La interfaz de la demo está en español, como indica el marco de navegación inglés. El selector de idioma conserva el contexto.

Los controles usan fieldsets, legends y radios nativos; el estado de avance se anuncia mediante un status. Los cambios de paso llevan el foco al encabezado. El menú móvil es un disclosure; Escape lo cierra y devuelve foco. La animación es progresiva y reduced motion la desactiva.

## Recursos

Fotografías locales de Pexels y tipografía Barlow Condensed bajo OFL; procedencia en [registro de recursos](assets-licencias.md). Las imágenes no se presentan como retratos de los profesionales sintéticos ni como trabajos realizados por una barbería existente. No hay reseñas, dirección ni estadísticas de clientes inventadas.

## Validación

Tests de estado, TypeScript y build. Revisión de navegador del recorrido completo, edición de fecha e invalidación del horario, navegación móvil y ausencia de contacto externo en muestras. Pendientes: revisión visual del propietario, dispositivo físico y mediciones del sitio después de un eventual despliegue.
