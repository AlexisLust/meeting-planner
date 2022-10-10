const CoworkerModel = require("../models/coworkers");
const { schedule } = require("../services/coworkers");

exports.getAll = (req, res) => {
  CoworkerModel.find({}, (err, result) => {
    if (err) {
    } else {
      res.json(result);
    }
  });
};

exports.scheduler = (req, res) => {
  const listCoworkers = req.body.listCoworkers;
  console.log(listCoworkers.length);
  if (listCoworkers.length < 2) {
    res.status(200).send("Not enough coworkers selected");
  } else {
    const response = schedule(listCoworkers);
    res.send(response);
  }
};

exports.create = (req, res) => {
  const coworker = new CoworkerModel({
    name: req.body.name,
    time_one_start: req.body.time_one_start,
    time_one_end: req.body.time_one_end,
    time_two_start: req.body.time_two_start,
    time_two_end: req.body.time_two_end,
    time_three_start: req.body.time_three_start,
    time_three_end: req.body.time_three_end,
  });
  coworker
    .save(coworker)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(200).send({
        message:
          err.message || "There was an error while creating a new coworker.",
      });
    });
};
