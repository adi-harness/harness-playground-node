const calculator = require("./calculator");
const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  console.log("Adding 2 and 5, we get: ", calculator.add("2,3"));
  res.send("Server is up!");
});

app.get("/feature1", (req, res) => {
  res.send("This is your feature!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
