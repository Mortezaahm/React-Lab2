import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById, updateProduct } from "../services/productService"
import type { UpdateProduct } from "../types/product";


function EditProduct() {
  const { id } = useParams();
  const productId = Number(id);

  const [productData, setProductData] = useState<UpdateProduct>({
    title: "",
    price: 0 ,
    description: "",
    category: "",
    image: ""
  })

  useEffect(() => {
      async function sendParams() {
      const data = await getProductById(productId);
      setProductData(data);
    }
      sendParams();
    }, [productId])

    async function handleUpdateProduct(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      try {
        const data = await updateProduct(productId, productData)
        if (data) setProductData(data)
      } catch (error) {
        console.log(error)
        }
    }

  return (
    <>
      <form onSubmit={handleUpdateProduct}>
        <input
            type="text"
            placeholder="Name of Product..."
            value={productData.title}
            onChange={(e) => setProductData(prev => ({
                ...prev ,
                title: e.target.value
              }))
            }
            />
            <input
            type="text"
            placeholder="Price of Product..."
            value={productData.price}
            onChange={(e) => setProductData(prev => ({
                ...prev,
                price:Number(e.target.value)
              }))
            }
            />
            <input
            type="text"
            placeholder="Description for Product..."
            value={productData.description}
            onChange={(e) => setProductData(prev => ({
              ...prev,
              description: e.target.value
              }))
            }
            />
            <input
            type="text"
            placeholder="Category of Product..."
            value={productData.category}
            onChange={(e) => setProductData(prev => ({
                ...prev,
                category: e.target.value
              }))
            }
            />
            <input
            type="text"
            placeholder="Image of Product..."
            value={productData.image}
            onChange={(e) => setProductData(prev => ({
                ...prev,
                image: e.target.value
              }))
            }
            />
            <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default EditProduct
