const express = require("express");
const mongoose = require("mongoose");
const { schedule } = require("../controllers/coworkers");
const CoworkerModel = require("../models/coworkers");
const router = express.Router();

mongoose.connect(
  "mongodb+srv://xelatsul:" +
    process.env.MONGO_DB +
    "@cluster0.448yzx3.mongodb.net/meeting_scheduler?retryWrites=true&w=majority"
);

router.get("/", (req, res) => {
  CoworkerModel.find({}, (err, result) => {
    if (err) {
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const listCoworkers = req.body.listCoworkers;
  if (listCoworkers.length <2){
    return
  }
  const response = schedule(listCoworkers);
  console.log(response);
  res.send(response);
});

module.exports = router;
