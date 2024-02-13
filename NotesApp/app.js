const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRouter");
const bodyParserM = require("body-parser");

app.use(express.json());
app.use("/", bodyParserM.urlencoded({ extended: true }), (req, res, next) => {
  console.log("bodyParser middleware");
  next();
});

app.use("/notes", noteRouter);

module.exports = app;
