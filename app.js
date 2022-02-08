const express = require("express");
const app = express();
const logger = require("./logger");

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page!");
});
app.get("/about", (req, res) => {
  res.send("About Page!");
});
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.listen(3000, (req, res) => {
  console.log("Server is listening on port 3000....");
});
