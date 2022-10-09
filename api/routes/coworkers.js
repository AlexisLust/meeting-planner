const express = require("express");
const mongoose = require("mongoose");
const controllers = require("../controllers/coworkers")
const CoworkerModel = require("../models/coworkers");
const router = express.Router();
const Coworker = require("../models/coworkers");

mongoose.connect(
  "mongodb+srv://xelatsul:" +
    process.env.MONGO_DB +
    "@cluster0.448yzx3.mongodb.net/meeting_scheduler?retryWrites=true&w=majority"
);

router.get("/", controllers.getAll);

router.post("/", controllers.scheduler);

router.post("/add", controllers.create);


module.exports = router;
