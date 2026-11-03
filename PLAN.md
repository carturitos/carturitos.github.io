# Hoja de ruta técnica

## Completado

- Aplicación React y TypeScript publicada mediante GitHub Actions y GitHub Pages.
- Rutas independientes con carga diferida de las demos y fallback de navegación directa.
- Interfaz de Miga & Miel: catálogo, detalle de producto, navegación móvil y recursos locales ([PR #37](https://github.com/carturitos/carturitos.github.io/pull/37)).
- Correcciones de foco, cambio de breakpoint, desplazamiento del diálogo y estados de formulario ([PR #42](https://github.com/carturitos/carturitos.github.io/pull/42), [#38](https://github.com/carturitos/carturitos.github.io/issues/38)).

## Próximas etapas

La portada bilingüe y los contextos de navegación se implementaron en PR #48. La validación en dispositivo físico, las mediciones publicadas y la activación de un destino externo real mantienen su seguimiento por separado.

| Orden | Proyecto | Entregable técnico | Tarea |
| --- | --- | --- | --- |
| 1 | Página principal | Tema claro, varias secciones, tres demos con igual peso, componentes y movimiento accesible. Revisar proporciones antes de implementar. | [#39](https://github.com/carturitos/carturitos.github.io/issues/39) |
| 2 | Corte Real | Revisar la interfaz y definir el modelo de disponibilidad y reservas: entidades, API, persistencia, permisos y concurrencia. | [#40](https://github.com/carturitos/carturitos.github.io/issues/40) |
| 3 | Dental Aurora | Revisar el formulario de solicitud de horas y definir estados y permisos de una agenda administrativa con datos sintéticos. | [#41](https://github.com/carturitos/carturitos.github.io/issues/41) |

Subtareas de la página principal:

- [Internacionalización ES/EN (#45)](https://github.com/carturitos/carturitos.github.io/issues/45): rutas, selector, traducciones y metadatos.
- [Contextos de navegación (#46)](https://github.com/carturitos/carturitos.github.io/issues/46): enlaces y estados distintos para la página personal y el recorrido de muestras externas, incluyendo las demos. El destino de plataforma permanece no disponible hasta tener una URL real configurada.

La aplicación actual es frontend. La tecnología y el despliegue del backend se decidirán al definir la primera agenda. No extraer módulos compartidos antes de validar una necesidad concreta.

## Validación pendiente

- Enlaces externos y composición del mensaje: [#2](https://github.com/carturitos/carturitos.github.io/issues/2).
- Rendimiento, accesibilidad y rutas del sitio desplegado: [#6](https://github.com/carturitos/carturitos.github.io/issues/6).
- Navegación y diálogos en dispositivo físico: [#15](https://github.com/carturitos/carturitos.github.io/issues/15).
- Recursos visuales de Corte Real y Dental Aurora: [#14](https://github.com/carturitos/carturitos.github.io/issues/14).

## Gestión técnica

[GitHub Project](https://github.com/users/carturitos/projects/2) (requiere acceso). El campo Etapa distingue Ahora, Siguiente, Después, Hecho y Retirado. Las tareas fuera del alcance técnico se retiran del tablero activo.

Cada tarea debe describir el comportamiento esperado, los límites y cómo se comprobará. Las correcciones de código se verifican con TypeScript, build y pruebas de las interacciones afectadas. El cierre requiere evidencia; las tareas sustituidas se cierran como no planificadas.

Consulta los [criterios por proyecto](docs/plan-redisenio-landings.md).

## Corte Real: implementación en revisión

El frontend de identidad, fotografías y selección de ejemplo se prepara en una rama de revisión (#40). Mantiene el contexto de navegación y separa la selección local del contacto al desarrollador. La agenda con servidor sigue fuera del alcance de esta entrega. Detalle: [Corte Real](docs/corte-real.md).
