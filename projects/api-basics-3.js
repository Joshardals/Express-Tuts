const express = require("express");
const app = express();
const { people } = require("./data");

app.get("/", (req, res) => {
  res.json(people);
});

app.listen(3000, (req, res) => {
  console.log("Server is listening on port 3000....");
});
