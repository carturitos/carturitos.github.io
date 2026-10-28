import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li'
}

/**
 * Envoltorio semántico para bloques de contenido.
 *
 * Deliberadamente no oculta contenido con animaciones ligadas al scroll: si el
 * observer falla o el navegador no lo soporta, la página debe verse igual. La
 * animación de entrada vive solo en el hero, que siempre está en pantalla.
 */
export function Reveal({ children, className = '', as = 'div' }: RevealProps) {
  const Tag = as

  return <Tag className={className}>{children}</Tag>
}
