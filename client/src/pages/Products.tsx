import { useState, useEffect } from "react"
import { getAllProducts, deleteProduct } from "../services/productService"
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getAll () {
      const data = await getAllProducts();
      setProducts(data)
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
