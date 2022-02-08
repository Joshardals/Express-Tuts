const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.get("*", (req, res) => {
  res.status(404).send("resource not found!");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});
