/*
Use Express module to setup a basic server that can handle GET requests and send a response
*/

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello 3.2 World!!");
});

app.get("/about", (req, res) => {
  res.send("This is the About page!");
});

app.get("/contact", (req, res) => {
  res.send("This is the Contact page!");
});

app.listen(port, () => {
  console.log(`Running 3.2 on port ${port}`);
});
