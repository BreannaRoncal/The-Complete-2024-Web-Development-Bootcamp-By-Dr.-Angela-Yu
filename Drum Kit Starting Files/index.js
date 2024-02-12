/*
Drum Kit
each button is assigned a sound.mp3 which will play when the user clicks the button on the screen
or presses the corresponding key on their keyboard
*/

// Create a listener for each drum button
var numOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonTextContent = this.textContent;
    makeSound(buttonTextContent);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  // Play the corresponding sound to the user's input
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    // If none of the above, display which button was clicked
    // (good practice to make a default statement in a switch statement)
    default:
      console.log(buttonTextContent);
  }
}
