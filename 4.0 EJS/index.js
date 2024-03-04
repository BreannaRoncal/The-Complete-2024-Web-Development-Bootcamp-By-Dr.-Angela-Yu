import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var type = "a weekday";
var adv = "it's time to work hard";

function whatDay(req, res, next) {
  const d = new Date();
  // If today is Sunday or Saturday
  if (d.getDay() === 0 || d.getDay() === 6) {
    type = "the weekend";
    adv = "it's time to have fun";
  }
  next();
}

app.use(whatDay);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
