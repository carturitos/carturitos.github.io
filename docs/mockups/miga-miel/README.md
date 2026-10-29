# Mockup — Miga & Miel (propuesta v2)

Mockup estático para revisión. **No forma parte del build** del sitio: vive fuera de `landing_page/` y Vite no lo procesa.

## Ver la propuesta

1. Abre `index.html` en el navegador (doble clic), o
2. Revisa las capturas: `preview-desktop.png`, `preview-mobile.png`, `preview-detalle.png` y `preview-mobile-cta.png`.
3. Para simular un móvil real: DevTools → modo dispositivo → 390 × 844.

Es interactivo: menú hamburguesa, acordeón del FAQ, detalle de producto (`<dialog>`) y cálculo del
mensaje de WhatsApp.

Parámetros útiles: `?static=1` desactiva las animaciones de entrada; `?open=choco` abre el detalle de
un producto; `?bar=1` fuerza la barra móvil.

## Contenido

| Archivo | Qué es |
| --- | --- |
| `index.html` | Página completa: 7 bloques + cinta, catálogo explorable y CTA de proyecto |
| `styles.css` | Tokens, componentes y responsive |
| `assets/photos/*.webp` | 13 fotografías de Pexels (ver `docs/assets-licencias.md`) |
| `assets/fonts/*.woff2` | Bricolage Grotesque e Instrument Sans (variables, subset latino) |
| `assets/fonts/OFL-*.txt` | Licencias SIL Open Font License 1.1 |

## Licencias

- **Bricolage Grotesque** — OFL 1.1.
- **Instrument Sans** — OFL 1.1.
- **Fotografías** — Pexels License; autor y enlace de cada archivo en `docs/assets-licencias.md`.

## Qué se decide con este mockup

- Concepto, color y tipografía.
- Orden definitivo de secciones (7 bloques).
- Comportamiento del catálogo y del CTA (WhatsApp, sin datos personales).
- Jerarquía de avisos de demostración (barra + pie).

Detalle completo en `docs/diseno-miga-miel.md`.
