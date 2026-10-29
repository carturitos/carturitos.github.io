# Mockup — Miga & Miel (propuesta visual, dirección B)

Mockup estático para revisión del propietario. **No forma parte del build** del sitio: vive fuera de `landing_page/` y Vite no lo procesa.

## Ver la propuesta

1. Abre `index.html` en el navegador (doble clic), o
2. Revisa las capturas ya renderizadas: `preview-desktop.png` (1440 px) y `preview-mobile.png` (390 px).
3. Para simular un móvil real: DevTools → modo dispositivo → 390 × 844.

El mockup es interactivo en lo básico: menú hamburguesa, acordeón del FAQ y botón del formulario (solo feedback visual).

## Contenido

| Archivo | Qué es |
| --- | --- |
| `index.html` | Página completa con las 10 secciones |
| `styles.css` | Tokens, componentes y responsive de la propuesta |
| `assets/fonts/*.woff2` | Bricolage Grotesque e Instrument Sans (variables, subset latino) |
| `assets/fonts/OFL-*.txt` | Licencias SIL Open Font License 1.1 |

## Licencias

- **Bricolage Grotesque** — OFL 1.1, © The Bricolage Grotesque Project Authors.
- **Instrument Sans** — OFL 1.1, © The Instrument Sans Project Authors.

Ambas permiten uso comercial y autoalojamiento. Los archivos provienen de los paquetes `@fontsource-variable/*`.

## Fotos

Todas las imágenes son **marcadores de posición** (campos de color rotulados), no fotografías. La selección real, su licencia y su optimización se documentan en la implementación (issue #14) y en `docs/assets-licencias.md`.

## Qué se decide con este mockup

- Concepto y tono de marca.
- Paleta y tipografía.
- Orden y ritmo de secciones.
- Comportamiento móvil (navegación, carrusel, barra fija).
- Mecanismo de CTA (WhatsApp con contexto de demo, sin backend).

Detalle completo en `docs/diseno-miga-miel.md`.
