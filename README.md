# carturitos.github.io

SPA en **React y TypeScript** con una página principal bilingüe y tres demos de interfaces web. Este repositorio contiene implementación, arquitectura, recursos y flujo de despliegue.

La nueva portada se encuentra en revisión en una rama de desarrollo. El sitio público continúa con la versión de `main` hasta integrar el cambio.

## Rutas

| Ruta | Comportamiento |
| --- | --- |
| `/` | Selecciona idioma según elección guardada o preferencia inicial del navegador. |
| `/es`, `/en` | Página principal en español o inglés, con enlaces profesionales y composición de mensajes externos. |
| `/muestras/es`, `/muestras/en` | Página principal sin contacto externo y con destino de plataforma configurable. |
| `/:idioma/demos/:demo` | Demo dentro del contexto personal. |
| `/muestras/:idioma/demos/:demo` | Demo que conserva el contexto de muestras. |
| `/demos/:demo` | Compatibilidad con las URLs originales en español. |

Idiomas admitidos: `es`, `en`. Demos: `barberia`, `dental`, `pasteleria`. Las interfaces de las demos continúan en español; el marco de navegación y sus descripciones informan de ello en inglés.

La aplicación no incluye API propia, base de datos, autenticación ni persistencia de reservas. El formulario prepara un enlace localmente; no envía ni almacena mensajes.

## Arquitectura

- React Router resuelve rutas en `src/App.tsx`; las demos se importan con `lazy` y `Suspense`.
- `src/presentation/` contiene la portada, los textos ES/EN, las funciones puras de rutas y el contexto de navegación derivado de la URL.
- Las demos comparten configuración de navegación y conservan sus componentes y CSS propios.
- `src/config/site.ts` centraliza enlaces. El destino de plataforma permanece vacío hasta disponer de una URL real válida; no tiene fallback a contacto directo.
- `usePageMeta` actualiza metadatos, idioma y alternativas al navegar. Es renderizado en cliente, no SSR.
- GitHub Actions comprueba contratos de rutas y compila antes de publicar archivos estáticos.

Más detalles: [arquitectura](docs/arquitectura.md) y [rutas, idioma y estados](docs/presentation.md).

## Estructura

```text
.github/workflows/             Validación y despliegue
landing_page/
  index.html                  Entrada HTML y restauración de rutas
  public/                     Imágenes, fuentes, sitemap y fallback 404
  src/
    App.tsx                   Rutas, carga diferida y desplazamiento
    presentation/             Portada, ES/EN, rutas y marco de demos
    components/               Avisos e iconos compartidos
    config/                   Enlaces y configuración
    hooks/                    Metadatos de página
    pages/demos/              Interfaces de demostración
    styles/                   Fuentes y estilos base
  tests/                      Contratos de idioma, contexto y destinos
docs/                         Arquitectura, diseño, recursos y criterios
PLAN.md                       Hoja de ruta técnica
tools/serve.py                Servidor estático local con fallback SPA
```

## Desarrollo

Requisitos: Node.js 22 actualizado (22.18 o posterior), npm y Python 3 para la previsualización estática.

```bash
cd landing_page
npm ci
npm run dev
```

Comprobaciones desde `landing_page/`:

```bash
npm test
npm run typecheck
npm run build
```

Los tests utilizan el ejecutor nativo de Node con soporte para TypeScript. `build` ejecuta TypeScript y Vite y genera `dist/`. No hay un comando de lint configurado.

Para servir el build desde la raíz:

```bash
python3 tools/serve.py 4173 landing_page/dist
```

Previsualización: `http://127.0.0.1:4173/es`.

## Documentación y estado

- [Arquitectura](docs/arquitectura.md) y [navegación bilingüe](docs/presentation.md)
- [Plan técnico](PLAN.md) y [criterios por proyecto](docs/plan-redisenio-landings.md)
- [Despliegue y fallback SPA](docs/github-pages.md)
- [Diseño de Miga & Miel](docs/diseno-miga-miel.md) y [licencias](docs/assets-licencias.md)

Las pruebas físicas, las mediciones de rendimiento publicado y la activación de un destino externo real requieren validación posterior. Los módulos de agenda siguen siendo trabajo futuro.

Autor: Samuel Gutiérrez. Código y documentación desarrollados con asistencia de IA y revisión técnica.
