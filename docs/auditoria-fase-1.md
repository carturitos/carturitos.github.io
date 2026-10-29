# Auditoría técnica y de producto — Fase 1

**Fecha:** 29 de octubre de 2026
**Alcance:** repositorio `carturitos/carturitos.github.io` (rama `main`, commit `85224f0` + los dos documentos de planificación en `312ccb8` / `6cc39e2`).
**Fuentes de verdad:** `docs/plan-redisenio-landings.md`, `docs/brief-miga-miel.md`, issue #32, issues #1–#31 y GitHub Projects n.º 2.
**Estado:** diagnóstico para decisión. **No se modificó código de las landing pages.**

---

## 1. Resumen ejecutivo

1. **La base técnica está sana y es publicable hoy.** React 19 + Vite 7 + TypeScript estricto, cuatro rutas, build sin dependencias innecesarias y despliegue automático a GitHub Pages funcionando (último run exitoso: `40828364243`). El sitio publicado responde en `https://carturitos.github.io/`.
2. **El problema no es el código: es la identidad.** Las tres demos comparten el mismo esqueleto (hero a dos columnas → franja de features → grid de tarjetas → pasos → bloque de contacto) y resuelven la imagen con gradientes y formas CSS. Se perciben como plantillas recoloreadas, exactamente lo que el plan maestro busca revertir.
3. **Hay una brecha de honestidad comercial.** Quedan testimonios ficticios (aunque etiquetados), una dirección y un horario inventados presentados como datos operativos en Miga & Miel, y precios sin marca de referenciales en varias tarjetas. El brief pide lo contrario.
4. **Accesibilidad y rendimiento tienen deuda concreta y medible:** los tres demos ocultan la navegación en móvil sin ofrecer menú alternativo, no declaran `prefers-reduced-motion` en sus hojas de estilo y cargan cuatro familias tipográficas por CDN para todas las rutas.
5. **La planificación existente está bien encaminada y es reutilizable.** 31 issues ya están en el Project n.º 2; #14, #15, #6 y #28 cubren imágenes, móvil, medición y Fiverr. Conviene **reutilizarlas** y añadir solo tres tareas nuevas, no duplicar el tablero.

**Veredicto:** el proyecto necesita una capa de dirección de arte y un sistema de assets, no una reescritura. La Fase 1 puede ejecutarse sobre la estructura actual con cambios quirúrgicos por demo.

---

## 2. Contexto verificado

| Elemento | Estado |
| --- | --- |
| Repositorio | `carturitos/carturitos.github.io` (público, rama `main`) |
| Stack | React 19.2, react-router-dom 7.9, Vite 7.1, TypeScript 5.9 (`strict`) |
| Scripts | `dev`, `build` (`tsc -b && vite build`), `preview`, `typecheck` |
| CI/CD | `.github/workflows/deploy.yml` → `npm ci` + build en `landing_page` + `upload-pages-artifact` + `deploy-pages` |
| Pages | `build_type: workflow`, estado `built`, URL `https://carturitos.github.io/` |
| Fallback SPA | `public/404.html` + script de restauración de ruta en `index.html` |
| Contenido | `src/data/*.ts` + `src/config/site.ts` (WhatsApp real: `56951048157`) |
| Assets | Solo capturas `.png` en `public/shots/`; sin fotografías de producto |
| Pruebas | No hay tests automatizados ni lint; solo `typecheck` |
| Project | n.º 2 “Lanzamiento freelance” con 31 items y campos Prioridad / Área / Semana |

Rutas actuales: `/`, `/demos/barberia`, `/demos/dental`, `/demos/pasteleria`, `*` → 404.

---

## 3. Arquitectura actual

```
landing_page/
├─ index.html              ← fuente única de fuentes, OG y theme-color
├─ public/                 ← favicon, og.png, robots.txt, sitemap.xml, 404.html, shots/
└─ src/
   ├─ App.tsx              ← rutas + ScrollToTop + skip-link
   ├─ config/site.ts       ← contacto real y helpers (contactHref)
   ├─ data/                ← demos, content, services (contenido tipado)
   ├─ hooks/usePageMeta.ts ← title/description/OG/canonical por ruta
   ├─ components/          ← Header, Footer, Reveal, DemoNotice, DemoBadge, Icons
   ├─ sections/            ← secciones del portafolio (Hero, Demos, Contact…)
   ├─ styles/global.css    ← 2.166 líneas: tokens + portafolio + utilidades
   └─ pages/demos/         ← cada demo: un `.tsx` + un `.css` propio
```

**Lo bueno del modelo:** cada demo es autónoma (un `.tsx` + un `.css`), el CSS se carga por ruta vía Vite, el contenido vive en datos tipados y los metadatos se resuelven sin dependencias añadidas.

**Lo que no escala:** no hay primitivas compartidas entre demos, `global.css` mezcla tokens, portafolio y utilidades de demo, y los tres CSS de demo repiten patrones de botón, tarjeta y grid con nombres distintos. Tampoco existe una capa de imágenes: la “fotografía” es CSS.

---

## 4. Diagnóstico por dimensión

### 4.1 Identidad visual — el hallazgo principal

