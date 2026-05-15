import { useState } from "react";
import { addProduct } from "../services/productService";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import type { ProductFormData } from "../types/product";

function AddProduct() {

  const navigate = useNavigate();

  const [productData, setProductData] =
    useState<ProductFormData>({
      title: "",
      price: 0,
      description: "",
      category: "",
      image: ""
    });

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    try {

      const data =
        await addProduct(productData);

      console.log(data);

      navigate("/products");

    } catch (error) {

      console.error(
        "Failed to add product:",
        error
      );
    }
  }

  return (
    <ProductForm
      productData={productData}
      setProductData={setProductData}
      handleSubmit={handleSubmit}
      buttonText="Add Product"
    />
  );
}

export default AddProduct;
