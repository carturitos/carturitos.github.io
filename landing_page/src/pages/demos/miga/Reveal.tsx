import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'li' | 'figure' | 'article'
  delay?: number
}

/**
 * Aparición suave al entrar en pantalla.
 *
 * El contenido es visible por defecto: si el observer no dispara (o el usuario
 * pidió menos movimiento), un temporizador lo muestra igual. Nunca se deja
 * contenido invisible por una animación.
 */
export function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    )

    io.observe(el)
    const fallback = window.setTimeout(() => setShown(true), 1200)

    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`mm-reveal${shown ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
