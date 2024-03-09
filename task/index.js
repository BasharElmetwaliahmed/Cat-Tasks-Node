const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { validator } = require("./validate");
const bodyParserM = bodyParser.urlencoded({
  extended: true,
});
const { check, validationResult } = require("express-validator");

app.set("view engine", "ejs");

//set view engine file path
app.set("views", "views");

app.get("/register", (req, res) => {
  res.render("register", { errors: {} });
});

app.post("/register", bodyParserM,validator, (req, res, next) => {
  const { errors } = validationResult(req);
  let errorsMessagess = {};

  if (errors.length) {
    errors.forEach((err) => {
      console.log(err.path, err.msg);
      if (!errorsMessagess[err.path]) errorsMessagess[err.path] = [err.msg];
      else errorsMessagess[err.path]?.push(err.msg);
    });
    res.render("register", {
      errors: errorsMessagess,
    });
  }
  res.send("success");
});

app.listen(8090, () => {
  console.log("listening on port 8090");
});
