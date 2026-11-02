# carturitos.github.io

Aplicación web en **React y TypeScript** con una página principal y tres demos independientes. Este repositorio contiene el código fuente, los recursos visuales, las decisiones de interfaz y el flujo de despliegue en GitHub Pages.

**[Ver aplicación](https://carturitos.github.io/)** · **[Arquitectura](docs/arquitectura.md)** · **[Hoja de ruta](PLAN.md)**

## Proyectos y rutas

| Ruta | Proyecto | Implementación actual |
| --- | --- | --- |
| `/` | Página principal | Composición por secciones, navegación y formulario que genera un enlace externo con un mensaje. |
| `/demos/pasteleria` | Miga & Miel | Catálogo tipado, detalle con `<dialog>`, selección de producto, acordeón y menú responsive. |
| `/demos/barberia` | Corte Real | Demo de interfaz de barbería; pendiente de revisión visual y definición de una agenda. |
| `/demos/dental` | Dental Aurora | Demo de interfaz de clínica dental; pendiente de revisar el flujo de solicitud de horas. |
| `*` | Página no encontrada | Vista 404 de React Router. |

Actualmente es una aplicación frontend: no incluye API propia, base de datos, autenticación ni persistencia de reservas. Los formularios preparan mensajes para WhatsApp o correo; no confirman su envío.

## Arquitectura

- **React Router** define las rutas en `src/App.tsx`. Las demos se importan mediante `lazy` y se renderizan dentro de `Suspense`.
- **Componentes y secciones** separan la interfaz compartida de las páginas de cada demo.
- **Datos tipados** en `src/data/` y configuración en `src/config/site.ts` separan contenido y renderizado.
- **Estado local de React** controla menú y selecciones de interfaz; no existe un store global.
- **CSS por demo** mantiene estilos e identidad visual propios; `global.css` contiene estilos generales.
- **Recursos locales** incluyen fotografías y fuentes de Miga & Miel; su procedencia se registra en la documentación.
- **GitHub Actions** compila y despliega los archivos estáticos. Un fallback restaura las rutas de la SPA al acceder directamente desde GitHub Pages.

Consulta [arquitectura y flujo de datos](docs/arquitectura.md) para los límites entre módulos y el detalle de las interacciones.

## Estructura

```text
.github/workflows/deploy.yml   Build y despliegue
landing_page/
  index.html                  Entrada HTML y restauración de rutas
  public/                     Imágenes, fuentes, metadatos y fallback 404
  src/
    App.tsx                   Rutas, Suspense y desplazamiento entre páginas
    components/               Componentes compartidos
    config/                   Configuración y helpers de enlaces
    data/                     Contenido y modelos tipados
    hooks/                    Hooks de metadatos y comportamiento
    pages/                    Página principal, demos y vista 404
    sections/                 Secciones de la página principal
    styles/                   Estilos generales
docs/                         Arquitectura, diseño, recursos y criterios técnicos
PLAN.md                       Estado y próximos cambios
tools/serve.py                Servidor local con fallback SPA
```

## Desarrollo local

Requisitos: **Node.js 22** (versión utilizada en CI), npm y Python 3 si se utiliza el servidor de previsualización.

```bash
cd landing_page
npm ci
npm run dev
```

Vite muestra la URL local en la terminal.

### Comprobaciones y build

Desde `landing_page/`:

```bash
npm run typecheck
npm run build
```

`typecheck` ejecuta TypeScript sin emitir archivos; `build` ejecuta TypeScript y genera el bundle con Vite en `dist/`. No hay una suite de tests automatizados ni un comando de lint configurados actualmente.

Para probar las rutas del build con fallback SPA, desde la raíz del repositorio:

```bash
python3 tools/serve.py 4173 landing_page/dist
```

URL: `http://127.0.0.1:4173`.

## Estado técnico

El rediseño de Miga & Miel y la carga diferida de demos se integraron en [PR #37](https://github.com/carturitos/carturitos.github.io/pull/37). Los ajustes del menú responsive, desplazamiento del diálogo y estados del formulario se completaron en [PR #42](https://github.com/carturitos/carturitos.github.io/pull/42).

Los próximos cambios son la revisión de la página principal y la definición de los módulos de agenda. El backend y la persistencia son trabajo futuro, no parte de la arquitectura implementada. Las comprobaciones en dispositivo físico y las mediciones de rendimiento publicado siguen pendientes.

## Documentación

- [Arquitectura y flujo de datos](docs/arquitectura.md)
- [Hoja de ruta](PLAN.md) y [criterios de implementación](docs/plan-redisenio-landings.md)
- [Configuración, rutas y despliegue](docs/github-pages.md)
- [Diseño de Miga & Miel](docs/diseno-miga-miel.md)
- [Recursos y licencias](docs/assets-licencias.md)

Autor: Samuel Gutiérrez. Implementación y documentación desarrolladas con asistencia de IA y revisión del código.
