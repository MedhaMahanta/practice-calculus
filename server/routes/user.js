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
            console.log(index);
            if (index !== -1) { //if problem exists in arr, aka if prob is solved before
               let tempProbs = docs.problemsSolved;
               tempProbs[index] = newProb;
               console.log(tempProbs);
               UserModel.findOneAndUpdate(
                  {emailID: emailID}, 
                  {problemsSolved: tempProbs}, 
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

router.get("/:emailID/solved", (req, res) => {
   const {emailID: emailID} = req.params;
   UserModel.findOne({emailID: emailID}, {__v: 0}, (err, docs) => {
      if (!err) {
         let dataToSend = null;
         const problemsSolved = docs.problemsSolved;
         problemsSolved.forEach((problem) => {
            if (problem.topic === req.query.topic && problem.probNum === req.query.problemNum) {
               dataToSend = problem;
            } 
         })
         res.send(dataToSend);
      } else {
         res.status(400).json({"error": err})
      }
   })
});

//Random Problem Generator
router.post("/:emailID/randomSet", (req, res) => {
   const {emailID: emailID} = req.params;
   const newRandomSet = req.body;
   UserModel.findOne({emailID: emailID}, {__v: 0}, (err, docs) => {
      if (!err) {
         UserModel.findOneAndUpdate({emailID: emailID}, {$push: {"randomProblems": newRandomSet }}, null, (err, doc) => {
            if (!err) {
               res.json(doc);
            } else {
               res.status(400).json({"error": err});
            }
         });
      } else {
         res.status(400).json({"error": err})
      }
   })
});

router.get("/:emailID/randomSet", (req, res) => {
   const {emailID: emailID} = req.params;
   UserModel.findOne({emailID: emailID}, {__v: 0}, (err, docs) => {
      if (!err) {
         res.json(docs.randomProblems)
      } else {
         res.status(400).json({"error": err})
      }
   })
});

 export default router;