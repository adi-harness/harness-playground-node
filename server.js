const calculator = require("./calculator");
const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  console.log("Adding 2 and 5, we get: ", calculator.add("2,3"));
  res.send("Server is up!");
});

app.get("/devops", (req, res) => {
  res.send("This is hard, but fun!");
});

app.get("/main", (req, res) => {
  res.send("The main feature!");
});

app.get("/feature-ci", (req, res) => {
  res.send("Feature Continuous Integration!");
});

app.get("/ci", (req, res) => {
  res.send("Continuous integration is awesome!");
});

app.get("/demo", (req, res) => {
  res.send("hi");
});

app.get('/demo2', (req, res) => {
  res.send("Second demo");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
