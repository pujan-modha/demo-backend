const express = require("express");
require("dotenv").config();
const app = express();
// const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("twitter/pujan_modha");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
