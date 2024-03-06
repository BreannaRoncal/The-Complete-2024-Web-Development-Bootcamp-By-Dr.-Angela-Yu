import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var total = 0;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  // Get the user's first and last name
  const firstName = req.body["fName"];
  const lastName = req.body["lName"];
  // console.log(firstName + " " + lastName);
  // Calculate how many letters are in the user's first and last name
  const total = firstName.length + lastName.length;

  res.render("index.ejs", { totalLetters: total });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
