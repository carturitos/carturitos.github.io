# Propuesta de diseño v2 — Miga & Miel (dirección B, aprobada)

**Fecha:** 29 de octubre de 2026 · **Estado:** ajustes aplicados tras revisión del propietario; pendiente la autorización de implementación (#34).
**Mockup:** [`docs/mockups/miga-miel/index.html`](mockups/miga-miel/index.html) — escrito, móvil y estado de detalle.
**Capturas:** [escritorio](mockups/miga-miel/preview-desktop.png) · [móvil](mockups/miga-miel/preview-mobile.png) · [detalle de producto](mockups/miga-miel/preview-detalle.png) · [barra CTA móvil](mockups/miga-miel/preview-mobile-cta.png).
**Fotografías:** selección y licencias en [`docs/assets-licencias.md`](assets-licencias.md).

---

## 0. Cambios respecto a la versión anterior

| # | Antes (v1) | Ahora (v2) | Motivo |
| --- | --- | --- | --- |
| 1 | Barra superior chocolate con “Propuesta visual · dirección B” | Barra fina color crema: “Proyecto demostrativo de diseño y desarrollo web” + “Volver a Carturitos” | Aviso único, integrado y no invasivo |
| 2 | Chip “Demostración · pastelería conceptual” en el hero | Eliminado | No interrumpir la experiencia |
| 3 | Tarjeta “Qué es real en esta demo” en el FAQ | Eliminada; el FAQ queda solo con preguntas de producto | Transparencia concentrada en barra + pie |
| 4 | Avisos repetidos en contacto, catálogo y formulario | Un solo aviso contextual en la tarjeta de consulta (“no es una compra a Miga & Miel”) | Evitar advertencias redundantes |
| 5 | 10 secciones | **7 bloques**: hero, catálogo, personalizados, galería, antes de encargar, consulta, pie (+ cinta como transición) | Eliminar secciones que no aportaban a la conversión |
| 6 | Sección “Valor” separada con 3 tarjetas | Sus tres ideas pasan a “Personalizados” como razones numeradas | Mismo contenido, una sección menos |
| 7 | “Cómo pedir” y “FAQ” separadas | Fusionadas en “Antes de encargar”: 4 pasos + acordeón | Un único momento de decisión |
| 8 | Fotos: campos de color rotulados | 13 fotografías reales de Pexels, documentadas | Aprobado: fotografía real con licencia |
| 9 | Catálogo estático | Catálogo **explorable**: cada pieza abre un `<dialog>` con detalle y “Preparar consulta” | Pedido: explorar productos y preparar consultas de ejemplo |
| 10 | CTA final con formulario de nombre/fecha/personas | CTA de proyecto: chips de necesidad + WhatsApp, sin datos personales | Evitar recolección innecesaria y dejar claro que se consulta por un sitio |
| 11 | Dirección, horario y “50 % para reservar” | Eliminados; el FAQ responde sin inventar políticas | Quitar afirmaciones comerciales ficticias |
| 12 | Precios con nota repetida en varias secciones | Una sola aclaración bajo el catálogo | Precios ilustrativos, una vez |
| 13 | Barra móvil fija siempre visible | Aparece **después del hero**, compacta y contextual | No obstruir la portada |
| 14 | Animaciones de entrada en todas las secciones | Revelado sutil (14 px, 550 ms) solo donde aporta; sin parallax | Movimiento con intención |

---

## 1. Concepto

**“Pastelería de autor, no pastelería de barrio.”** Miga & Miel se presenta como un estudio de
pastelería, no como una tienda: catálogo breve, fotografía protagonista, tipografía expresiva y una
composición editorial que se desalinea a propósito.

- **Editorial antes que e-commerce.** No hay carrito ni checkout. Hay piezas, detalle y una consulta.
- **Color como firma.** Crema de papel, coral de sello, miel de acento, chocolate para el texto.
- **Optimismo formal.** Arcos, píldoras, stickers girados y radios generosos.

**Idea rectora:** *lo rico se celebra*. Todo empuja a una celebración concreta: qué, para cuándo y
para cuántas personas.

---

## 2. Tipografía (aprobada)

| Rol | Familia | Pesos | Licencia |
| --- | --- | --- | --- |
| Display | **Bricolage Grotesque** (variable) | 600–800 | OFL 1.1 |
| Texto / UI | **Instrument Sans** (variable) | 400–600 | OFL 1.1 |

Escala fluida: `h1` `clamp(2.35rem, 4.5vw, 3.85rem)` · `h2` `clamp(2rem, 3.5vw, 3rem)` · cuerpo
17 px · micro-etiquetas 11 px con tracking 0,19 em. Titulares con `letter-spacing: -0.032em` y
`text-wrap: balance`.

**Carga:** autoalojadas, subset latino, 2 archivos, **71 KB** en total, `preload` del display y
`font-display: swap`. Sin peticiones a Google Fonts.

---

## 3. Color (aprobado)

| Token | Hex | Rol | Contraste |
| --- | --- | --- | --- |
| `--cream` | `#FFF6E9` | Fondo base | — |
| `--cream-2` | `#F9E9D2` | Banda del catálogo | — |
| `--paper` | `#FFFCF4` | Tarjetas | — |
| `--ink` | `#37241F` | Texto | 13,67:1 (AAA) |
| `--ink-soft` | `#5C4A43` | Texto secundario | 7,80:1 (AAA) |
| `--coral` | `#FF6B63` | CTA y cinta | `--ink` sobre coral **5,25:1 (AA)** |
| `--coral-ink` | `#C0402B` | Texto y enlaces | 4,89:1 (AA) |
| `--honey` | `#F5BD55` | Acentos | 8,57:1 (AAA) |
| `--pistachio` | `#DDE8B5` | Detalle | 11,35:1 (AAA) |
| `--choco` | `#2A1915` | Sección oscura | crema sobre chocolate 15,71:1 (AAA) |

Regla que no se negocia: **el CTA coral lleva texto chocolate**. Blanco sobre coral da 2,79:1 y
queda descartado.

---

## 4. Arquitectura final (7 bloques + cinta)

| # | Bloque | Trabajo que hace | Fondo |
| --- | --- | --- | --- |
| — | Barra de proyecto | Declarar la naturaleza demostrativa sin romper la experiencia | Crema |
| 0 | Cabecera | Marca, navegación y CTA | Crema (sticky) |
| 1 | Hero | Promesa + foto + dos CTA | Crema |
| — | Cinta | Ritmo y variedad de producto (decorativa) | Coral |
| 2 | Catálogo | 5 piezas con precio ilustrativo y detalle explorable | Crema 2 |
| 3 | Personalizados | Subir el ticket: encargos a medida + 3 razones | Chocolate |
| 4 | Galería | Deseo: collage de producto y montaje | Crema |
| 5 | Antes de encargar | Reducir fricción: 4 pasos + FAQ | Crema |
| 6 | Consulta | CTA de proyecto: qué necesita + WhatsApp | Coral |
| 7 | Pie | Navegación, autoría y aviso conceptual | Crema |

**Por qué se eliminaron tres bloques:** “Valor” repetía lo que ya dicen el hero y las razones;
“Cómo pedir” y “FAQ” eran dos paradas para la misma duda; el bloque de honestidad duplicaba la
barra superior. Nada se perdió: el contenido se movió a donde se decide.

### Wireframe de escritorio

```
┌──────────────────────────────────────────────────────────────┐
│ Proyecto demostrativo de diseño y desarrollo web  ↗ Carturitos│
├──────────────────────────────────────────────────────────────┤
│ (m) miga & miel    Catálogo Personalizados Galería  [Consultar]│
├──────────────────────────────────────────────────────────────┤
│  H1 3 líneas                        ╭──────────────╮          │
│  bajada                             │  FOTO 4:5    │ (arco)   │
│  [Ver productos] [Encargar]         │              │          │
│  ┃ nota                             ╰──────────────╯          │
├──────────────────────────────────────────────────────────────┤
│ ✳ tortas ✳ cupcakes ✳ mesas dulces ✳ box regalo →            │
├──────────────────────────────────────────────────────────────┤
│ CATÁLOGO                                   (aside: toca y ve) │
│ ┌────────────┐ ┌─────────┐ ┌─────────┐                        │
│ │ FOTO 5:6   │ │ FOTO    │ │ FOTO    │  ← tarjeta destacada   │
│ │            │ ├─────────┤ ├─────────┤                        │
│ │            │ │ FOTO    │ │ FOTO    │                        │
│ ├────────────┤ ├─────────┤ ├─────────┤                        │
│ │título precio│ │título   │ │título   │                        │
│ └────────────┘ └─────────┘ └─────────┘                        │
│ Precios referenciales…                                        │
├──────────────────────────────────────────────────────────────┤
│ ███ PERSONALIZADOS ███  arco foto + marco  |  Tu idea, nuestra │
│ ████  (chocolate)  ████  (foto secundaria) |  receta + 01 02 03│
├──────────────────────────────────────────────────────────────┤
│ GALERÍA  Del horno a la mesa.  collage 3×2                    │
├──────────────────────────────────────────────────────────────┤
│ ANTES DE ENCARGAR  ①──②──③──④                                 │
│ Preguntas frecuentes            acordeón                      │
├──────────────────────────────────────────────────────────────┤
│ ██ CONSULTA (coral) ██  copy proyecto  |  chips + WhatsApp    │
├──────────────────────────────────────────────────────────────┤
│ miga & miel  ·  navegación  ·  proyecto                       │
└──────────────────────────────────────────────────────────────┘
```

### Wireframe móvil (390 px)

```
┌──────────────────────┐
│ aviso (2 líneas)     │
│ (m) miga & miel   ≡  │
├──────────────────────┤
│ H1 3 líneas          │
│ bajada               │
│ [ Ver productos ]    │
│ [ Encargar ]         │
│ ┃ nota               │
│   ╭──────────────╮   │
│   │   FOTO 4:5   │   │
│   ╰──────────────╯   │
├──────────────────────┤
│ ✳ cinta coral ›      │
├──────────────────────┤
│ CATÁLOGO             │
│ ┌────────┐┌─── peek  │  ← carrusel scroll-snap
│ └────────┘└───        │
│ Precios referenciales│
├──────────────────────┤
│ PERSONALIZADOS       │
│ ╭────────╮┌───────┐  │
│ ╰────────╯│ foto  │  │
│ 01 02 03             │
├──────────────────────┤
│ GALERÍA 2 col        │
├──────────────────────┤
│ ① Elige ② fecha      │
│ ③ Confirmamos ④ …    │
│ acordeón             │
├──────────────────────┤
│ CONSULTA (coral)     │
├──────────────────────┤
│ pie                  │
└──────────────────────┘
 [ ¿Quieres una web así? ][Hablemos]  ← aparece tras el hero
```

---

## 5. Catálogo explorable

Cada pieza tiene dos disparadores accesibles (“Ver detalle” y la foto) que abren un `<dialog>` nativo:

- **Contenido:** foto, etiqueta, descripción, porciones, formato y precio.
- **Acción:** “Preparar consulta” → cierra el diálogo, marca la pieza en el CTA final, cambia la
  barra móvil a *“Consulta · Torta de chocolate”* y desplaza la vista a la sección de consulta.
- **Accesibilidad:** `showModal` atrapa el foco, `Esc` cierra, el foco vuelve al disparador, clic en
  el fondo cierra.
- **Sin comercio:** no hay carrito, pago, stock ni confirmación de pedido.

---

## 6. Comportamiento final de los CTA

| CTA | Dónde | Qué hace exactamente |
| --- | --- | --- |
| **Ver productos** | Hero | Desplaza al catálogo |
| **Encargar** | Hero | Desplaza a “Consulta” |
| **Ver detalle** | Tarjetas de catálogo | Abre el diálogo del producto |
| **Preparar consulta** | Diálogo | Prepara el mensaje con la pieza y lleva a la sección de consulta |
| **Conversemos tu idea** | Personalizados | Prepara el mensaje como “torta personalizada” |
| **Escribir por WhatsApp** | Consulta | Abre `wa.me` con el mensaje ya escrito |
| **Hablemos** | Barra móvil | Desplaza a la sección de consulta |
| **Volver a Carturitos** | Barra superior y pie | Enlace al portafolio (en el sitio real, `/`) |

**Mensaje que se compone** (sin datos personales del visitante):

> Hola Samuel, vi la demo Miga & Miel y me interesa *una landing page*.
> Consulta de ejemplo: *Torta de chocolate y sal de mar, 10 a 12 porciones*.
> ¿Podemos hablar del proyecto? (carturitos.github.io)

Reglas:

1. Ningún botón dice “comprar”, “reservar” ni “pedido enviado”.
2. El texto bajo el botón aclara: *“Abre WhatsApp con la consulta escrita. No es una compra a Miga &
   Miel y no se guardan datos en este sitio.”*
3. No se piden nombre, email ni teléfono: el visitante decide qué escribe en WhatsApp.
4. El destino es el número del desarrollador, no un número de pastelería.

---

## 7. Movimiento

| Interacción | Especificación |
| --- | --- |
| Revelado al entrar en pantalla | `opacity 0→1` + `translateY 14px→0`, 550 ms, `cubic-bezier(.22,.68,.2,1)`, una vez por elemento |
| Hover de tarjeta | −4 px y sombra, 350 ms; la foto escala 1,03 |
| Flecha de botón | +3 px, 250 ms |
| Cinta | 38 s lineal, se detiene con `prefers-reduced-motion` |
| Menú móvil | Panel 420 ms; hamburguesa → aspa |
| Barra móvil | Entra 300 ms al salir del hero |

Sin parallax, sin animaciones de altura, sin librerías. Todo con `transform` y `opacity`;
`prefers-reduced-motion` desactiva revelado, cinta y entradas.

---

## 8. Fotografía

13 imágenes de **Pexels** (licencia libre, sin atribución obligatoria), documentadas una por una en
[`docs/assets-licencias.md`](assets-licencias.md).

**Criterio editorial:** luz natural, fondos crema o madera clara, fruta fresca, sin marcas legibles,
encuadres cerrados. Se descartaron fotos oscuras, con personas identificables en primer plano y con
producto envasado de terceros.

**Reparto:** 1 hero (4:5), 5 producto (16:10 + 5:6), 2 personalizados (3:4), 5 galería (4:5 y 1:1).

**Técnica para producción:** AVIF + WebP en 480/800/1200 px con `<picture>` y `srcset`; hero con
`fetchpriority="high"`, resto `loading="lazy"`; `width`/`height` siempre; fondo de color como LQIP;
`alt` descriptivo en producto y vacío en decorativas. Presupuesto: ≤ 350 KB en la primera pantalla
móvil.

---

## 9. Avisos de demostración (nuevo criterio)

Solo dos puntos, ambos discretos:

1. **Barra superior:** “Proyecto demostrativo de diseño y desarrollo web” + “Volver a Carturitos”.
2. **Pie:** “Proyecto conceptual de Carturitos. Diseño y desarrollo: Samuel Gutiérrez. Las piezas,
   precios y textos son ilustrativos.”
3. **Contexto de la consulta** (no es un aviso de demo, es claridad funcional): “No es una compra a
   Miga & Miel”.

Eliminados: chip del hero, tarjeta de honestidad, avisos repetidos, etiquetas de “foto de ejemplo”.

---

## 10. Contenido y honestidad

- **Sin dirección, horario ni teléfono de la pastelería.** Solo “entrega o retiro coordinados al
  confirmar”.
- **Sin testimonios** ni cifras de clientes.
- **Sin políticas inventadas:** el FAQ responde “depende de la pieza y la fecha” en anticipación y
  “se acuerda al confirmar” en pago.
- **Precios ilustrativos** con una sola aclaración bajo el catálogo.
- **Productos plausibles** para una pastelería artesanal, sin marcas reales.

---

## 11. Accesibilidad

- Contraste AA/AAA en todos los pares usados (§3).
- Foco visible 3 px coral-ink con offset; `skip-link` al contenido.
- Menú móvil: `<button aria-expanded aria-controls>`, `Esc`, foco devuelto, scroll bloqueado.
- Diálogo nativo: foco atrapado, cierre por `Esc` y por fondo.
- Acordeón con `<details>/<summary>` nativo.
- `alt` descriptivo; cinta y stickers `aria-hidden`.
- Un solo `h1`; secciones con `aria-labelledby`.

---

## 12. Rendimiento

| Recurso | Objetivo |
| --- | --- |
| JS de la ruta | ≤ 95 KB gzip (sin dependencias nuevas) |
| CSS de la ruta | ≤ 14 KB gzip |
| Fuentes | 71 KB (2 archivos, subset latino) |
| Imágenes primera pantalla | ≤ 350 KB móvil |
| LCP móvil | < 2,5 s |
| CLS | < 0,05 |

---

## 13. Decisiones técnicas y por qué

1. **CSS por demo con tokens propios.** Se comparten primitivas, no estética. Evita que las tres
   demos vuelvan a parecer la misma plantilla.
2. **Sin librerías de animación ni carrusel.** `IntersectionObserver`, CSS y `scroll-snap` cubren lo
   necesario; Framer Motion sumaría ~40 KB sin aportar.
3. **`<dialog>` nativo para el detalle.** Foco, `Esc` y backdrop gratis; sin dependencias.
4. **Fotografía local, no hotlink.** Control de peso, sin dependencia de un CDN ajeno y con licencia
   registrada.
5. **CTA sin backend.** `wa.me` con mensaje precompuesto: cero infraestructura, cero datos
   almacenados, comportamiento honesto.
6. **Rutas intactas.** `/demos/pasteleria` se mantiene para no romper enlaces ni el fallback 404.

---

## 14. Criterios de aceptación de esta v2

- [ ] El propietario aprueba los siete bloques y el orden.
- [ ] Aprueba el CTA de proyecto (chips + WhatsApp, sin datos personales).
- [ ] Aprueba la selección fotográfica y sus licencias.
- [ ] Autoriza la implementación (#34) en rama con PR.
