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
