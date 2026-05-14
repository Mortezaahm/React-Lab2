import { useState, useEffect } from "react"
import { getAllProducts, deleteProduct } from "../services/productService"
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function getAll () {
      try {
        setLoading(true)
        const data = await getAllProducts();
        setProducts(data)
      } catch {
        setError("Failed to load products")
      } finally {
        setLoading(false)
      }
    }
    getAll();
  }, [])

  async function handleDeleteProduct(id:number) {
     try {
      await deleteProduct(id);
      setProducts(prev => prev.filter(product => product.id !== id))
     } catch (error) {
      console.log(error)
    }
  }

  if (loading) {return <h2>Loading...</h2>}
  if (error) return <h2>{error}</h2>

  return (
    <div className="container">
          <div className="grid-3">
            {products.map((product) => (
                <ProductCard
                   key={product.id}
                   product={product}
                   onDelete={handleDeleteProduct}
                  />
            ))}
          </div>
    </div>
  )
}

export default Products
