# carturitos.github.io

Portafolio personal de **Samuel Gutiérrez**, desarrollador full stack. SPA en **React y TypeScript** con página principal bilingüe (ES/EN) y tres demos de interfaces web.

Sitio publicado: https://carturitos.github.io

## Stack

React 19 · TypeScript · Vite · React Router · CSS por componente · Node test runner · GitHub Actions · GitHub Pages

## Rutas

| Ruta | Comportamiento |
| --- | --- |
| `/` | Redirige a `/es` o `/en` según la elección guardada o el idioma del navegador. |
| `/es`, `/en` | Página principal: proyectos, experiencia, perfil y contacto. |
| `/:idioma/demos/:demo` | Demo (`barberia`, `dental`, `pasteleria`). La interfaz de las demos está en español. |
| `/demos/:demo` | Compatibilidad con las URLs originales. |

## Demos

| Demo | Qué muestra |
| --- | --- |
| **Corte Real** (barbería) | Landing de servicios, navegación por secciones, precios de ejemplo y diseño adaptable. |
| **Dental Aurora** (clínica) | Sitio informativo con selección de tratamiento y fecha de ejemplo. |
| **Miga & Miel** (pastelería) | Catálogo con fichas en `<dialog>` accesible, galería, menú móvil y formulario de consulta con vista previa. |

Los negocios y sus contenidos son ficticios. El sitio es estático: no tiene API, base de datos ni envío de formularios.

## Arquitectura

- `src/App.tsx` resuelve las rutas; las demos se cargan con `lazy` y `Suspense`.
- `src/presentation/` contiene la portada, los textos ES/EN y funciones puras de rutas e idioma (cubiertas por tests).
- Cada demo mantiene sus componentes y su CSS en `src/pages/demos/`.
- `usePageMeta` actualiza título, descripción, canonical y alternativas de idioma al navegar.
- `public/404.html` y un script en `index.html` permiten rutas limpias en GitHub Pages.

Más detalle en [docs/arquitectura.md](docs/arquitectura.md). Procedencia de imágenes y fuentes en [docs/assets-licencias.md](docs/assets-licencias.md).

## Estructura

```text
.github/workflows/      Validación de PR y despliegue
landing_page/
  public/               Fuentes, imágenes, capturas, 404.html
  src/
    App.tsx             Rutas y carga diferida
    presentation/       Portada, textos ES/EN y rutas
    pages/demos/        Interfaces de demostración
    components/         Componentes compartidos
    config/             Enlaces del sitio
    hooks/              Metadatos de página
    styles/             Fuentes y estilos base
  tests/                Tests de rutas e idioma
docs/                   Arquitectura y licencias
tools/serve.py          Servidor estático local con fallback SPA
```

## Desarrollo

Requisitos: Node.js 22.18 o posterior y npm.

```bash
cd landing_page
npm ci
npm run dev
```

Comprobaciones:

```bash
npm test
npm run typecheck
npm run build
```

Para servir el build: `python3 tools/serve.py 4173 landing_page/dist` y abrir `http://127.0.0.1:4173/es`.

## Despliegue

Cada push a `main` ejecuta el workflow de GitHub Actions: instala dependencias, ejecuta los tests, compila y publica `landing_page/dist` en GitHub Pages. Los pull requests ejecutan tests y build sin desplegar.

---

Autor: Samuel Gutiérrez. Código y documentación desarrollados con asistencia de IA y revisión técnica.
