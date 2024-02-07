const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  res.statusCode = 200;
  if (isNaN(query["a"]) || isNaN(query["b"])) {
    res.statusCode = 400;
    res.write("a and b must be numbers");
  } else if (pathname === "/add") {
    res.write("result: " + (Number(query["a"]) + Number(query["b"])));
  } else if (pathname === "/subtract") {
    res.write("result: " + (Number(query["a"]) - Number(query["b"])));
  } else if (pathname === "/multiply") {
    res.write("result: " + Number(query["a"]) * Number(query["b"]));
  } else if (pathname === "/divide") {
    res.write("result: " + Number(query["a"]) / Number(query["b"]));
  } else {
    res.statusCode = 404;
    res.write("not found");
  }

  res.end("\nend");
});

server.listen("3000", () => {
  console.log("start listening");
});
