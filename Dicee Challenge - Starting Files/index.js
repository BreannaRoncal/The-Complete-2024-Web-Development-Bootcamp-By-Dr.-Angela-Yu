function playGame() {
  var p1 = Math.floor(Math.random() * 6);
  document.querySelector(".img1").src = "./images/dice" + (p1 + 1) + ".png";

  var p2 = Math.floor(Math.random() * 6);
  document.querySelector(".img2").src = "./images/dice" + (p2 + 1) + ".png";

  if (p1 > p2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (p1 < p2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}
