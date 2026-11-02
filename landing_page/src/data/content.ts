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
    meta: 'Consulta inicial',
  },
  {
    number: '02',
    title: 'Propuesta clara',
    description:
      'Recibes alcance, precio fijo, plazo y la lista de lo que necesito de ti. Sin letra chica ni cobros sorpresa.',
    meta: 'Antes de comenzar',
  },
  {
    number: '03',
    title: 'Construyo con avances',
    description:
      'Revisamos avances y ajustes según los hitos definidos en la propuesta.',
    meta: 'Según calendario acordado',
  },
  {
    number: '04',
    title: 'Entrego y acompaño',
    description:
      'Acordamos publicación, accesos e instrucciones de mantenimiento. El soporte se define en la propuesta.',
    meta: 'Cierre acordado',
  },
]

export type FaqItem = { question: string; answer: string }

export const faqs: FaqItem[] = [
  {
    question: '¿Cuánto demora una landing page?',
    answer:
      'El plazo está en definición y depende del alcance, los contenidos disponibles y mi disponibilidad. Se confirma por escrito antes de comenzar.',
  },
  {
    question: '¿Qué necesitas de mi parte?',
    answer:
      'Logo, fotos y una idea de qué quieres lograr. Si no tienes textos, te ayudo a estructurarlos: no necesitas llegar con todo resuelto.',
  },
  {
    question: '¿Cómo se paga?',
    answer:
      'La modalidad de pago y sus condiciones se definirán por escrito antes de comenzar. La propuesta freelance está en preparación.',
  },
  {
    question: '¿El hosting y el dominio están incluidos?',
    answer:
      'Dominio y hosting se acuerdan por separado. La alternativa de publicación depende del alcance y de las condiciones del proveedor elegido.',
  },
  {
    question: '¿Puedo pedir cambios después de ver el diseño?',
    answer:
      'Los ajustes incluidos se definen en cada propuesta. Un cambio de alcance requiere acuerdo antes de implementarlo.',
  },
  {
    question: '¿La web queda siendo mía?',
    answer:
      'La entrega de código, accesos, licencias de terceros y dominio queda definida por escrito antes de comenzar.',
  },
  {
    question: '¿Trabajas con boleta o factura?',
    answer:
      'La modalidad de cobro y el comprobante aplicable se confirmarán antes de formalizar un trabajo.',
  },
  {
    question: '¿Qué pasa si algo falla después de la entrega?',
    answer:
      'El alcance, duración y canal de soporte se acuerdan en la propuesta. No hay un período de soporte fijo anunciado en esta etapa.',
  },
]
