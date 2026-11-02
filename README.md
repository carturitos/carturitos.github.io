# Carturitos · Desarrollo web para negocios

Proyecto de Samuel Gutiérrez para presentar y desarrollar una oferta freelance de **landing pages y catálogos de consulta** para pequeños negocios. Reúne el sitio de presentación, las demostraciones y la documentación que guía su evolución.

El objetivo es construir una propuesta clara para trabajar con clientes a través de Fiverr, Workana y contacto directo, con un alcance definido y entregas documentadas.

**[Explorar el sitio](https://carturitos.github.io/)** · **[Ver Miga & Miel](https://carturitos.github.io/demos/pasteleria)** · **[Consultar un proyecto](https://carturitos.github.io/#contacto)**

## Propuesta de servicios

- **Landing pages:** presentación de un negocio, sus servicios y formas de contacto, adaptada a móviles.
- **Catálogos de consulta:** productos o servicios con imágenes y fichas, con mensajes preparados para WhatsApp o correo.

La propuesta comercial está en desarrollo. El alcance, valor, plazo, ajustes y soporte se definen por escrito para cada proyecto. Los sistemas de reservas y gestión forman parte de la evolución prevista y todavía no se ofrecen como servicios disponibles.

## Demostraciones

Los negocios y contenidos son conceptuales; no se presentan como trabajos realizados para clientes.

| Proyecto | Qué muestra hoy | Evolución prevista |
| --- | --- | --- |
| **[Miga & Miel](https://carturitos.github.io/demos/pasteleria)** | Referencia principal de diseño: catálogo explorable, fichas de producto y consulta de ejemplo. | Conservar su identidad como muestra del tipo de web que se busca ofrecer. |
| **[Corte Real](https://carturitos.github.io/demos/barberia)** | Demo de barbería con servicios y contacto. | Revisar la landing y definir después un MVP de reservas con disponibilidad real. |
| **[Dental Aurora](https://carturitos.github.io/demos/dental)** | Demo informativa de clínica dental. | Revisar la presentación y el flujo de solicitud de horas; evaluar una agenda administrativa posteriormente. |

Las demos actuales no procesan compras ni confirman reservas. El formulario de contacto prepara un mensaje para enviarlo desde WhatsApp o correo; no almacena los datos en un backend.

## Avance del proyecto

- **Completado:** publicación en GitHub Pages, diseño de Miga & Miel y ajustes de navegación, contacto y alcance comercial ([PR #37](https://github.com/carturitos/carturitos.github.io/pull/37), [PR #42](https://github.com/carturitos/carturitos.github.io/pull/42)).
- **Siguiente:** definir contenido, estructura y propuesta visual de la landing principal de Samuel, con Miga & Miel como pieza destacada ([#39](https://github.com/carturitos/carturitos.github.io/issues/39)).
- **Después:** desarrollar las propuestas de [Corte Real (#40)](https://github.com/carturitos/carturitos.github.io/issues/40) y [Dental Aurora (#41)](https://github.com/carturitos/carturitos.github.io/issues/41), con alcance funcional revisado antes de implementar sistemas.
- **Antes de la apertura comercial:** completar validaciones de contacto, dispositivo real y calidad publicada, y definir condiciones de contratación y facturación.

La [hoja de ruta](PLAN.md) resume las etapas. Los [criterios de cada propuesta](docs/plan-redisenio-landings.md) definen sus límites y aceptación. El [tablero de trabajo](https://github.com/users/carturitos/projects/2) organiza las tareas por etapa (requiere acceso al proyecto).

## Implementación

React, TypeScript y Vite para el sitio; GitHub Actions para compilación y publicación en GitHub Pages. Incluye metadatos, Open Graph, `robots.txt`, `sitemap.xml` y fallback de rutas mediante `404.html`.

Desarrollado con apoyo de IA en implementación y documentación, con revisión del código y de las decisiones técnicas por Samuel.

### Estructura

```text
.github/workflows/deploy.yml   Compilación y despliegue
landing_page/
  public/                     Imágenes, metadatos y archivos públicos
  src/
    config/site.ts            Contacto y datos del sitio
    data/                     Servicios, demos, proceso y preguntas
    sections/                 Secciones de la página principal
    pages/                    Inicio, demos y página 404
    components/               Componentes de interfaz
    styles/                   Estilos generales
docs/                         Criterios y documentación de trabajo
PLAN.md                       Hoja de ruta vigente
tools/serve.py                Previsualización del build con fallback SPA
```

### Desarrollo local

Requiere Node.js y npm (el despliegue utiliza la versión indicada en el workflow).

```bash
cd landing_page
npm ci
npm run dev
```

Vite muestra la URL local en la terminal. Para comprobar y previsualizar la versión de producción:

```bash
npm run typecheck
npm run build
cd ..
python3 tools/serve.py 4173 landing_page/dist
```

La previsualización queda en `http://127.0.0.1:4173`.

### Configuración y publicación

Los datos de contacto se configuran en `landing_page/src/config/site.ts`. WhatsApp utiliza formato internacional sin `+` ni espacios; si está vacío, el contacto utiliza correo. LinkedIn es opcional.

Cada push a `main` ejecuta el workflow de publicación. Consulta la [guía de GitHub Pages](docs/github-pages.md) para los detalles de despliegue.
