import type { Product } from "../types/product"
import { useNavigate } from "react-router-dom"

function ProductCard({ product , onDelete }: { product: Product, onDelete:(id:number) => void }) {

  const navigate = useNavigate();
  function showDetails() {
    navigate("/products/" + product.id);
  }

  return (
    <div className="product-card" onClick={showDetails}>
      <img src={product.image} alt={product.title} />

      <h3 className="product-card__title">
        {product.title}
      </h3>

      <p className="product-card__price">
        {product.price} $
      </p>

      <p className="product-card__category">
        {product.category}
      </p>
      <div className="product-card__actions">
        <button
        className="btn btn--secondary"
        onClick={(e)=> {
          e.stopPropagation();
          navigate(`/edit-product/${product.id}`)
        }}>Edit</button>

        <button
          className="btn btn--danger"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(product.id)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ProductCard
