# Plan maestro — Rediseño comercial del portafolio Carturitos
**Estado:** Directrices aprobadas para planificación; no autoriza cambios de código ni despliegues del rediseño antes de la aprobación visual.
**Responsabilidades:** El propietario define alcance y aprueba diseños. ChatGPT ayuda con estrategia, dirección creativa y criterios de aceptación. DeepSeek Agent analiza, planifica, implementa, prueba y gestiona GitHub Issues/Projects/Actions, respetando aprobaciones. La pareja del propietario apoya ocasionalmente en comunicación comercial en inglés; no es dependencia de desarrollo.

## Objetivo
Transformar carturitos.github.io de una colección de demos que parecen plantillas en un portafolio comercial profesional que demuestre **«soluciones bonitas»**: diseño distintivo, usabilidad real, rendimiento, accesibilidad y llamadas a la acción honestas. El cliente debe poder identificar el problema que resuelve cada experiencia, explorar una demo real y comprender los servicios.

## Alcance y orden
- **Fase 1 (ahora):** tres landing pages demostrativas: Miga & Miel (primera), Corte Real (barbería), Dental Aurora (clínica dental). Cada una tendrá personalidad de marca, arquitectura visual, contenido y experiencia diferenciados, no solo paletas distintas.
- **Fase 2 (después):** sitios con funcionalidades, cuando existan casos demostrables.
- **Fase 3 (después):** soluciones personalizadas; incorporación de Login Project cuando esté suficientemente completo y presentable.
- **Comercial:** primero Fiverr, después Workana; el portafolio será material de venta. No distraer esta etapa con aplicaciones complejas ni nuevas demos.

## Estructura comercial del portafolio
La página principal deberá comunicar: a quién se ayuda, qué problema se resuelve, servicios realmente disponibles, demostraciones navegables, proceso de trabajo, presentación profesional y contacto. Separar capacidades actuales de proyectos futuros. Declarar que las tres marcas son conceptos de demostración; no presentarlas como clientes reales ni inventar testimonios, resultados, equipos, precios definitivos o reservas operativas. Mantener información privada y de planificación fuera de la web pública.

## Reglas transversales de las demos
1. **Identidad auténtica:** logo/tratamiento de marca, fotografía coherente, tipografía, color, composición y ritmo visual definidos por rubro. Evitar la misma estructura de hero/tarjetas/FAQ repetida.
2. **Solución comercial:** CTA claro y operativo; especificar cuando un botón prepara consulta de WhatsApp o correo en vez de confirmar una reserva/pedido. No simular backend ni inventar integraciones.
3. **Calidad:** responsive móvil/tablet/escritorio; navegación con teclado, foco visible, HTML semántico, contraste adecuado, textos alternativos, reduced motion y mensajes de estado accesibles.
4. **Rendimiento:** imágenes con licencia apropiada, tamaño optimizado y carga diferida cuando corresponda; animaciones eficientes; medir antes/después; SEO básico y metadatos por demo.
5. **Contenido:** textos específicos del rubro, productos/servicios coherentes y datos claramente marcados como demostrativos cuando sean inventados. No usar reseñas ficticias como auténticas.
6. **Operación:** mantener rutas y despliegue GitHub Pages sin roturas; trabajar en ramas/PR por etapas, con revisión, pruebas y comprobación de GitHub Actions.
7. **Mantenimiento:** reutilizar utilidades técnicas cuando convenga, pero no uniformar diseño ni forzar una reestructuración de carpetas sin antes estudiar el proyecto real.

## Flujo de ejecución para DeepSeek
1. Leer este documento y `docs/brief-miga-miel.md`.
2. Auditar el repositorio, stack, rutas, componentes existentes, assets, GitHub Pages y GitHub Issues; listar qué puede conservarse y qué conviene transformar.
3. Proponer un plan técnico por tareas, con dependencias, entregables y criterios de aceptación; reutilizar issues existentes (#14 imágenes, #15 móvil, #28 Fiverr) y evitar duplicados. Reflejarlo en GitHub Projects si la integración lo permite.
4. **Antes de cambiar código:** presentar diseño de Miga & Miel al propietario (wireframe desktop/móvil, tratamiento de marca, referencias fotográficas, tipografías, paleta, lista de secciones y CTA). Solicitar aprobación explícita.
5. Tras aprobarse: implementar Miga & Miel en rama, pruebas y PR; validar experiencia real y publicar solo con aprobación.
6. Repetir el ciclo creativo y técnico para Corte Real y Dental Aurora, cada una con identidad propia.
7. Actualizar la presentación de Carturitos con capturas reales y acceso visible a cada demo; luego preparar el material de Fiverr.

## Criterios de aceptación de la fase 1
- Tres demos visualmente distintas, funcionales, accesibles, rápidas y adaptadas a móvil.
- El usuario puede comprender oferta y completar la acción de contacto que efectivamente esté implementada.
- No hay botones decorativos que aparenten funcionar ni testimonios engañosos.
- La página principal presenta las demos como proyectos conceptuales y los servicios como ofertas claras.
- Sin errores de build ni regresiones importantes en GitHub Pages; revisión manual en móvil real.
- Documentar qué es demostrativo y qué requiere configuración del futuro cliente.

## Coordinación y decisiones
- DeepSeek no debe reinterpretar silenciosamente las decisiones visuales aprobadas.
- Si una decisión técnica pone en riesgo rendimiento, accesibilidad, mantenimiento o compatibilidad, explicar alternativa con trade-offs antes de ejecutarla.
- Registrar decisiones y cambios importantes en el PR o en un documento de decisiones.
- El brief específico rige la identidad de Miga & Miel; este documento rige el proyecto global.
