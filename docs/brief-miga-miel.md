# Brief creativo y funcional — Miga & Miel (Demo 01)
**Fase:** definición creativa; implementar solo tras aprobación del diseño.
**Dirección aprobada:** B. **Moderna y expresiva**.

## Identidad
Pastelería conceptual joven, cálida, contemporánea, apetecible y memorable. Dulce sin verse infantil; expresiva sin resultar caótica. Objetivo del visitante: descubrir productos, confiar en la propuesta y enviar una consulta de pedido.

**Posicionamiento:** pastelería artesanal con diseño y personalidad, orientada a regalos y celebraciones. **Personalidad:** alegre, cercana, cuidada y visualmente audaz.

## Sistema visual preliminar (a validar en el mockup)
Paleta propuesta:
- crema base `#FFF6E9`
- coral protagonista `#FF6B63`
- rosa pastel `#FFC4D6`
- amarillo miel `#F5BD55`
- chocolate para texto `#37241F`
- pistacho de acento `#DDE8B5`
Son puntos de partida, no un requisito de usar todos por igual. Comprobar contraste real (especialmente CTA).

Tipografía: display redondeada/expresiva con carácter en titulares + sans contemporánea muy legible para texto, controles y precios. Seleccionar familias/licencias y proponer alternativas sin sacrificar rendimiento.

Fotografía: primeros planos apetitosos, texturas de masas/cremas/frutas, luz suave, empaques y manos ocasionales, fondos coherentes con paleta. Seleccionar imágenes propias, con licencia o de bancos permitidos y documentar procedencia. Evitar fotos de stock incoherentes, productos falsamente atribuidos a clientes reales y material sin derechos.

Lenguaje gráfico: composición editorial asimétrica, bloques cromáticos intencionales, formas orgánicas, etiquetas/stickers discretos y tarjetas con geometría amable. **No replicar plantilla de Corte Real o Dental Aurora.**

Motion: entradas suaves al scroll, microinteracciones de botones/tarjetas, menú móvil fluido, elementos visuales ligeros; respetar `prefers-reduced-motion`, impedir saltos de layout y evitar parallax pesado.

## Arquitectura de contenido propuesta
1. **Hero:** titular «Hecho para celebrar lo rico de cada momento», bajada breve y fotografía de producto protagonista; CTA principal «Ver productos», secundario «Hacer un pedido».
2. **Valor:** ingredientes seleccionados, personalización, celebraciones y coordinación de retiro/entrega (como propuesta conceptual, no promesas logísticas comprobadas).
3. **Productos destacados:** 4–6 opciones (tortas, cupcakes, galletas, box regalo, postres, mesas dulces), fotos, nombres, descripciones breves y CTA «Consultar»; precios solo si explícitamente referenciales y consistentes.
4. **Personalizados:** tortas/eventos/regalos con contenido emocional y CTA a consulta.
5. **Galería:** collage contenido de producto, detalles y empaques; sin fotos de clientes reales no autorizadas.
6. **Cómo pedir:** elegir producto → indicar fecha y detalles → consultar disponibilidad → coordinar entrega/retiro. No sugerir reserva confirmada.
7. **Confianza:** reemplazar los testimonios ficticios por señales demostrativas honestas (proceso, preguntas frecuentes, aclaración «Concepto de demostración») hasta contar con reseñas auténticas y autorizadas.
8. **FAQ:** anticipación, pedidos personalizados, despacho, medios de pago; respuestas demostrativas no aseveraciones reales sin soporte.
9. **CTA final:** «¿Tienes una idea dulce en mente?» y una acción de consulta verdaderamente operativa para la demo.
10. **Footer:** navegación, declaración visible de concepto demo y vías de contacto reales del desarrollador si se usan; no inventar WhatsApp, horarios o ubicación de una pastelería real.

**Menú sugerido:** Inicio · Productos · Personalizados · Cómo pedir · Contacto. No saturar navegación.

## Interacciones y honestidad funcional
- Un botón «Hacer un pedido» debe llevar a un mecanismo real de consulta (por ejemplo, mensaje de WhatsApp precompuesto **solo si hay destinatario válido autorizado**; si no, formulario de demostración sin transmisión y etiquetado claramente, o enlace al contacto profesional del desarrollador con contexto).
- No recoger ni almacenar datos reales sin infraestructura, consentimiento, política y propósito claros.
- Formularios con validación, estados y mensajes veraces; no mostrar «pedido enviado» si no se envió.
- No fake social proof, reseñas inventadas, disponibilidad ficticia o carrito de compra simulado como operativo.

## Entregables ANTES de codificar
A. Moodboard cohesivo y propuesta de uso de fotos.
B. Wireframe desktop y móvil; orden definitivo de secciones.
C. Hero y al menos una tarjeta producto a nivel de diseño visual.
D. Paleta/token visual, tipografía, componentes, animaciones e interacción de CTA.
E. Copys iniciales reales para el contexto conceptual y detalle del contacto en modo demo.
F. Justificación breve de cómo este diseño se diferencia de las otras dos demos.
**Punto de control:** presentar A–F al propietario y esperar aprobación explícita antes de modificar código.

## Condiciones para dar por terminado el desarrollo (posteriores)
- Buena jerarquía, fotografías nítidas y optimizadas, CTA funcional y comunicación inequívoca de demo.
- Responsive sin desbordes; teclado, foco, contraste, alt y reduced-motion.
- Rendimiento medido, build exitoso, comprobación de rutas GitHub Pages y revisión en móvil.
- Capturas finales listas para el portafolio; PR documentado y revisado.
