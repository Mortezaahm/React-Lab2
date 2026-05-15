import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById, updateProduct } from "../services/productService"
import type { UpdateProduct } from "../types/product";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";


function EditProduct() {
  const { id } = useParams();
  const productId = Number(id);
  const navigate = useNavigate();

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
        if (data) {
          setProductData(data)
          navigate(`/products/${productId}`)
        }
      } catch (error) {
        console.log(error)
        }
    }

  return (
    <>
      <form onSubmit={handleUpdateProduct} className="form">
        <input
            type="text"
            placeholder="Name of Product..."
            value={productData.title}
            className="form__input"
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
            className="form__input"
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
            className="form__input"
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
            className="form__input"
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
            className="form__input"
            onChange={(e) => setProductData(prev => ({
                ...prev,
                image: e.target.value
              }))
            }
            />
            <Button type="submit" variant="primary">Update Product</Button>
      </form>
    </>
  )
}

export default EditProduct
