import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import type { Product } from "../types/product"
import { getProductById } from "../services/productService"

function ProductDetails() {

  const [productDetail, setProductDetail] = useState<Product>()
  const { id } = useParams();
  const productId = Number(id);

  useEffect(() => {
    async function sendParams() {
    const data = await getProductById(productId);
    setProductDetail(data);
  }
    sendParams();
  }, [productId])

  if (!productDetail) {
    return <h2>Loading...</h2>
  }


  return (
    <div>
      <img src={productDetail.image} alt={productDetail.title} />

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
  )
}

export default ProductDetails
