# Arquitectura y flujo de datos

## Alcance implementado

SPA estática con React, TypeScript, Vite y React Router. El navegador ejecuta la interfaz; GitHub Pages sirve el bundle y los recursos. No hay servidor de aplicación, API propia, base de datos ni autenticación.

## Módulos

| Módulo | Responsabilidad |
| --- | --- |
| `src/App.tsx` | Declarar rutas, cargar las demos con `lazy`/`Suspense` y gestionar desplazamiento al cambiar de ruta. |
| `src/pages/Home.tsx` | Componer la página principal a partir de secciones. |
| `src/sections/` | Implementar bloques de interfaz de la página principal. |
| `src/pages/demos/` | Mantener las páginas de demostración y sus estilos. Miga & Miel agrupa implementación, datos y CSS en `miga/`. |
| `src/components/` | Compartir componentes de navegación, iconos, avisos y revelado de contenido. |
| `src/data/` | Declarar contenido y tipos usados por las secciones. |
| `src/config/site.ts` | Centralizar configuración y construir enlaces de WhatsApp o correo. |
| `src/hooks/` | Encapsular comportamiento reutilizable, incluidos metadatos por página. |
| `src/styles/` | Definir estilos generales y utilidades. |

## Flujo de renderizado

1. `index.html` carga la entrada de React.
2. React Router resuelve la URL en `App.tsx`.
3. La página principal se compone con secciones; cada demo carga su módulo bajo demanda.
4. Los componentes leen configuración y datos tipados y renderizan la interfaz.
5. Las interacciones actualizan estado local; no se sincronizan con una API.

## Interacciones de Miga & Miel

- Seleccionar un producto abre un `<dialog>` nativo con su ficha.
- Preparar una consulta actualiza la selección local, cierra el diálogo y lleva a la sección correspondiente.
- El enlace externo se construye con el contexto seleccionado; la aplicación no puede confirmar que el mensaje fue enviado.
- El menú utiliza estado local y detección del breakpoint. En móvil cerrado queda inerte; al pasar a escritorio se cierra y se libera el contenido.
- Los efectos que registran listeners o bloquean desplazamiento tienen limpieza al cambiar de estado o desmontarse.

## Estilos y recursos

Las demos conservan CSS propio para evitar acoplar sus composiciones. Miga & Miel utiliza fotografías y fuentes locales, variantes de imagen y carga diferida de recursos secundarios. La procedencia está en [recursos y licencias](assets-licencias.md).

Los documentos de diseño describen decisiones y objetivos; no sustituyen mediciones del bundle o del navegador. Los resultados deben indicar la versión y el entorno comprobados.

## Build y despliegue

El workflow utiliza Node.js 22, instala con `npm ci`, ejecuta `npm run build` y publica `landing_page/dist` mediante las acciones de GitHub Pages. El build incluye comprobación de TypeScript.

Para navegación directa a rutas internas, `public/404.html` redirige a la entrada y el script de `index.html` restaura la URL. `tools/serve.py` permite previsualizar el build local con fallback SPA. Detalles en [despliegue](github-pages.md).

## Límites y evolución

Los módulos de agenda son trabajo pendiente. Antes de implementarlos deben definirse entidades, contratos HTTP, estados de reserva, validación del servidor, autorización, persistencia y despliegue independiente del frontend estático. La exclusión de reservas concurrentes del mismo cupo debe comprobarse en la capa de persistencia; desactivar un botón en el navegador no resuelve la concurrencia.

No se ha elegido una arquitectura backend ni se asume que las dos agendas deban compartir módulos. Los criterios están en [plan de implementación](plan-redisenio-landings.md).

## Requisitos de la próxima portada

Planificados, no implementados: rutas ES/EN y contextos personal/muestras externas (#45 y #46). Compartir secciones y demos; separar contenido localizado y configuración de acciones. La URL debe identificar idioma y contexto de forma reproducible. No usar referrer para ocultar enlaces.

El destino de plataforma será opcional y tendrá un estado explícito no disponible hasta configurarse. La ausencia de URL no debe crear una acción alternativa de contacto. El contexto personal mantiene enlaces profesionales y composición de mensajes externos. Consultar los [criterios de implementación](plan-redisenio-landings.md).
