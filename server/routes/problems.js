import express from "express";
import calcProblems from "./calcProblems.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json(calcProblems);
});

router.get("/filter", (req, res) => {
    res.json(calcProblems.filter( (problem) => {
        let keep = false;
        if (req.query.unit) {
            let unitArr = req.query.unit.split(',');
            keep = keep || unitArr.some(unit => problem.unit == unit);
        }
        if (req.query.tags) {
            let tagArr = req.query.tags.split(',');
            keep = keep || tagArr.some(tag => problem.tags.includes(tag));
        }
        if (req.query.topic) {
            let topicArr = req.query.topic.split(',');
            keep = keep || topicArr.some(topic => problem.topic == topic);
        }
        return keep;
    } ));
});

router.get("/find/:id", (req, res) => {
    const {id: id} = req.params;
    res.json(calcProblems.find(prob => prob.id == id));
})

export default router;





