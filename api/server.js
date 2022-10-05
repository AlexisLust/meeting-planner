const { json } = require("express");
const express = require("express");
const app = express();
const coworkers = require("./routes/coworkers");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/coworkers", coworkers);

// app.get("/api", (req, res) => {
//     res.json({ "users": ["userOne", "userTwo", "userThree"]})
// })
var listSelectedCoworkers = [];

app.use("/schedule", function (req, res, next) { // middleware that logs schedule functions
  const id = req.body.coworker;
  listSelectedCoworkers.push(id);
  console.log(id);
  console.log("A new request received at " + Date.now());
  console.log("Current list: "+listSelectedCoworkers)
  next();
});
app.post("/schedule", (req, res) => {
  // const schedule = req.body.coworker;

  res.send("Next meeting available at ... ");
});




app.listen(5000, () => {
  console.log("server started on port 5000");
});
