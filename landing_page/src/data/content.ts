export type Step = {
  number: string
  title: string
  description: string
  meta: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Conversamos',
    description:
      'Una llamada o chat de 15 minutos, sin costo. Entiendo tu negocio, qué debe lograr la web y qué tienes hoy.',
    meta: 'Día 0',
  },
  {
    number: '02',
    title: 'Propuesta clara',
    description:
      'Recibes alcance, precio fijo, plazo y la lista de lo que necesito de ti. Sin letra chica ni cobros sorpresa.',
    meta: 'Día 1',
  },
  {
    number: '03',
    title: 'Construyo con avances',
    description:
      'Ves el sitio creciendo desde el primer día con un enlace de avance. Dos rondas de ajustes incluidas.',
    meta: 'Día 2 a 7',
  },
  {
    number: '04',
    title: 'Entrego y acompaño',
    description:
      'Publicamos en tu dominio, te explico cómo actualizarlo y quedan 30 días de soporte para lo que salga.',
    meta: 'Día 8',
  },
]

export type FaqItem = { question: string; answer: string }

export const faqs: FaqItem[] = [
  {
    question: '¿Cuánto demora una landing page?',
    answer:
      'Entre 5 y 7 días hábiles desde que tengo tus textos, logo e imágenes. Si necesitas que te ayude a escribir el contenido, agregamos 2 días más.',
  },
  {
    question: '¿Qué necesitas de mi parte?',
    answer:
      'Logo, fotos y una idea de qué quieres lograr. Si no tienes textos, te ayudo a estructurarlos: no necesitas llegar con todo resuelto.',
  },
  {
    question: '¿Cómo se paga?',
    answer:
      '50 % para reservar el cupo y comenzar, 50 % al aprobar la entrega. Transferencia bancaria o pago por plataforma, con boleta de honorarios.',
  },
  {
    question: '¿El hosting y el dominio están incluidos?',
    answer:
      'No están incluidos, pero te ayudo a configurarlos. Para landing pages el hosting puede ser gratuito (GitHub Pages o Netlify); un dominio .cl cuesta alrededor de $10.000 al año.',
  },
  {
    question: '¿Puedo pedir cambios después de ver el diseño?',
    answer:
      'Sí. Cada proyecto incluye dos rondas de ajustes sobre la propuesta aprobada. Los cambios de alcance se cotizan aparte y siempre se acuerdan antes.',
  },
  {
    question: '¿La web queda siendo mía?',
    answer:
      'Sí. El código y el dominio quedan a tu nombre, y te entrego los accesos. No quedas amarrado a mí para siempre.',
  },
  {
    question: '¿Trabajas con boleta o factura?',
    answer:
      'Sí, emito boleta de honorarios. Si necesitas factura, se puede coordinar.',
  },
  {
    question: '¿Qué pasa si algo falla después de la entrega?',
    answer:
      'Tienes 30 días de soporte incluido para corregir errores del trabajo entregado. Después de eso puedo seguir con una mantención mensual opcional.',
  },
]
