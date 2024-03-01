/*
Use Middleware to GET the user's input and POST the result of the Band Name

Node.js is used with the following packages:
- express to simplify the Node.js server code
- body-parser, dirname and fileURLToPath to get the user's input and return the Band Name

*/


import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Get the user's streetname and pet input
app.use(bodyParser.urlencoded({ extended: true }));

// Genrate the band name
var bandName = "";
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band Name is: </h1><h2>${bandName}</2h>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
