const express = require("express");
const app = express();
const { people } = require("./data");

app.get("/api/people/:personID", (req, res) => {
  const { personID } = req.params;
  const singlePerson = people.find((person) => person.id === Number(personID));

  if (!singlePerson) {
    return res.status(404).send("<h1>person does not exist!</h1>");
  }

  return res.json(singlePerson);
});

app.get("/api/people/:personId/reviews/:reviewID", (req, res) => {
  res.send("Hello World!");
  console.log(req.params);
});

app.listen(3000, (req, res) => {
  console.log("Server is listening on port 3000....");
});
