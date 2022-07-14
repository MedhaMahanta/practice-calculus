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
 });

 app.get("/user/:emailID", (req, res) => {
   const {emailID: emailID} = req.params;
   
   UserModel.findOne({emailID: emailID}, {__v: 0}, (err, docs) => {
      if (!err) {
         res.json(docs);
      } else {
         res.status(400).json({"error": err});
      }
   });
});

app.patch("/user/:emailID/loginCount", (req, res) => {
   const {emailID: emailID} = req.params;
   UserModel.findOne({emailID: emailID}, {__v: 0}, (err, docs) => {
      if (!err) {
         if (docs !== null) {
            UserModel.findOneAndUpdate({emailID: emailID}, {loginCount: docs.loginCount+1}, null, (err, doc) => {
               if (!err) {
                  res.json(doc);
               } else {
                  res.status(400).json({"error": err});
               }
            });
         } else {
            UserModel.findOneAndUpdate({emailID: emailID}, {loginCount: 1}, null, (err, doc) => {
               if (!err) {
                  res.json(doc);
               } else {
                  res.status(400).json({"error": err});
               }
            });
         }
      }
   })

});

app.listen(4000, () => {
    console.log("Server started on port 4000");
 });