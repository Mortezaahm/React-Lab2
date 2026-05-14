import { Request, Response } from "express";
import path from "path";
import fs from "fs"

type Product = {
  id: number;
  title: string,
  price: number,
  description?: string,
  category?: string,
  image: string
};

type UpdateProductBody = {
  title?: string,
  price?: number,
  description?: string,
  category?: string,
  image?: string
}

let products:Product[] = [];
let currentId = 100;

const uploadsDir = path.join(__dirname, "../..", "uploads");

export const getAllProducts = (_req: Request, res: Response) => {
    res.json(products);
}

export const getProductById = (req: Request<{ id: string }>, res: Response) => {
    const id = Number(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({
        message: "Product not found"
        });
    }

    const product = products[productIndex];
    res.json(product);
}

export const createProduct = (req: Request, res:Response) => {
    const {title , price, description, category} = req.body;
    if (!title || !price) {
        return res.status(400).json({message: "Title and Price needed"})
    }

    if (!req.file) {
        return res.status(400).json({message: "Image needed"})
    }

    const parsedPrice = Number(price);

    if (Number.isNaN(parsedPrice) || parsedPrice <= 0) {
        return res.status(400).json({ message: "Price should be a positive number" });
    }

    const newProduct : Product = {
        id: currentId++,
        title,
        price: parsedPrice,
        description,
        category,
        image: `http://localhost:3001/uploads/${req.file.filename}`
    }

    products.push(newProduct);

    return res.status(201).json(newProduct);
}

export const updateProduct = (req: Request<{ id: string }, {}, UpdateProductBody>, res: Response) => {
    const id = Number(req.params.id);
    const { title, price, description, category } = req.body;

    const product = products.find((p) => p.id === id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    if (title !== undefined) {
      if (title.trim() === "") {
        return res.status(400).json({
          message: "Title can not be empty"
        });
      }
      product.title = title;
    }

    if (price !== undefined) {
      if (Number.isNaN(Number(price)) || Number(price) <= 0) {
        return res.status(400).json({
          message: "Price should be a valid positive number"
        });
      }
      product.price = Number(price);
    }

    res.json(product);
};

export const deleteProduct = (req: Request<{ id: string }>, res: Response) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const product = products[productIndex]!;

  const filename = path.basename(product.image);
  const filePath = path.join(uploadsDir, filename);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  products.splice(productIndex, 1);

  res.json({
    message: "Product deleted successfully"
  });
}