Las tres demos usan la **misma arquitectura de página**: hero de dos columnas con titular + CTA + composición geométrica a la derecha, franja de features, grilla de tarjetas, pasos numerados, testimonio, bloque de contacto. Cambian color, tipografía y radio de borde, no el ritmo. Evidencia: `Barberia.tsx`, `Dental.tsx`, `Pasteleria.tsx` (`<section>` con el mismo orden) y las capturas en `.shots/review/`.

En Miga & Miel, además:

- La “fotografía” es una torta dibujada con rectángulos redondeados (`.mm-cake`, `.mm-layer`, `pasteleria.css:234-304`) y las tarjetas de producto son degradados (`.mm-shot.p1…p4`, `pasteleria.css:441-463`). Es el punto donde la demo deja de parecer un negocio real.
- La paleta real no es la del brief: usa marrón `#3b2314` / `#b45309` (`pasteleria.css:4-11`), cuando el brief propone crema, coral, rosa, miel y pistacho. La demo se ve “café”, no “coral + miel”.
- La tipografía (Fraunces + Inter + JetBrains Mono) es la misma familia de recursos que usa Corte Real para sus titulares; dos demos comparten registro editorial.
- La composición es simétrica y centrada: no hay asimetría, stickers ni tensión editorial, que es justo lo que pide la dirección B.

### 4.2 Estructura y contenido

- **Falta una sección de personalizados** en Miga & Miel, que el brief pide explícitamente (tortas de evento, mesas dulces, box regalo).
- **Falta galería** como tal: hay una sola cita y cuatro productos. El brief pide collage de producto, detalle y empaque.
- **El FAQ no existe** en la demo: el brief pide anticipación, personalizados, despacho y pagos.
- **La sección de valor** está reducida a una franja de cuatro palabras (`mm-strip`), sin explicar ingredientes, personalización ni coordinación.
- **El flujo “cómo pedir”** existe (3 pasos) pero describe condiciones comerciales (50 %, despacho en Santiago) como si fueran operativas.

### 4.3 Honestidad comercial (riesgo alto)

| Hallazgo | Ubicación | Riesgo |
| --- | --- | --- |
| Dirección y horario inventados con formato de dato real | `Pasteleria.tsx:218-232` (“Av. Providencia 1890, local 2”, “Mar a Sáb 10:00–19:00”) | Un visitante puede creer que existe un local. El brief lo prohíbe. |
| Testimonio ficticio | `Pasteleria.tsx:179-193` | Aunque dice “Ejemplo”, el brief pide reemplazarlo por señales honestas. |
| Precios sin “referencial” en tarjetas | `Pasteleria.tsx:9,16,23,30` + `mm-link` | Sugieren oferta vigente. |
| “50 % para reservar” | `Pasteleria.tsx:231` | Condición comercial inventada. |
| CTA “Encargar” apunta a `#contacto`, que lleva al WhatsApp del desarrollador | `Pasteleria.tsx:79, 99, 151` | El botón promete un pedido y entrega otra cosa. |

Lo bien resuelto, y que conviene conservar: `DemoNotice` (aviso permanente de demo), `DemoBadge`, la nota “Sitio de demostración: no recibe encargos reales” (`Pasteleria.tsx:214`) y el formulario del portafolio que compone un mensaje real de WhatsApp sin guardar datos (`Contact.tsx:30-54`).

### 4.4 Accesibilidad

| Hallazgo | Evidencia | Impacto |
| --- | --- | --- |
| Navegación desaparece en móvil sin alternativa | `.mm-links{display:none}` (`pasteleria.css:688`), `.cr-links` (`barberia.css:596`), `.da-links` (`dental.css:728`); ningún toggle en los tres `.tsx` | Usuarios móviles pierden navegación; incumple el brief (“menú móvil fluido”). |
| Sin `prefers-reduced-motion` por demo | Solo existe en `global.css:2149`; los CSS de demo animan hover/transform propios | Afecta a quien pide menos movimiento (se mitiga parcialmente por la regla global de `transition-duration`). |
| Contraste del CTA actual medido | `--mm-accent:#b45309` con texto `#fff8ef` = **4,76:1** | Pasa AA por poco: cualquier ajuste de tono lo deja fuera. |
| Foco visible genérico | `global.css:97` (`:focus-visible` global) | Funciona, pero no se adapta a fondos oscuros como el bloque de contacto. |
| Imágenes decorativas sin alternativa textual | `.mm-cake` con `aria-hidden="true"` | Correcto hoy; al poner fotos reales habrá que definir `alt` con criterio. |

Lo positivo: `skip-link` global, `main id="contenido"`, `role="note"` en el aviso, `aria-live` en el formulario del portafolio y HTML semántico consistente.

### 4.5 Rendimiento

Línea base medida sobre el build actual (`landing_page/dist/assets`):

| Recurso | Peso | Gzip |
| --- | --- | --- |
| JS (todas las rutas, un solo bundle) | 308,1 KB | 95,3 KB |
| CSS (todas las rutas, un solo archivo) | 54,6 KB | 11,0 KB |
| Tipografías | 4 familias desde Google Fonts (Fraunces variable, Inter, Sora, JetBrains Mono) | Bloqueante en `<head>`, sin `preload`, sin subsetting propio |
| Imágenes | capturas PNG de 1440 px en `/shots` (157–307 KB) | Sin AVIF/WebP ni `srcset` |

