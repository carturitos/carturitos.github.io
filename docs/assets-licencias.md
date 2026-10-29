# Registro de imágenes y licencias

Todas las fotografías de las demos provienen de **Pexels** y se usan bajo la
[Pexels License](https://www.pexels.com/license/): uso gratuito, incluido comercial, sin
atribución obligatoria, con posibilidad de recortar y editar. Restricciones que respetamos:

- No vender la fotografía sin modificar ni redistribuirla como banco de imágenes.
- No sugerir que la persona, marca o producto retratado respalda el proyecto.
- No usar imágenes con personas identificables en contextos sensibles.

El proyecto es una demostración: no hay cliente real detrás, y los textos evitan atribuir las
fotos a Miga & Miel como si fueran su catálogo real. Aun así se documenta cada archivo para poder
reemplazarlo o acreditarlo si se publica comercialmente.

## Miga & Miel — Fase 1

| Archivo local | Uso | Pexels ID | Autor | Enlace |
| --- | --- | --- | --- | --- |
| `hero-cake.webp` | Hero (4:5) | 19221014 | Arda Kaykısız | https://www.pexels.com/photo/19221014/ |
| `prod-choco.webp` | Producto destacado (5:6) | 34345088 | Konstantin Klimov | https://www.pexels.com/photo/34345088/ |
| `prod-berry.webp` | Producto frambuesa (16:10) | 35552093 | Alisa Skripina | https://www.pexels.com/photo/35552093/ |
| `prod-lemon.webp` | Producto lemon pie (16:10) | 37174473 | Unaizat Abdulgamidova | https://www.pexels.com/photo/37174473/ |
| `prod-box.webp` | Producto box regalo (16:10) | 30353751 | Giovanna Kamimura | https://www.pexels.com/photo/30353751/ |
| `prod-cupcakes.webp` | Producto cupcakes (16:10) | 4959896 | Kseniia Lopyreva | https://www.pexels.com/photo/4959896/ |
| `custom-main.webp` | Personalizados principal (3:4) | 31243103 | Alexander Mass | https://www.pexels.com/photo/31243103/ |
| `custom-detail.webp` | Personalizados detalle (3:4) | 7966469 | Felicity Tai | https://www.pexels.com/photo/7966469/ |
| `gal-tier.webp` | Galería 1 (4:5) | 28259730 | Ruxanda Scutelnic | https://www.pexels.com/photo/28259730/ |
| `gal-berry.webp` | Galería 2 (4:5) | 31785387 | Lydia Griva | https://www.pexels.com/photo/31785387/ |
| `gal-macarons.webp` | Galería 3 (1:1) | 7440173 | Amanda Hemphill | https://www.pexels.com/photo/7440173/ |
| `gal-choco.webp` | Galería 4 (1:1) | 38689721 | Amine Kübranur Çakıroğlu | https://www.pexels.com/photo/38689721/ |
| `gal-slice.webp` | Galería 5 (1:1) | 19651097 | Yulia Oliinychenko | https://www.pexels.com/photo/19651097/ |

**Fecha de descarga:** 29 de octubre de 2026.
**Resolución de origen:** 1600 px de ancho (`?w=1600`).
**Tratamiento:** recorte central con sesgo vertical, redimensión con Lanczos y conversión a WebP
calidad 80. No se altera el contenido de la escena.

### Archivos publicados

Los originales viven en `landing_page/public/photos/miga-miel/` con dos anchos por imagen
(`nombre.webp` y `nombre-sm.webp`) para el `srcset`. El mockup conserva una copia en
`docs/mockups/miga-miel/assets/photos/`.

| En el sitio | Equivale a |
| --- | --- |
| `hero.webp` / `hero-sm.webp` | `hero-cake.webp` |
| `prod-choco.webp` | `prod-choco.webp` |
| `prod-berry.webp` | `prod-berry.webp` |
| `prod-lemon.webp` | `prod-lemon.webp` |
| `prod-box.webp` | `prod-box.webp` |
| `prod-cupcakes.webp` | `prod-cupcakes.webp` |
| `custom-main.webp` / `custom-detail.webp` | mismos nombres |
| `gal-tier.webp`, `gal-berry.webp`, `gal-macarons.webp`, `gal-choco.webp`, `gal-slice.webp` | mismos nombres |

La imagen social `landing_page/public/og/miga-miel.jpg` (1200 × 630) se recorta de la foto del hero.

## Cómo se documenta una imagen nueva

1. Buscar en Pexels (o Unsplash) con criterio editorial: luz natural, fondo cálido, producto
   protagonista, sin marcas visibles ni texto legible de terceros.
2. Registrar en la tabla: archivo destino, uso, ID, autor, enlace y fecha.
3. Descargar a 1600 px, recortar al encuadre del layout y exportar en WebP/AVIF.
4. Agregar `alt` descriptivo en el componente y `width`/`height` para evitar saltos de layout.
5. Si la imagen se reemplaza, actualizar la fila (no borrarla) para conservar el historial.

## Pendiente para producción

- Generar AVIF + WebP en 480/800/1200 px con `<picture>` y `srcset`.
- Añadir un `og:image` propio por demo (1200 × 630) a partir de una de estas fotos.
- Revisar que ninguna imagen muestre marcas legibles (hoy no se detectaron).
