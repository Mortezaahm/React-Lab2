import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import type { Product } from "../types/product"
import { getProductById } from "../services/productService"

function ProductDetails() {

  const [productDetail, setProductDetail] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { id } = useParams();
  const productId = Number(id);
  const invalidProductId = isNaN(productId);

  useEffect(() => {
    if (invalidProductId) {
      return
    }

    async function sendParams() {
      try {
        setLoading(true)
        const data = await getProductById(productId);

        if (!data) {
          setError("Product not found")
          return
        }
        setProductDetail(data);
      } catch {
        setError("Failed to load product")
      } finally {
        setLoading(false)
      }
    }

    sendParams();
  }, [productId, invalidProductId])

  if (invalidProductId) return <h2>Invalid product id</h2>
  if (loading) {return <h2>Loading...</h2>}
  if (error) return <h2>{error}</h2>
  if (!productDetail) return null

  return (
    <div className="product-details">
      <img src={productDetail.image} alt={productDetail.title} />

      <div className="product-details__info">
          <h3 className="product-card__title">
          {productDetail.title}
          </h3>

        <p className="product-card__category">
          {productDetail.description}
        </p>

        <p className="product-card__price">
          {productDetail.price} $
        </p>

        <p className="product-card__category">
          {productDetail.category}
        </p>
      </div>
    </div>
  )
}

export default ProductDetails
