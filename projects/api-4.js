const express = require("express");
const app = express();
const { people } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/people'>people</a>");
});

app.get("/api/people", (req, res) => {
  const newPeople = people.map((person) => {
    const { id, age, name } = person;
    return { id, age, name };
  });
  res.json(newPeople);
});

app.listen(3000, (req, res) => {
  console.log("Server is listening on port 3000....");
});
