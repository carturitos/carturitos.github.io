# Arquitectura y flujo de datos

SPA estática con React, TypeScript, Vite y React Router. El navegador ejecuta la interfaz; GitHub Pages sirve el bundle. No hay API propia, base de datos ni autenticación.

## Módulos

| Módulo | Responsabilidad |
| --- | --- |
| `src/App.tsx` | Resolver rutas explícitas, cargar demos con lazy/Suspense y gestionar el desplazamiento. |
| `src/presentation/` | Portada, contenido localizado, funciones de rutas, configuración de acciones derivada del contexto y marco de navegación de demos. |
| `src/pages/demos/` | Interfaces y estilos de cada demo; Miga & Miel agrupa componentes y datos en `miga/`. |
| `src/components/` | Avisos y recursos de interfaz compartidos. |
| `src/config/site.ts` | Configuración de enlaces y construcción de mensajes externos del contexto personal. |
| `src/hooks/usePageMeta.ts` | Metadatos, idioma y alternativas por ruta en el cliente. |
| `src/styles/` | Fuentes locales y estilos base. |

## Flujo

1. El fallback de GitHub Pages restaura la URL si el acceso es directo a una ruta interna.
2. App selecciona portada o demo. Solo la entrada `/` consulta idioma guardado/preferencia de navegador.
3. La URL determina idioma y contexto; componentes compartidos leen contenido localizado y configuración.
4. Las interacciones actualizan estado local. El formulario personal prepara un enlace; no transmite a una API.
5. Las demos conservan su identidad y cargan por ruta. En muestras se elimina el contacto externo y se conserva el regreso al mismo contexto.

Detalles e invariantes: [portada y navegación](presentation.md).

## Miga & Miel

Seleccionar un producto abre un dialog nativo. Preparar la consulta actualiza la selección, cierra el diálogo y desplaza a la sección correspondiente. El menú usa estado local y breakpoint; el contenido se libera al pasar a escritorio. Los efectos limpian listeners y bloqueo de scroll.

El destino de la acción depende del contexto. Sin URL de plataforma, la acción en muestras queda deshabilitada. En contexto personal se conserva la consulta externa; el sitio no puede confirmar su envío.

## Recursos y despliegue

Cada demo mantiene CSS propio. Fotografías y fuentes locales de Miga & Miel tienen [procedencia documentada](assets-licencias.md). Los objetivos de diseño no sustituyen mediciones con versión y entorno.

El workflow usa Node.js 22, npm ci, pruebas de contratos y build. Publica `landing_page/dist` con GitHub Pages. Un workflow de PR valida tests y compilación sin desplegar. Ver [despliegue](github-pages.md).

## Evolución

Las agendas siguen pendientes. Antes de implementar se deben definir entidades, contratos HTTP, estados, validación del servidor, autorización, persistencia y despliegue independiente. Evitar reservas concurrentes exige comprobaciones en persistencia; desactivar un botón en la interfaz no basta. No se ha elegido backend ni arquitectura compartida para las dos agendas.
