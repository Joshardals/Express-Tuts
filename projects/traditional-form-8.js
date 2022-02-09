const express = require("express");
const app = express();
const { people2 } = require("./data");

app.use(express.static("./login-method"));
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(404).send("Provide credentials!");
  }
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ sucess: true, data: people2 });
});

app.listen(3000, (req, res) => {
  console.log("Server is listening on port 3000....");
});
