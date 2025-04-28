import transactionRoutes from "./routes/transactions.js";
import userRoutes from "./routes/userRoute.js";
import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// app config
dotenv.config();
const app = express();
const PORT = 8000;
const MONGO_URL =
  "mongodb+srv://sagarbhatiya:Sagar%40170304@cluster0.aiyt4iq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

console.log("PORT:", PORT);
console.log("MONGO_URL:", MONGO_URL);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

// db connection
connectDB(MONGO_URL);

//api endpoints
app.use("/transaction", transactionRoutes);
app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
