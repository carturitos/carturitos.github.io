# Portada: rutas, idioma y estados

## Módulos

- `presentation/routing.ts`: funciones puras de URL, idioma preferido y validación del destino externo.
- `presentation/usePresentation.ts`: adapta el pathname de React Router a idioma, contexto, rutas de demos y acciones.
- `presentation/copy.ts`: contenido de portada y marco de navegación en ES/EN.
- `presentation/PresentationHome.tsx`: secciones de portada, selector, navegación y preparación local del mensaje.
- `presentation/DemoShell.tsx`: aviso y regreso a los proyectos conservando idioma y contexto.
- `presentation/presentation.css`: tema claro, estilos responsive y movimiento progresivo.

La portada anterior y sus módulos sustituidos se conservan en el historial de Git, no como una segunda implementación activa.

## Invariantes

1. Una URL explícita prevalece sobre el idioma guardado o el navegador.
2. `/` utiliza la elección guardada; sin ella, la primera preferencia del navegador.
3. El selector conserva demo, contexto y fragmento, y guarda la elección cuando storage está disponible.
4. Una demo del recorrido de muestras regresa a ese mismo recorrido. Recargar no depende del referrer.
5. Los componentes no renderizan WhatsApp, correo ni enlaces profesionales en muestras. Los CTA de las demos muestran estado deshabilitado cuando falta el destino externo.
6. Un destino vacío, inválido o ajeno a los hosts permitidos nunca se convierte en un enlace de contacto alternativo.
7. Las demos conservan contenido en español dentro de un contenedor `lang="es"`. El marco inglés explica el límite; no se anuncia una traducción de esas interfaces.

## Formulario personal

El submit prepara una URL de WhatsApp en memoria. Aparece un enlace para que el visitante lo abra voluntariamente y envíe el mensaje desde la aplicación externa. No se abre una ventana automáticamente, no se confirma envío y no se persisten datos. Editar el formulario invalida el enlace anterior; cambiar idioma limpia el estado.

## Metadatos

`usePageMeta` actualiza título, descripción, canonical, idioma y enlaces alternativos. Las rutas de muestras usan `noindex, follow` y quedan fuera del sitemap. Estos metadatos se actualizan en cliente; no se incorpora SSR ni se garantiza que un crawler ejecute JavaScript.

## Movimiento y accesibilidad

El contenido es visible antes de observarlo. IntersectionObserver añade una animación de entrada sin ocultar información si falla. CSS respeta `prefers-reduced-motion`. La navegación móvil es un disclosure en el flujo de la página; Escape cierra el menú y devuelve foco. Al pasar a escritorio se libera el estado móvil.

## Validación de la implementación

- Tests nativos de Node para la matriz de rutas, compatibilidad, preferencia de idioma y destinos ausentes/inválidos/configurados.
- TypeScript y build Vite.
- Navegador: 16 combinaciones de página/demo, idioma y contexto, con comprobación de enlaces y desbordamiento.
- Comprobación móvil, cambio de idioma/historial y preparación local de mensaje sin enviarlo.

Pendientes de validación adicional: dispositivo físico y mediciones del build publicado. Cuando exista un destino real, comprobarlo y revalidar los requisitos de la plataforma antes de habilitarlo. No se considera una aprobación externa.
