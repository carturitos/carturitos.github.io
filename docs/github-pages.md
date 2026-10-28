# Cómo editar y publicar el sitio

## Dónde está cada cosa

| Quiero cambiar… | Archivo |
|-----------------|---------|
| Nombre, correo, WhatsApp, LinkedIn | `landing_page/src/config/site.ts` |
| Servicios, precios y plazos | `landing_page/src/data/services.ts` |
| Demos del portafolio | `landing_page/src/data/demos.ts` |
| Proceso y preguntas frecuentes | `landing_page/src/data/content.ts` |
| Textos de las secciones | `landing_page/src/sections/*.tsx` |
| Colores y estilos | `landing_page/src/styles/global.css` |
| Contenido de cada demo | `landing_page/src/pages/demos/*.tsx` y su `.css` |

## Configurar el WhatsApp

En `landing_page/src/config/site.ts`:

```ts
whatsapp: '56912345678', // sin +, sin espacios
```

Si queda vacío (`''`), todos los botones abren el correo. Con el número puesto, los
botones abren WhatsApp con el mensaje ya escrito.

## Probar en tu computador

```bash
cd landing_page
npm install      # solo la primera vez
npm run dev
```

Abre `http://localhost:5173`.

## Compilar y revisar el build

```bash
cd landing_page
npm run build
cd ..
python tools/serve.py 4173 landing_page/dist
```

Abre `http://127.0.0.1:4173`.

> Si el build falla con `spawn EPERM` dentro del sandbox de DSH, es una restricción del
> sandbox (esbuild necesita un proceso hijo). En una terminal normal funciona. El
> deploy en GitHub Actions no tiene ese problema.

## Publicar

```bash
git add -A
git commit -m "Actualiza textos del portafolio"
git push
```

Cada push a `main` ejecuta el workflow **Deploy portfolio to GitHub Pages**:

1. Instala dependencias con `npm ci`.
2. Compila `landing_page/` con `npm run build`.
3. Publica `landing_page/dist` en https://carturitos.github.io.

Puedes seguir el deploy en la pestaña **Actions** del repositorio.

## Cómo funcionan las rutas

El sitio usa React Router con rutas limpias (`/demos/barberia`). GitHub Pages no conoce
esas rutas, así que `public/404.html` redirige a `index.html` y un script en
`index.html` restaura la ruta. Si agregas una página nueva, no necesitas tocar nada de
eso: solo crea la ruta en `src/App.tsx`.

## Agregar una demo nueva

1. Crea `src/pages/demos/NuevaDemo.tsx` y su `nueva-demo.css`.
2. Agrega la ruta en `src/App.tsx`.
3. Agrega la entrada en `src/data/demos.ts` (nombre, rubro, resumen, captura).
4. Genera la captura, guárdala en `public/shots/` y actualiza `shot`.
5. Revisa en móvil, haz commit y push.

## Si el sitio muestra el README en vez del portafolio

Significa que GitHub Pages quedó publicando la rama en vez del artifact de Actions.
Revisa **Settings → Pages → Build and deployment → Source: GitHub Actions**. Si está en
"Deploy from a branch", cámbialo a **GitHub Actions** y vuelve a ejecutar el workflow.
