import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config.mjs";
import dotenv from "dotenv";
import userRoutes from "./routes/user.mjs";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Cors
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/users", userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
