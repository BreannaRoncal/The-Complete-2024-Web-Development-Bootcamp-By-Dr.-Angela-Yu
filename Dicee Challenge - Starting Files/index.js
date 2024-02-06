function playGame() {
  // Get a random number 0 - 5 for player 1
  var p1 = Math.floor(Math.random() * 6);
  // Change the dice image shown on the website based on the random number
  // display ./images/dice1.png to ./images/dice6.png
  document.querySelector(".img1").src = "./images/dice" + (p1 + 1) + ".png";

  // Do the same for player 2
  // I need to make a new Math.random() seed for player 2, otherwise the dice result will be the same
  var p2 = Math.floor(Math.random() * 6);
  document.querySelector(".img2").src = "./images/dice" + (p2 + 1) + ".png";

  // Declare a winner based on which player rolled the highest and display it on the website
  if (p1 > p2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (p1 < p2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}
