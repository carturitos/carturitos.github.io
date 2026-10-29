export type Product = {
  id: string
  name: string
  tag: string
  price: number
  description: string
  servings: string
  format: string
  image: {
    src: string
    small: string
    width: number
    height: number
    alt: string
  }
  meta: string[]
}

export const products: Product[] = [
  {
    id: 'choco',
    name: 'Torta de chocolate y sal de mar',
    tag: 'La favorita',
    price: 18000,
    description:
      'Bizcocho húmedo de cacao, ganache 70 % y una pizca de sal de mar que equilibra el dulzor. Se termina con virutas de chocolate.',
    servings: '10 a 12 porciones',
    format: 'Redonda, 20 cm',
    image: {
      src: '/photos/miga-miel/prod-choco.webp',
      small: '/photos/miga-miel/prod-choco-sm.webp',
      width: 800,
      height: 960,
      alt: 'Porción de torta de chocolate con ganache',
    },
    meta: ['10 a 12 porciones', 'Chocolate 70 %'],
  },
  {
    id: 'frambuesa',
    name: 'Torta de frambuesa',
    tag: 'De temporada',
    price: 22000,
    description:
      'Vainilla, frambuesas frescas y chantilly. La fruta se agrega el mismo día para que no se humedezca el bizcocho.',
    servings: '8 a 10 porciones',
    format: 'Redonda, 18 cm',
    image: {
      src: '/photos/miga-miel/prod-berry.webp',
      small: '/photos/miga-miel/prod-berry-sm.webp',
      width: 900,
      height: 562,
      alt: 'Torta de frambuesa cubierta de crema y frutos rojos',
    },
    meta: [],
  },
  {
    id: 'lemon',
    name: 'Lemon pie',
    tag: 'Clásica',
    price: 15000,
    description:
      'Masa quebrada de mantequilla, curd de limón y merengue tostado al momento. Se sirve fría.',
    servings: '8 porciones',
    format: 'Tarta, 22 cm',
    image: {
      src: '/photos/miga-miel/prod-lemon.webp',
      small: '/photos/miga-miel/prod-lemon-sm.webp',
      width: 900,
      height: 562,
      alt: 'Lemon pie con merengue tostado',
    },
    meta: [],
  },
  {
    id: 'box',
    name: 'Box regalo',
    tag: 'Para regalar',
    price: 12000,
    description:
      'Seis piezas surtidas: mini tartas, alfajores y brownies, en caja de cartón con cordel y tarjeta.',
    servings: '6 piezas',
    format: 'Caja 16 × 12 cm',
    image: {
      src: '/photos/miga-miel/prod-box.webp',
      small: '/photos/miga-miel/prod-box-sm.webp',
      width: 900,
      height: 562,
      alt: 'Caja de regalo con brownies atada con cordel',
    },
    meta: [],
  },
  {
    id: 'cupcakes',
    name: 'Cupcakes (6)',
    tag: 'Para compartir',
    price: 9000,
    description:
      'Vainilla o chocolate, con buttercream y terminación a elección: fruta, chocolate o clásica.',
    servings: '6 unidades',
    format: 'Caja para 6',
    image: {
      src: '/photos/miga-miel/prod-cupcakes.webp',
      small: '/photos/miga-miel/prod-cupcakes-sm.webp',
      width: 900,
      height: 562,
      alt: 'Cupcakes con buttercream y arándanos',
    },
    meta: [],
  },
]

export const steps = [
  { title: 'Elige', text: 'Revisa el catálogo o cuéntanos qué tienes en mente.' },
  {
    title: 'Cuéntanos la fecha',
    text: 'Día, cantidad de personas y referencias que te gusten.',
  },
  {
    title: 'Confirmamos',
    text: 'Te respondemos con valor y opciones. La fecha se reserva al confirmar.',
  },
  { title: 'Retira o recibe', text: 'Coordinamos entrega o retiro para el día acordado.' },
]

export const faqs = [
  {
    q: '¿Cómo se encarga una pieza?',
    a: 'Eliges del catálogo o cuentas tu idea. Definimos sabor, tamaño y decoración, y coordinamos la fecha antes de confirmar.',
  },
  {
    q: '¿Con cuánta anticipación conviene escribir?',
    a: 'Depende de la pieza y de la fecha: las celebraciones grandes piden más margen. Con tu fecha a la vista te confirmamos disponibilidad.',
  },
  {
    q: '¿Hacen versiones sin gluten o sin lactosa?',
    a: 'Sí, coordinando antes. Eso sí: la cocina también trabaja con harina de trigo, así que lo decimos antes de confirmar.',
  },
  {
    q: '¿Hay entrega o solo retiro?',
    a: 'Ambas se coordinan al confirmar el encargo, según la comuna y el tamaño de la pieza.',
  },
]

export type NeedOption = { id: string; label: string; need: string }

export const needOptions: NeedOption[] = [
  { id: 'landing', label: 'Landing page', need: 'una landing page' },
  { id: 'catalogo', label: 'Catálogo', need: 'un catálogo o tienda simple' },
  { id: 'reservas', label: 'Reservas', need: 'reservas o agenda' },
  { id: 'nose', label: 'Aún no sé', need: 'algo que todavía no tengo claro' },
]

export const gallery = [
  {
    id: 'g1',
    src: '/photos/miga-miel/gal-tier.webp',
    small: '/photos/miga-miel/gal-tier-sm.webp',
    width: 700,
    height: 875,
    alt: 'Torta de tres pisos con flores blancas',
    caption: 'Celebración · tres pisos',
  },
  {
    id: 'g2',
    src: '/photos/miga-miel/gal-berry.webp',
    small: '/photos/miga-miel/gal-berry-sm.webp',
    width: 700,
    height: 875,
    alt: 'Vista superior de una torta con frambuesas y arándanos',
    caption: 'Frambuesa y crema',
  },
  {
    id: 'g3',
    src: '/photos/miga-miel/gal-macarons.webp',
    small: '/photos/miga-miel/gal-macarons-sm.webp',
    width: 600,
    height: 600,
    alt: 'Macarons pastel sobre superficie blanca',
    caption: 'Macarons',
  },
  {
    id: 'g4',
    src: '/photos/miga-miel/gal-choco.webp',
    small: '/photos/miga-miel/gal-choco-sm.webp',
    width: 600,
    height: 600,
    alt: 'Tabletas de chocolate con pistacho',
    caption: 'Chocolate y pistacho',
  },
  {
    id: 'g5',
    src: '/photos/miga-miel/gal-slice.webp',
    small: '/photos/miga-miel/gal-slice-sm.webp',
    width: 600,
    height: 600,
    alt: 'Porción de bizcocho con crema sobre plato',
    caption: 'Bizcocho del día',
  },
]

export const priceFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
})
