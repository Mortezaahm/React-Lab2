import { useState } from "react"
import { addProduct } from "../services/productService"
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newProduct = {
            title,
            price,
            description,
            category,
            image
            }

      try {
        const data = await addProduct(newProduct);
        setTitle("")
        setPrice(0)
        setDescription("")
        setCategory("")
        setImage("")

        console.log(data);
        // localStorage.setItem(data);

        navigate('/products')
      } catch (error) {
        console.error("Failed to add product: ", error);
      }
    }


  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
            type="text"
            placeholder="Name of Product..."
            className="form__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input
            type="text"
            placeholder="Price of Product..."
            className="form__input"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            />
            <input
            type="text"
            placeholder="Description for Product..."
            className="form__input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input
            type="text"
            placeholder="Category of Product..."
            className="form__input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />
            <input
            type="text"
            placeholder="Image of Product..."
            className="form__input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            <Button type="submit" variant="primary">Add Product</Button>
      </form>
    </>
  )
}

export default AddProduct
