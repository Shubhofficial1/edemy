import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoute from "./routes/authRoute.js";
import connectDB from "./config/db.js";
import colors from "colors";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Home Route");
});
app.use("/api", authRoute);

const PORT = process.env.PORT || 5000;
const MODE = process.env.MODE || "development";

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${MODE} mode`);
});
