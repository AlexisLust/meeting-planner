const mongoose = require("mongoose");

const CoworkerSchema = {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  time_one_start: { type: String, required: false },
  time_one_end:{ type: String, required: false },
  time_two_start:{ type: String, required: false },
  time_two_end:{ type: String, required: false },
  time_three_start:{ type: String, required: false },
  time_three_end: { type: String, required: false },
};

const CoworkerModel = mongoose.model('coworkers', CoworkerSchema)
module.exports = CoworkerModel;

