import { useEffect, useRef } from 'react'
import type { Product } from './data'

type ProductDialogProps = {
  product: Product | null
  price: string
  onClose: () => void
  onConsult: (product: Product) => void
}

/**
 * Detalle de producto en un `<dialog>` nativo: el navegador se encarga del
 * atrapado de foco, del cierre con Esc y de devolver el foco al disparador.
 */
export function ProductDialog({ product, price, onClose, onConsult }: ProductDialogProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return

    if (product && !dialog.open) dialog.showModal()
    if (!product && dialog.open) dialog.close()
  }, [product])

  return (
    <dialog
      ref={ref}
      className="mm-detail"
      aria-labelledby="mm-detail-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose()
      }}
    >
      {product && (
        <>
          <button type="button" className="mm-detail-close" onClick={onClose} aria-label="Cerrar detalle">
            <span aria-hidden="true">×</span>
          </button>

          <div className="mm-detail-photo">
            <img
              src={product.image.src}
              alt={product.image.alt}
              width={product.image.width}
              height={product.image.height}
            />
          </div>

          <div className="mm-detail-body">
            <span className="mm-detail-tag">{product.tag}</span>
            <h3 id="mm-detail-title">{product.name}</h3>
            <p>{product.description}</p>

            <dl className="mm-detail-data">
              <div>
                <dt>Porciones</dt>
                <dd>{product.servings}</dd>
              </div>
              <div>
                <dt>Formato</dt>
                <dd>{product.format}</dd>
              </div>
              <div>
                <dt>Precio</dt>
                <dd>{price}</dd>
              </div>
            </dl>

            <button type="button" className="mm-btn mm-btn-coral mm-btn-block" onClick={() => onConsult(product)}>
              Preparar consulta
            </button>
            <p className="mm-note">La consulta se escribe a Carturitos, no a la pastelería.</p>
          </div>
        </>
      )}
    </dialog>
  )
}
