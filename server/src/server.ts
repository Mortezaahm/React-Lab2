import express from "express";
import cors from "cors";
import path from "path";
import uploadRoutes from "./routes/uploadRoutes";

const app = express();
const PORT = 3001;

const uploadsDir = path.join(__dirname, "../uploads");

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(uploadsDir));

// all routes
app.use("/api", uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
