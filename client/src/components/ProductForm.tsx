import type { ProductFormData } from "../types/product";

import Button from "./Button";

type ProductFormProps = {
  productData: ProductFormData;

  setProductData: React.Dispatch<
    React.SetStateAction<ProductFormData>
  >;

  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>
  ) => void;

  buttonText: string;
};

function ProductForm({
  productData,
  setProductData,
  handleSubmit,
  buttonText
}: ProductFormProps) {

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >

      <input
        type="text"
        placeholder="Name of Product..."
        className="form__input"
        value={productData.title}
        onChange={(e) =>
          setProductData((prev) => ({
            ...prev,
            title: e.target.value
          }))
        }
      />

      <input
        type="number"
        placeholder="Price of Product..."
        className="form__input"
        value={productData.price}
        onChange={(e) =>
          setProductData((prev) => ({
            ...prev,
            price: Number(e.target.value)
          }))
        }
      />

      <input
        type="text"
        placeholder="Description for Product..."
        className="form__input"
        value={productData.description}
        onChange={(e) =>
          setProductData((prev) => ({
            ...prev,
            description: e.target.value
          }))
        }
      />

      <input
        type="text"
        placeholder="Category of Product..."
        className="form__input"
        value={productData.category}
        onChange={(e) =>
          setProductData((prev) => ({
            ...prev,
            category: e.target.value
          }))
        }
      />

      <input
        type="text"
        placeholder="Image of Product..."
        className="form__input"
        value={productData.image}
        onChange={(e) =>
          setProductData((prev) => ({
            ...prev,
            image: e.target.value
          }))
        }
      />

      <Button
        type="submit"
        variant="primary"
      >
        {buttonText}
      </Button>

    </form>
  );
}

export default ProductForm;
