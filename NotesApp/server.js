const app = require("./app");
const port = 3000;

app.set("view engine", "ejs");

app.set("views", "views");

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
