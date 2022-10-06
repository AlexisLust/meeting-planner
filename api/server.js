const { json } = require("express");
require('dotenv').config()
const express = require("express");
const app = express();
const coworkers = require("./routes/coworkers");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/coworkers", coworkers);


app.listen(5000, () => {
  console.log("server started on port 5000");
});
