# Arquitectura

SPA estática con React, TypeScript, Vite y React Router. El navegador ejecuta la interfaz y GitHub Pages sirve el bundle. No hay API, base de datos ni autenticación.

## Módulos

| Módulo | Responsabilidad |
| --- | --- |
| `src/App.tsx` | Rutas explícitas, carga diferida de demos con `lazy`/`Suspense` y gestión del desplazamiento. |
| `src/presentation/routing.ts` | Funciones puras: construir rutas, leer idioma y demo desde la URL, idioma preferido. |
| `src/presentation/copy.ts` | Contenido de la portada en español e inglés. |
| `src/presentation/PresentationHome.tsx` | Portada: proyectos, experiencia, perfil y contacto. |
| `src/presentation/DemoShell.tsx` | Aviso de demo, regreso a los proyectos y selector de idioma. |
| `src/pages/demos/` | Interfaces y estilos de cada demo; Miga & Miel agrupa componentes y datos en `miga/`. |
| `src/hooks/usePageMeta.ts` | Metadatos, idioma y alternativas por ruta en el cliente. |
| `src/config/site.ts` | Enlaces de contacto y URL del sitio. |

## Flujo

1. Si el acceso es directo a una ruta interna, `404.html` redirige y `index.html` restaura la URL.
2. `App` selecciona portada o demo. Solo la entrada `/` consulta el idioma guardado o el del navegador.
3. La URL determina el idioma; los componentes leen el contenido localizado.
4. Las interacciones solo actualizan estado local.

## Miga & Miel

Seleccionar un producto abre un `<dialog>` nativo con foco gestionado. "Consultar" guarda la selección, cierra el diálogo y desplaza al formulario. El formulario arma una vista previa de la consulta en memoria; no se envía ni se almacena. El menú móvil usa estado local y se cierra al pasar a escritorio; los efectos limpian listeners y el bloqueo de scroll.

## Despliegue

El workflow usa Node.js 22, `npm ci`, tests y build, y publica `landing_page/dist` con GitHub Pages. Un workflow de pull request valida tests y compilación sin desplegar.