Riesgos: el `<link>` a Google Fonts en `index.html:30-35` es render-blocking y arrastra familias que cada demo no necesita; el aviso `DemoNotice` y el header se repintan con `backdrop-filter`; no hay presupuesto de imagen declarado.

### 4.6 SEO y metadatos

`usePageMeta` resuelve `title`, `description`, `og:title`, `og:description`, `og:url` y `canonical` por ruta (bien). Faltan: `og:image` por demo (todas comparten `og.png`), `twitter:title/description` por ruta y datos estructurados `LocalBusiness`/`Product` (opcional, y delicado en una demo ficticia: no conviene publicar `LocalBusiness` de un negocio que no existe).

### 4.7 Mantenimiento y proceso

- Sin tests ni lint: la única red de seguridad es `tsc -b`.
- Sin `docs/` de decisiones hasta ahora; el plan maestro y el brief son el primer paso correcto.
- `global.css` concentra 36,7 KB; los tres CSS de demo suman 34 KB con duplicación de patrones.
- El repositorio tiene rama única `main` y despliegue directo: el plan pide ramas + PR por etapa. **Cambio de proceso necesario.**

---

## 5. Qué conservar, qué mejorar, qué reestructurar

### Conservar
- Stack y configuración de Vite/TypeScript; no hay razón para migrar.
- Rutas `/demos/<slug>` y el fallback `404.html` de GitHub Pages.
- `usePageMeta`, `DemoNotice`, `DemoBadge`, `Reveal` y el patrón de contenido tipado en `src/data`.
- El formulario del portafolio (`Contact.tsx`): compone un mensaje real y es honesto sobre lo que hace.
- `site.ts` como única fuente de contacto, con WhatsApp ya configurado.
- El workflow de despliegue (añadiendo verificación de build en PR).

### Mejorar
- **Dirección de arte por demo:** paleta, tipografía, composición y fotografía propias (Miga & Miel primero).
- **Imágenes:** sustituir CSS por fotografía con licencia documentada, optimizada y con `srcset`.
- **Navegación móvil:** menú real en las tres demos.
- **Copy y honestidad:** eliminar dirección/horario/precios ficticios presentados como reales; reemplazar testimonio por FAQ y aclaraciones.
- **Metadatos por demo:** imagen OG propia y `twitter:*`.
- **Tipografías:** autoalojadas, por ruta, con `preload` y subset latino.

### Reestructurar
- **Capa de primitivas compartidas** (`Button`, `Section`, `Container`, `Accordion`, `PhotoFrame`) para no repetir estilos por demo, **sin** uniformar la estética.
- **Tokens por demo** en un archivo propio (`tokens.css` dentro de cada carpeta de demo) en lugar de mezclar en `global.css`.
- **Proceso:** rama por tarea, PR con capturas, revisión y despliegue desde `main` solo tras aprobación.
- **Presupuesto de rendimiento explícito** en el PR (JS, CSS, fuentes, imágenes).

---

## 6. Riesgos

| Riesgo | Probabilidad | Mitigación |
| --- | --- | --- |
| La nueva identidad no convenza al propietario y haya que rehacer | Media | Mockup estático aprobado antes de tocar código (esta entrega). |
| Licencias de fotografía mal documentadas | Media | Registro `docs/assets-licencias.md` por archivo, origen y licencia; solo Unsplash/Pexels/propias. |
| Subida de peso por imágenes y fuentes | Alta | Presupuesto por página y medición antes/después (#6). |
| Romper GitHub Pages al cambiar rutas o assets | Baja | Rutas intactas, PR con preview local, verificación post-deploy. |
| Exceso de trabajo en una sola demo | Media | Fase 1 acotada a Miga & Miel; las otras dos demos se abordan después con su propio brief. |

---

## 7. Mapa de tareas

| Trabajo | Tarea existente | Acción |
| --- | --- | --- |
| Planificación y aprobación de diseño | **#32** | Se actualiza con esta auditoría y la propuesta |
| Fotografías con licencia y optimización | **#14** | Se reutiliza; se le agrega el *shot list* de Miga & Miel |
| Revisión en celular real | **#15** | Se reutiliza; se le agrega el checklist móvil de la nueva demo |
| Lighthouse y accesibilidad | **#6** | Se reutiliza; se le agregan los objetivos por demo |
| Fiverr | **#28** | Sin cambios; depende del cierre de Fase 1 |
| Base técnica compartida (fuentes, tokens, primitivas) | — | **Nueva tarea** |
| Implementación de Miga & Miel | — | **Nueva tarea** |
| Corte Real y Dental Aurora | — | **Nueva tarea** (bloqueada hasta cerrar Miga & Miel) |

No se crean tareas para WhatsApp (#2), textos (#3), capturas (#4), LinkedIn (#5) ni caso de estudio (#25): siguen vigentes y se enlazan desde el Project.
