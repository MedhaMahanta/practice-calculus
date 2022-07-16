import express from "express";
import calcProblems from "./calcProblems.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json(calcProblems);
});

router.get("/filter", (req, res) => {
    res.json(calcProblems.filter( (problem) => {
        let keep = true;
        if (req.query.unit) {
            keep = keep && problem.unit == req.query.unit;
        }
        if (req.query.tags) {
            let tagArr = req.query.tags.split(',');
            keep = keep && tagArr.some(tag => problem.tags.includes(tag));
        }
        if (req.query.topic) {
            keep = keep && problem.topic == req.query.topic;
        }
        return keep;
    } ));
});

export default router;





