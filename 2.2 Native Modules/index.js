const fs = require("fs");

// Write "Hello from NodeJS" to file "message.txt"
fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

// Read file and display on the console
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
