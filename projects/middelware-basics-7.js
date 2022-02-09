const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use([logger, authorize]); 

app.get("/", (req, res) => {
  res.send("Home Page!");
  console.log(req.user);
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
