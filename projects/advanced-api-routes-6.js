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

app.get("/api/v1/query", (req, res) => {
  let sortedPerson = [...people];
  const { search, limit } = req.query;
  if (search) {
    sortedPerson = sortedPerson.filter((person) => {
      return person.name.startsWith(search);
    });
  }
  if (limit) {
    sortedPerson = sortedPerson.slice(0, Number(limit));
  }
  if (sortedPerson < 1) {
    // res.status(200).send('no person matched your search')
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedPerson);
});

app.listen(3000, (req, res) => {
  console.log("Server is listening on port 3000....");
});
