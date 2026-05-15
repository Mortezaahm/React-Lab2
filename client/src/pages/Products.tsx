import { useState, useEffect } from "react"
import { getAllProducts, deleteProduct } from "../services/productService"
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter ((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase())
  })

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

  if (loading) {
    return (
      <div className="grid-3">
        {Array.from({length:6}).map((_,i)=> (
          <div key={i} className="card-skeleton"/>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        className="search-bar"
      />
      {filteredProducts.length === 0 ? (
          <div className="empty-state-inline">
            <p>No products match "<strong>{search}</strong>"</p>
          </div>
        ) : (
          <div className="grid-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onDelete={handleDeleteProduct}
              />
            ))}
          </div>
        )}
    </div>
  )
}

export default Products
