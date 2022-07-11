// import express from "express";

// const router = express.Router();

// app.post("/person/add", (req, res) => {
//     let person = new PersonModel(req.body);
    
//     person.save((err, result) => {
//        if (!err) {
//           delete result._doc.__v;
//           res.json(result._doc);
//        } else {
//           res.status(400).json({"error": err});
//        }
//     });
//  })