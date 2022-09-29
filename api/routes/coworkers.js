const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json([
    {
      id: 0,
      name: "Alexis Lust",
      time_one_start: "9:00",
      time_one_end: "9:30",
      time_two_start: "12:00",
      time_two_end: "14:00",
      time_three_start: "15:00",
      time_three_end: "17:00",
    },
    {
      id: 1,
      name: "Mern Dev",
      time_one_start: "8:00",
      time_one_end: "8:30",
      time_two_start: "13:00",
      time_two_end: "14:00",
      time_three_start: "16:00",
      time_three_end: "17:00",
    },
    {
      id: 2,
      name: "Third Dev",
      time_one_start: "7:00",
      time_one_end: "9:30",
      time_two_start: "11:00",
      time_two_end: "15:00",
      time_three_start: "17:00",
      time_three_end: "18:00",
    },
  ]);
});

module.exports = router;
