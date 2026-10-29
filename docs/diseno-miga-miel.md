# Propuesta de diseño — Miga & Miel (dirección B: moderna y expresiva)

**Fecha:** 29 de octubre de 2026 · **Estado:** pendiente de aprobación del propietario
**Punto de control:** no se modifica código de la landing hasta que esta propuesta se apruebe (issue #32).
**Mockup navegable:** [`docs/mockups/miga-miel/index.html`](mockups/miga-miel/index.html) · Capturas: [escritorio](mockups/miga-miel/preview-desktop.png) · [móvil](mockups/miga-miel/preview-mobile.png)

---

## 0. Qué estás viendo

El mockup es HTML/CSS estático, autocontenido, fuera del build del sitio. Reproduce la propuesta a nivel de diseño: composición, tipografía, color, componentes, jerarquía y comportamiento móvil. **Las fotografías son marcadores de posición** (campos de color rotulados): la selección real se hace en la etapa de implementación con licencia documentada (issue #14).

---

## 1. Concepto: “pastelería de autor, no pastelería de barrio”

La dirección B pide ser moderna y expresiva. La traducción concreta: **Miga & Miel se presenta como un estudio de pastelería**, no como una tienda. Eso cambia tres cosas:

1. **Editorial antes que e-commerce.** El catálogo se lee como una revista de comida: titular grande, pie de foto, numeración de sección, mucho aire. No hay “agregar al carrito” porque no hay carrito.
2. **Color como firma.** Crema de papel + coral de sello + miel de acento. El coral no decora: marca la acción. El chocolate carga el texto y los bloques oscuros.
3. **Optimismo formal.** Curvas amplias (arcos, píldoras, radios de 20–28 px), stickers girados, cinta tipográfica y una grilla que se desalinea a propósito. Es lo que separa “moderna” de “minimalista genérica”.

**Idea rectora:** *“Lo rico se celebra”.* Todo el sitio empuja a una celebración concreta (fecha, personas, motivo) en lugar de a un catálogo abstracto.

**Público:** 25–40 años, compra por Instagram, valora el diseño y paga por algo hecho a medida. Decide por fotografía y confianza, no por precio.

---

## 2. Referencias

No son sitios a copiar, son registros a combinar:

| Referencia | Qué se toma |
| --- | --- |
| Pastelerías de autor tipo Rosetta (CDMX) o Bourke Street Bakery (Sídney) | Producto como protagonista, menú breve, tono artesanal sin infantilismo |
| Revistas gastronómicas independientes (*Lucky Peach*, *Cherry Bombe*) | Titulares grandes, pies de foto, numeración de sección, asimetría |
| Packaging de repostería contemporánea | Stickers, etiquetas giradas, papel crema, tipografía redondeada |
| Estudios de identidad como Anagrama | Paleta corta y saturada, formas orgánicas, mucho contraste tipográfico |
| Fotografía *food* de luz natural | Fondos crema, sombras suaves, primeros planos con textura |

**Anti-referencias deliberadas:** plantillas de pastelería con lazos rosas y script cursiva; grids de tres tarjetas iguales; carrito simulado; fotos de stock con fondo blanco de estudio.

---

## 3. Tipografía

| Rol | Familia | Pesos | Por qué |
| --- | --- | --- | --- |
| Display | **Bricolage Grotesque** (variable) | 600–800 | Grotesca contemporánea con detalles irregulares; da carácter sin recurrir a otra serif editorial (Corte Real ya usa Fraunces). |
| Texto / UI | **Instrument Sans** (variable) | 400–600 | Muy legible en tamaños chicos, personalidad neutra, métricas compactas. |

**Licencia:** ambas OFL 1.1 (uso comercial libre, incluida web). Archivos y licencias en `docs/mockups/miga-miel/assets/fonts/`.

**Escala** (fluida con `clamp`, ratio ≈ 1,25):

| Token | Tamaño | Uso |
| --- | --- | --- |
| `--fs-hero` | `clamp(2.35rem, 4.5vw, 3.85rem)` → 37,6–61,6 px | H1 |
| `--fs-h2` | `clamp(2rem, 3.5vw, 3rem)` → 32–48 px | Títulos de sección |
| `--fs-h3` | 1,06–1,32 rem | Títulos de tarjeta |
| `--fs-body` | 1,0625 rem (17 px) | Párrafos |
| `--fs-small` | 0,875 rem | Links, notas |
| `--fs-micro` | 0,68–0,78 rem (uppercase, tracking 0,14–0,19 em) | Eyebrows, etiquetas |

Detalles: `letter-spacing` negativo (−0,032 em) solo en display; interlineado 0,97–1,02 en titulares y 1,6 en texto; `text-wrap: balance` en titulares.

**Carga:** autoalojada, subset latino, variable, `font-display: swap`, `preload` del display. Coste total: **71 KB** (41 KB + 30 KB) frente a las cuatro familias desde CDN que hoy se cargan en todas las rutas.

---

## 4. Color

### 4.1 Paleta y roles

| Token | Hex | Rol | Contraste medido |
| --- | --- | --- | --- |
| `--cream` | `#FFF6E9` | Fondo base | — |
| `--cream-2` | `#F9E9D2` | Banda alterna (catálogo) | — |
| `--paper` | `#FFFCF4` | Tarjetas y formularios | — |
| `--ink` | `#37241F` | Texto principal | **13,67:1** sobre crema (AAA) |
| `--ink-soft` | `#5C4A43` | Texto secundario | **7,80:1** (AAA) |
| `--coral` | `#FF6B63` | Relleno de CTA, cinta, acentos | `--ink` sobre coral **5,25:1** (AA) |
| `--coral-ink` | `#C0402B` | Coral para texto y links | **4,89:1** sobre crema (AA) |
| `--honey` | `#F5BD55` | Acento, stickers, arco | `--ink` sobre miel **8,57:1** (AAA) |
| `--rose` | `#FFC4D6` | Relleno suave puntual | `--ink` **9,84:1** |
| `--pistachio` | `#DDE8B5` | Bloque de honestidad / checks | `--ink` **11,35:1** |
| `--choco` | `#2A1915` | Sección oscura, footer, barra | `--cream` sobre chocolate **15,71:1** |

### 4.2 Reglas de uso (no negociables)

- **El CTA principal es coral con texto chocolate.** Blanco sobre coral da 2,79:1 y **queda descartado**: si el botón necesita texto claro, no puede ser coral.
- **Coral como texto nunca es `#FF6B63`** (2,60:1 sobre crema). Para texto y links se usa `--coral-ink`.
- El chocolate es el único color de texto sobre fondos claros; el crema es el único color de texto sobre chocolate.
- Máximo **dos** colores de acento por pantalla; miel, rosa y pistacho son rellenos, no texto.

Verificación completa reproducible en `docs/mockups/miga-miel/` (fórmula WCAG 2.1 sobre los hex reales).

---

## 5. Estructura y wireframes

### 5.1 Orden de secciones (10 bloques)

| # | Sección | Función comercial | Fondo |
| --- | --- | --- | --- |
| — | Barra de demo | Declarar que es una demostración | Chocolate |
| 0 | Cabecera | Marca + navegación + CTA | Crema (sticky) |
| 1 | Hero | Promesa + prueba visual + dos CTA | Crema |
| 2 | Cinta | Ritmo y variedad de producto | Coral |
| 3 | Valor | Por qué elegir esta pastelería (3 razones) | Crema |
| 4 | Catálogo | 5 productos con precio referencial y “Consultar” | Crema 2 |
| 5 | Personalizados | Subir el ticket: eventos y encargos a medida | Chocolate |
| 6 | Galería | Deseo: collage de producto y empaque | Crema |
| 7 | Cómo pedir | Reducir fricción: 4 pasos | Crema |
| 8 | FAQ + honestidad | Resolver objeciones antes de escribir | Crema |
| 9 | CTA final | Formulario de consulta real | Coral |
| 10 | Pie | Navegación, autoría, aviso legal | Crema |

### 5.2 Escritorio (≥ 1020 px)

```
┌─────────────────────────────────────────────────────────────────────┐
│ ● Propuesta visual · Miga & Miel es una marca ficticia…             │
├─────────────────────────────────────────────────────────────────────┤
│ (m&m) miga & miel     Productos Personalizados Cómo pedir  [Consultar]│
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  (chip demo)                                          ╭──────────╮   │
│  HECHO PARA CELEBRAR                                  │  FOTO    │   │
│  LO RICO DE CADA          + arco miel detrás          │  4:5     │   │
│  MOMENTO                                              │  arco    │   │
│  bajada de 3 líneas                                   ╰──────────╯   │
│  [Ver productos →] [Hacer un pedido]                  ┌─────────┐   │
│  ┃ Encargos con 48 h de anticipación                  │tarjeta  │   │
│                                                       └─────────┘   │
├─────────────────────────────────────────────────────────────────────┤
│ ✳ tortas por encargo ✳ cupcakes ✳ mesas dulces ✳ box regalo  →      │
├─────────────────────────────────────────────────────────────────────┤
│ — LA PROPUESTA                                                       │
│ Dulce de verdad, sin atajos.                                         │
│ 01 Masa de verdad      02 Diseño a tu medida    03 Coordinación      │
├─────────────────────────────────────────────────────────────────────┤
│ — 01 CATÁLOGO                          (nota de precios referenciales)│
│ ┌──────────────┐ ┌────────────┐ ┌────────────┐                       │
│ │   FOTO 5:6   │ │  FOTO 16:10│ │  FOTO 16:10│                       │
│ │              │ ├────────────┤ ├────────────┤                       │
│ │              │ │  FOTO      │ │  FOTO      │                       │
│ ├──────────────┤ ├────────────┤ ├────────────┤                       │
│ │ título precio│ │ título     │ │ título     │                       │
│ │ desc + chips │ │ desc       │ │ desc       │                       │
│ └──────────────┘ └────────────┘ └────────────┘                       │
├─────────────────────────────────────────────────────────────────────┤
│ ████ PERSONALIZADOS (chocolate) ████████████████████████████████████ │
│  arco foto      ┌──────────┐          Tu idea,                       │
│  ╭────────╮     │ foto     │          nuestra receta.                │
│  │ FOTO   │     │ (marco)  │          ✓ ✓ ✓                          │
│  ╰────────╯     └──────────┘          [Conversemos tu idea]          │
├─────────────────────────────────────────────────────────────────────┤
│ — 03 GALERÍA                                                         │
│ ┌──────────────┐ ┌─────────┐ ┌─────────┐                             │
│ │   FOTO 1     │ │  FOTO   │ │  FOTO   │   collage 3×2,           │
│ │   (2 filas)  │ ├─────────┤ ├─────────┤   la primera ocupa 2 filas │
│ │              │ │  FOTO   │ │  FOTO   │                             │
│ └──────────────┘ └─────────┘ └─────────┘                             │
├─────────────────────────────────────────────────────────────────────┤
│ — 04 CÓMO PEDIR                                                      │
│ ①──┈┈┈②──┈┈┈③──┈┈┈④                                                  │
├─────────────────────────────────────────────────────────────────────┤
│ — 05 PREGUNTAS                    ¿Con cuánta anticipación…?     +   │
│ Antes de encargar.                ¿Sin gluten o sin lactosa?      +   │
│ ┌───────────────┐                 ¿Cómo se reserva la fecha?      +   │
│ │ qué es real   │                 ¿Hay despacho?                  +   │
│ └───────────────┘                 ¿Otra duda? WhatsApp              │
├─────────────────────────────────────────────────────────────────────┤
│ ████ ¿Tienes una idea dulce en mente? ████  ┌────────────────────┐  │
│ ████ texto + 3 datos                   ████  │ form de consulta   │  │
│                                           │ [Preparar consulta]│  │
├─────────────────────────────────────────────────────────────────────┤
│ miga & miel      PRODUCTOS        PROYECTO                           │
│ © 2026 · demo    Catálogo…        Consultar una web así…             │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.3 Móvil (390 px)

```
┌──────────────────────┐
│ barra demo (2–3 ln)  │
├──────────────────────┤
│ (m&m) miga & miel  ≡ │
├──────────────────────┤
│ (chip demo)          │
│ HECHO PARA CELEBRAR  │
│ LO RICO DE CADA      │
│ MOMENTO              │
│ bajada               │
│ [ Ver productos ]    │  ← CTA a ancho completo, 52 px
│ [ Hacer un pedido ]  │
│ ┃ nota               │
│  ╭──────────────╮    │
│  │   FOTO 4:5   │    │
│  │   (arco)     │    │
│  ╰──────────────╯    │
│      ┌─────────┐     │
│      │ tarjeta │     │
├──────────────────────┤
│ ✳ cinta coral ›      │
├──────────────────────┤
│ 01 Masa de verdad    │
│ 02 Diseño a medida   │
│ 03 Coordinación      │
├──────────────────────┤
│ CATÁLOGO             │
│ ┌────────┐┌───       │
│ │ card   ││ peek     │  ← carrusel con scroll-snap
│ └────────┘└───       │
│ Desliza para ver →   │
├──────────────────────┤
│ PERSONALIZADOS       │
│  ╭─────────╮         │
│  │  FOTO   │┌──────┐ │
│  ╰─────────╯│foto  │ │
│             └──────┘ │
│ Tu idea, nuestra…    │
├──────────────────────┤
│ GALERÍA (2 col)      │
├──────────────────────┤
│ ① Elige              │
│ ② Cuéntanos la fecha │
│ ③ Confirmamos        │
│ ④ Retira o recibe    │
├──────────────────────┤
│ PREGUNTAS            │
│ [acordeón]           │
├──────────────────────┤
│ CTA coral            │
│ [form 1 columna]     │
├──────────────────────┤
│ footer               │
└──────────────────────┘
   [ Consultar · demo ]  ← barra fija inferior
```

---

## 6. Secciones: contenido y copys

> Todos los textos son borrador para aprobación. Los datos comerciales van marcados como demostrativos.

**0. Cabecera.** Logo tipográfico `miga & miel` con la “&” en coral + bajada `PASTELERÍA DE AUTOR`. Nav: Productos · Personalizados · Cómo pedir · Preguntas. CTA: *Consultar pedido*.

**1. Hero.**
Chip: “Demostración · pastelería conceptual”.
H1: **“Hecho para celebrar lo rico de cada momento”** (la palabra “rico” en coral con subrayado miel).
Bajada: “Tortas, cupcakes y mesas dulces con receta propia, en tandas pequeñas. Cuéntanos qué celebras y para cuándo, y armamos algo que se recuerde.”
CTAs: *Ver productos* (coral) / *Hacer un pedido* (outline).
Nota: “Encargos con 48 h de anticipación · Retiro y entrega coordinados al confirmar.”
Tarjeta flotante: “Más pedido · Torta de frambuesa · $22.000 *referencial*”.
Sticker circular: “hecho a mano”.

**2. Cinta.** “tortas por encargo ✳ cupcakes ✳ mesas dulces ✳ box regalo ✳ galletas de mantequilla ✳ postres”. Puramente decorativa (`aria-hidden`).

**3. Valor.** “Dulce de verdad, sin atajos.”
- 01 *Masa de verdad* — “Mantequilla, huevos y fruta de temporada. Nada de mezclas industriales ni sabor a plástico.”
- 02 *Diseño a tu medida* — “Elegimos juntos sabores, tamaño y decoración según lo que estés celebrando.”
- 03 *Coordinación simple* — “Fecha, retiro o entrega y forma de pago se definen al confirmar el encargo.”

**4. Catálogo.** “Lo que sale del horno cada semana.” Nota: “Precios referenciales de demostración. Cada encargo se cotiza según tamaño, fecha y decoración.”
Cinco productos con foto, etiqueta, nombre, descripción, precio referencial y *Consultar*:
torta de chocolate y sal de mar ($18.000) · torta de frambuesa ($22.000) · lemon pie ($15.000) · box regalo ($12.000) · cupcakes ×6 ($9.000).

**5. Personalizados.** “Tu idea, nuestra receta.” + “Cumpleaños, matrimonios, lanzamientos o un martes cualquiera. Partimos de una referencia, una paleta o una historia y la convertimos en torta.” Lista: tortas de dos y tres pisos · mesas dulces para eventos · box regalo con tarjeta escrita. CTA: *Conversemos tu idea*.

**6. Galería.** “Del horno a la mesa.” Cinco imágenes con pie: celebración 3 pisos · frambuesa y crema · lemon pie · box regalo · cupcakes.

**7. Cómo pedir.** “Cuatro pasos, cero letra chica.”
1. *Elige* · 2. *Cuéntanos la fecha* · 3. *Confirmamos* (“Te respondemos con valor y opciones. La fecha se reserva al confirmar.”) · 4. *Retira o recibe*.

**8. FAQ.** Cinco preguntas: anticipación, sin gluten/lactosa (con advertencia de cocina compartida), cómo se reserva, despacho, y “¿otra duda?”. Tarjeta pistacho: **“Qué es real en esta demo”** — “El diseño, el código y el formulario que abre una conversación son reales. Los productos, precios, horarios y la marca son ficticios.”

**9. CTA final.** “¿Tienes una idea dulce en mente?” + “Cuéntanos qué celebras y para cuándo. En esta demo el mensaje llega al desarrollador, no a una pastelería real.” Formulario: producto, fecha, personas, nombre → *Preparar mi consulta*.

**10. Pie.** Marca, declaración de marca ficticia, navegación, enlace al portafolio y autoría.

---

## 7. Componentes

| Componente | Especificación |
| --- | --- |
| **Botón primario** | Píldora 999 px, fondo coral, texto chocolate, 52 px de alto, icono flecha que se desplaza 3 px en hover, elevación −2 px |
| **Botón secundario** | Borde 1,5 px `--line-strong`, fondo transparente; hover a `--paper` con borde chocolate |
| **Botón sobre oscuro** | Fondo crema, texto chocolate; hover blanco |
| **Chip** | Píldora crema con borde, punto coral de 8 px con halo |
| **Eyebrow** | 11 px, mayúsculas, tracking 0,19 em, coral-ink, regla de 26 px a la izquierda |
| **Sticker** | Círculo de 108 px, borde chocolate 1,5 px, rotado −9°/7°, tipografía display |
| **Tarjeta producto** | Radio 28 px, fondo `--paper`, borde 1 px; hover eleva 4 px y escala la imagen 1,02 |
| **Marco de foto** | Arco (`border-radius: 320px 320px 26px 26px`) en hero y personalizados; rectángulo 20 px en el resto |
| **Acordeón** | `<details>` nativo estilizado; indicador “+/−”; sin JS |
| **Formulario** | Campos de 48 px, radio 12 px, borde 1,5 px, foco coral-ink; etiqueta visible siempre |
| **Cinta** | Marquesina CSS de 38 s, `aria-hidden`, sin JS |

---

## 8. Movimiento

| Interacción | Especificación |
| --- | --- |
| Entrada de secciones | `opacity 0→1` + `translateY 12px→0`, 500 ms, `cubic-bezier(.22,.68,.2,1)`, una sola vez por elemento (`IntersectionObserver`) |
| Hero | Escalonado de 80 ms entre chip, titular, bajada, botones y nota |
| Hover de tarjeta | `translateY(-4px)` + sombra, 350 ms; imagen `scale(1.02)`, 500 ms |
| Flecha de botón | `translateX(3px)` en 250 ms |
| Cinta | Traslación continua 38 s, se pausa con `hover` y con `prefers-reduced-motion` |
| Acordeón | Apertura instantánea (nativo), sin animación de altura |
| Menú móvil | Panel `translateY(-100%) → 0`, 420 ms; hamburguesa a aspa |

**Reglas:** nada de parallax; ninguna animación provoca reflow (solo `transform`/`opacity`); `prefers-reduced-motion: reduce` desactiva cinta, escalonados y transiciones; los `aspect-ratio` de las imágenes evitan CLS.

---

## 9. Comportamiento móvil

| Punto de quiebre | Comportamiento |
| --- | --- |
| ≤ 1020 px | Hero a una columna; catálogo a 2 columnas; personalizados y CTA apilados |
| ≤ 820 px | Navegación → panel a pantalla completa con enlaces de 1,55 rem; hamburguesa de 46 px; bloqueo de scroll del body; cierre al elegir un enlace y con `Esc` |
| ≤ 760 px | CTAs del hero a ancho completo; catálogo → **carrusel con `scroll-snap`** (78 % de ancho + vistazo de la siguiente); galería a 2 columnas; pasos a lista vertical; barra fija inferior con CTA |
| ≤ 420 px | Campos del formulario en una columna |

**Detalles táctiles:** áreas mínimas de 44×44 px, separación de 8 px entre acciones, barra fija con `env(safe-area-inset-bottom)` y `padding-bottom` equivalente en el body para no tapar el pie. La barra fija aparece tras el hero; con `prefers-reduced-motion` se mantiene, pero sin animación de entrada.

---

## 10. Fotografía

### 10.1 Shot list (10 fotos)

| # | Tema | Uso | Encuadre |
| --- | --- | --- | --- |
| 01 | Torta de frambuesa entera, luz lateral | Hero | Vertical 4:5, fondo crema |
| 02 | Corte de torta de chocolate, ganache | Tarjeta destacada | Vertical 5:6 |
| 03 | Detalle de frambuesas sobre crema | Tarjeta | Horizontal 16:10 |
| 04 | Lemon pie con merengue tostado | Tarjeta | Horizontal 16:10 |
| 05 | Caja regalo abierta con mini postres | Tarjeta | Horizontal 16:10 |
| 06 | Cupcakes con buttercream | Tarjeta | Horizontal 16:10 |
| 07 | Mesa dulce montada | Personalizados | Vertical 3:4 |
| 08 | Manos decorando / manga pastelera | Personalizados | Vertical 3:4 |
| 09 | Empaque con sticker y lazo | Galería | Vertical 4:5 |
| 10 | Torta de tres pisos | Galería | Vertical 4:5 |

### 10.2 Fuentes y licencias

- **Preferencia:** fotografía propia (el propietario no la tiene hoy; se puede resolver con una sesión de banco de imágenes).
- **Alternativa:** Unsplash / Pexels (licencia permisiva, sin atribución obligatoria) con **registro por archivo** en `docs/assets-licencias.md`: URL, autor, licencia, fecha de descarga, uso.
- **Prohibido:** imágenes de marcas reales, capturas de Instagram ajenas, material sin licencia o generado que simule un producto que no existe como si fuera propio del cliente.

### 10.3 Técnica

- Formatos AVIF + WebP con `<picture>`, `srcset` a 480/800/1200 px, `sizes` según layout.
- Hero: `loading="eager"`, `fetchpriority="high"`, precarga del LCP.
- Resto: `loading="lazy"` + `decoding="async"`.
- `width`/`height` siempre declarados; fondo de color como LQIP (sin *blur-up* con JS).
- Presupuesto: **≤ 350 KB** de imágenes en la primera pantalla móvil; **≤ 900 KB** en la carga completa de escritorio.

---

## 11. CTA y honestidad funcional

**Qué hace el botón “Preparar mi consulta”:**

1. Valida los campos en el cliente (producto, fecha, personas; nombre opcional).
2. Compone un mensaje de WhatsApp con contexto explícito de demo.
3. Abre `wa.me/<número del desarrollador>` con el texto prellenado.
4. Nunca dice “pedido enviado”; dice “Se abre WhatsApp con el mensaje listo”.
5. No guarda datos, no usa cookies, no envía nada a un servidor.

Plantilla del mensaje:

> Hola Samuel, vi la demo **Miga & Miel** y quiero algo así para mi negocio.
> Simulé una consulta: **Torta de frambuesa**, para **12 personas**, el **20 de diciembre**.
> ¿Podemos hablar del proyecto?

**Qué NO se hará:** backend de reservas, carrito, pasarela de pago, disponibilidad en tiempo real, reseñas inventadas, dirección/horario ficticios con formato de dato real.

---

## 12. Diferenciación frente a las otras dos demos

| Dimensión | Corte Real | Dental Aurora | **Miga & Miel (propuesta)** |
| --- | --- | --- | --- |
| Registro | Barbershop clásico, masculino | Clínica, confianza | Editorial, cálido, festivo |
| Fondo dominante | Negro carbón | Blanco frío / azul | Crema cálida + coral |
| Tipografía | Serif de alto contraste + mono | Geométrica (Sora) | Grotesca expresiva (Bricolage) |
| Geometría | Rectángulos duros, filetes dorados | Tarjetas suaves, radio medio | Arcos, píldoras, stickers girados |
| Imagen | Retrato / ambiente oscuro | Equipo y sonrisas | Food macro, luz natural |
| Ritmo de página | Bloques simétricos, precios | Widget de agenda + pasos | Asimetría, cinta, collage |
| Acción principal | Reservar hora | Agendar hora | Consultar un pedido |

La diferencia no es “otra paleta”: cambia el sistema de formas, el ritmo de secciones y el tipo de imagen.

---

## 13. Accesibilidad

- **Contraste:** todos los pares texto/fondo usados cumplen AA; la mayoría AAA (§4).
- **Teclado:** orden lógico, foco visible de 3 px coral-ink con offset, `skip-link` al contenido.
- **Menú móvil:** `<button aria-expanded aria-controls>`, cierre con `Esc`, foco devuelto al botón, `inert`/`aria-hidden` en el resto al abrir.
- **Formulario:** `<label>` visibles, `aria-describedby` para notas, `aria-live="polite"` en el resultado, error de campo con texto (no solo color).
- **Imágenes:** `alt` descriptivo en fotos de producto; vacío en decorativas; la cinta y los stickers son `aria-hidden`.
- **Movimiento:** `prefers-reduced-motion` desactiva cinta, escalonados y desplazamientos.
- **Semántica:** un solo `h1`; secciones con `aria-labelledby`; acordeón con `<details>/<summary>` nativo.

---

## 14. Rendimiento

| Recurso | Hoy | Objetivo Miga & Miel |
| --- | --- | --- |
| JS de la ruta | 95,3 KB gzip (bundle único) | **≤ 95 KB** (sin dependencias nuevas) |
| CSS | 11,0 KB gzip (global, todas las rutas) | **≤ 14 KB gzip** para la ruta (global + demo) |
| Fuentes | 4 familias por CDN, bloqueante | **71 KB** autoalojadas, 2 archivos, `preload` del display |
| Imágenes | 0 reales | ≤ 350 KB primera pantalla móvil |
| LCP objetivo (móvil 4G) | sin medir | **< 2,5 s** |
| CLS | sin medir | **< 0,05** |

Medición antes/después en la tarea #6.

---

## 15. Decisiones técnicas y por qué

1. **CSS por demo, no sistema de componentes global.** Se mantiene un `.css` por demo con tokens propios; se extraen primitivas solo cuando una segunda demo las necesite. Evita uniformar la estética, que es justo el riesgo del rediseño.
2. **Tipografías autoalojadas por ruta.** `@fontsource` variable + subset latino, importadas solo en la hoja de la demo. Coste: +71 KB en esa ruta; beneficio: −1 conexión bloqueante a CDN y control de `preload`. Como alternativa si el propietario quiere cero dependencias nuevas, se pueden copiar los `.woff2` a `public/fonts` (mismo resultado, sin paquete npm).
3. **Sin librerías de animación.** `IntersectionObserver` + CSS cubre todo lo propuesto; Framer Motion añadiría ~40 KB para nada.
4. **Carrusel sin librería.** `scroll-snap` nativo, accesible con teclado y sin JS.
5. **Acordeón nativo.** `<details>` da teclado y estado gratis; estilizarlo cuesta 20 líneas de CSS.
6. **Ejecución por rama y PR.** `main` sigue desplegando a Pages; el rediseño se desarrolla en `feat/miga-miel-redesign` con verificación previa y PR revisable.
7. **Rutas intactas.** `/demos/pasteleria` se mantiene para no romper enlaces ni el fallback 404 de Pages.
8. **El mockup no entra al build.** Vive en `docs/mockups/`, se versiona para revisión y no lo procesa Vite.

**Trade-off que conviene decir en voz alta:** autohospedar fuentes suma archivos al repositorio y un paso de actualización manual si se cambian las familias. A cambio, elimina una dependencia externa en la ruta crítica, mejora el LCP móvil y permite fijar el subset exacto.

---

## 16. Criterios de aceptación de esta propuesta

- [ ] El propietario aprueba concepto, paleta, tipografía y orden de secciones.
- [ ] Se aprueba el mecanismo de CTA (WhatsApp con contexto de demo, sin backend).
- [ ] Se aprueba el enfoque de imágenes (banco con licencia documentada) y el presupuesto.
- [ ] Se resuelven las preguntas abiertas de §17.
- [ ] El issue #32 se actualiza con la aprobación y se abre la rama de implementación.

## 17. Decisiones que necesito de ti

1. **Tipografía:** ¿apruebas Bricolage Grotesque + Instrument Sans, o prefieres una display más redondeada tipo Baloo/Gabarito?
2. **Coral:** el CTA usa texto chocolate para cumplir contraste (5,25:1). ¿Te sirve, o prefieres un coral más oscuro con texto crema?
3. **Precios:** ¿los mantenemos visibles como “referenciales” (más concreto para vender) o los quitamos y dejamos solo “Consultar”?
4. **Barra fija móvil:** ¿la incluimos? Ayuda a convertir, pero ocupa 64 px de pantalla.
5. **Fotografía:** ¿banco de imágenes (Unsplash/Pexels) o compramos un pack de 10 fotos con licencia para que la demo no repita imágenes en otras webs?
6. **Alcance del aviso de demo:** ¿basta la barra superior + tarjeta “qué es real”, o lo repetimos también en el pie de cada sección de producto?

---

## Anexo — archivos de esta propuesta

| Archivo | Contenido |
| --- | --- |
| `docs/mockups/miga-miel/index.html` | Mockup navegable completo |
| `docs/mockups/miga-miel/styles.css` | Sistema visual implementado (tokens, componentes, responsive) |
| `docs/mockups/miga-miel/preview-desktop.png` | Captura de escritorio 1440 px |
| `docs/mockups/miga-miel/preview-mobile.png` | Captura móvil 390 px |
| `docs/mockups/miga-miel/assets/fonts/` | Fuentes OFL + licencias |
| `docs/auditoria-fase-1.md` | Diagnóstico técnico que sustenta esta propuesta |
