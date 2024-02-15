var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChosenColor);

$(".btn").on("click", function () {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  clickButton(userChosenColor);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

function clickButton(randomChosenColor) {
  $("#" + randomChosenColor).addClass("pressed");
  setTimeout(function () {
    $("#" + randomChosenColor).removeClass("pressed");
  }, 100);
}
