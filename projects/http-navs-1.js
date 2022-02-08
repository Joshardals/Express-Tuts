const http = require("http");
const { readFileSync } = require("fs");
const homepage = readFileSync("./index.html");

http
  .createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(homepage);
    } else if (url === "/contact") {
      res.writeHead(200, { "content-type": "text/html" });
      res.end("<h1>Contact Page!</h1>");
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>page not found!</h1>");
    }

    console.log(req.url);
  })
  .listen(3000);
