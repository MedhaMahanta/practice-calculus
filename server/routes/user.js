import express from "express";
import UserModel from "../models/user.js";

const router = express.Router();

router.post("/add", (req, res) => {
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

router.get("/:emailID", (req, res) => {
  const {emailID: emailID} = req.params;
  
  UserModel.findOne({emailID: emailID}, {__v: 0}, (err, docs) => {
     if (!err) {
        res.json(docs);
     } else {
        res.status(400).json({"error": err});
     }
  });
});

router.patch("/:emailID/loginCount", (req, res) => {
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

 router.patch("/:emailID/problemsSolved", (req, res) => {
   //problem's topic number, the problem number, if the answer was correct, and submitted answer
   //if the problem already exists (aka the topic number AND problem number exist), 
   // update attempt count, solvedCorrectly (if applicable), and latest answer.

   // if the problem doesn't exist, create a new object, with attempt count 1, solvedCorrectly, and latest answer
   const {emailID: emailID} = req.params;
   const newProb = req.body;

   UserModel.findOne({emailID: emailID}, {__v: 0}, (err, docs) => {
      if (!err) {
         if (docs !== null) { //if user exists
            const isMatch = (prob) => (prob.topic === newProb.topic && prob.probNum === newProb.probNum);
            let index = docs.problemsSolved.findIndex(isMatch);
            if (index !== -1) { //if problem exists in arr, aka if prob is solved before
               UserModel.findOneAndUpdate(
                  {emailID: emailID, "problemsSolved.topic": newProb.topic, "problemsSolved.probNum": newProb.probNum}, 
                  {$set: {"problemsSolved.$": newProb}}, 
                  null, (err, doc) => {
                     if (!err) {
                        res.json(doc);
                     } else {
                        res.status(400).json({"error": err});
                     }
               });
            } else {
               UserModel.findOneAndUpdate({emailID: emailID}, {$push: {"problemsSolved": newProb }}, null, (err, doc) => {
                  if (!err) {
                     res.json(doc);
                  } else {
                     res.status(400).json({"error": err});
                  }
               });
               console.log("index is equal to -1")
            }
         }
      } else {
         res.status(400).json({"error": err});
      }
   });
 });

 export default router;