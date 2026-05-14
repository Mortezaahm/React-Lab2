import { Router } from "express";
import upload from "../middleware/multerConfig";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/uploadController";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

router.post("/products", upload.single("image"), createProduct);

router.patch("/products/:id", upload.single("image"), updateProduct);

router.delete("/products/:id", deleteProduct);

export default router;
