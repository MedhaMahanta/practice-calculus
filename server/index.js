import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import UserModel from "./models/user.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json()); 

mongoose.connect(process.env.CONNECTION_URL);
const db = mongoose.connection;
db.once('open', () => console.log(`Connected to database`));

app.post("/user/add", (req, res) => {
    let user = new UserModel(req.body);
    
    user.save((err, result) => {
       if (!err) {
          delete result._doc.__v;
          res.json(result._doc);
       } else {
          res.status(400).json({"error": err});
       }
    });
 })

app.listen(4000, () => {
    console.log("Server started on port 4000");
 });