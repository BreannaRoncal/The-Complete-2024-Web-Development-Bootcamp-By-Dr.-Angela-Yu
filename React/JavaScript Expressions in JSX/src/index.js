import React from "react";
import ReactDOM from "react-dom";

const fName = "Bre";
const lName = "Roncal";
const lucky_num = 123456;

// Template literal is part of ES6
ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {lucky_num}</p>
  </div>,
  document.getElementById("root")
);
