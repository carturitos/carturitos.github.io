# Portafolio freelance — Samuel Gutiérrez

Sitio de portafolio para ofrecer servicios de desarrollo web y sistemas a pymes y
emprendedores. Construido con React, Vite y TypeScript, publicado en GitHub Pages con
GitHub Actions.

**Sitio en vivo:** https://carturitos.github.io

## Qué incluye

- **Página principal** (`/`): propuesta de valor, servicios con precios de referencia,
  proceso de trabajo, demos, presentación personal, preguntas frecuentes y contacto.
- **Tres demos funcionales**: barbería (`/demos/barberia`), clínica dental
  (`/demos/dental`) y pastelería (`/demos/pasteleria`). Cada una con su propia identidad
  visual y llamados a la acción.
- **Formulario de contacto** que prepara un mensaje de WhatsApp o correo (sin backend,
  sin guardar datos).
- **SEO básico**: metadatos, Open Graph, `robots.txt`, `sitemap.xml` y `404.html` con
  fallback para rutas de React Router.

## Estructura

```
.
├── .github/workflows/deploy.yml   # build + deploy a GitHub Pages
├── landing_page/                  # aplicación Vite + React + TS
│   ├── public/                    # favicon, og.png, robots, sitemap, 404, capturas
│   └── src/
│       ├── config/site.ts         # nombre, correo, WhatsApp, GitHub
│       ├── data/                  # servicios, demos, proceso y FAQ
│       ├── sections/              # bloques de la página principal
│       ├── pages/                 # Home, demos y 404
│       ├── components/
│       └── styles/global.css      # sistema de diseño
├── docs/                          # guías de trabajo freelance
├── PLAN.md                        # plan de acción de 4 semanas
└── tools/serve.py                 # preview local de dist con fallback SPA
```

## Desarrollo local

```bash
cd landing_page
npm install
npm run dev
```

El sitio queda en `http://localhost:5173`.

Para probar el build de producción:

```bash
cd landing_page
npm run build
cd ..
python tools/serve.py 4173 landing_page/dist
```

> Importante: el build usa esbuild, que necesita lanzar un proceso hijo. Dentro del
> sandbox de DSH eso falla con `EPERM`; en una terminal normal funciona sin problemas.
> El workflow de GitHub Actions compila en la nube, sin esa restricción.

## Configurar el contacto

Edita `landing_page/src/config/site.ts`:

- `whatsapp`: número en formato internacional, sin `+` ni espacios (ej. `56912345678`).
  Si queda vacío, todos los botones abren el correo.
- `linkedin`: URL del perfil (opcional).
- `email`: correo de contacto.

Después haz commit y push: GitHub Actions vuelve a publicar automáticamente.

## Publicación

Cada push a `main` ejecuta el workflow `Deploy portfolio to GitHub Pages`, que compila
`landing_page/` y publica `dist/` en https://carturitos.github.io.

## Plan de trabajo

El plan de acción vive en [`PLAN.md`](PLAN.md) y se gestiona en el tablero
[Lanzamiento freelance](https://github.com/users/carturitos/projects/2) de GitHub
Projects, con 31 issues etiquetados por área, prioridad y semana.

Guías de apoyo:

- [Perfil de Workana](docs/workana.md)
- [Propuestas y seguimiento](docs/propuestas.md)
- [Precios y condiciones](docs/precios.md)
- [Primer cliente: entrega y reseña](docs/primer-cliente.md)
- [Cómo editar y publicar el sitio](docs/github-pages.md)
