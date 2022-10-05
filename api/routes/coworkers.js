const express = require("express");
const mongoose = require("mongoose");
const CoworkerModel = require("../models/coworkers");
const router = express.Router();

mongoose.connect(
  "mongodb+srv://xelatsul:iKp34SBc0KXb1hhr@cluster0.448yzx3.mongodb.net/meeting_scheduler?retryWrites=true&w=majority"
);

router.get("/", (req, res) => {
  CoworkerModel.find({}, (err, result) => {
    if (err) {
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
