import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../services/productService";
import ProductForm from "../components/ProductForm";
import type { ProductFormData } from "../types/product";

function EditProduct() {
  const { id } = useParams();
  const productId = Number(id);
  const navigate = useNavigate();

  const [productData, setProductData] =
    useState<ProductFormData>({
      title: "",
      price: 0,
      description: "",
      category: "",
      image: ""
    });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const data = await getProductById(productId);
        setProductData({
          title: data.title,
          price: data.price,
          description: data.description,
          category: data.category,
          image: data.image
        });
      } catch {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  async function handleUpdateProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await updateProduct(
        productId,
        productData
      );
      navigate(`/products/${productId}`);
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <ProductForm
      productData={productData}
      setProductData={setProductData}
      handleSubmit={handleUpdateProduct}
      buttonText="Update Product"
    />
  );
}

export default EditProduct;
