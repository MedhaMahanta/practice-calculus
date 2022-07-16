import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import problemRoutes from "./routes/problems.js";

const app = express();

dotenv.config();
app.use(cors()); 
app.use(express.json()); 
app.use("/user", userRoutes);
app.use("/problems", problemRoutes);

mongoose.connect(process.env.CONNECTION_URL);
const db = mongoose.connection;
db.once('open', () => console.log(`Connected to database`));

app.listen(4000, () => {
    console.log("Server started on port 4000");
 });