//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display 2 paragraph HTML elements.
const yourName = "Bre Roncal";
var currYear = new Date().getFullYear();

//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

ReactDOM.render(
  <div>
    <p>Created by {yourName}.</p>
    <p>Copyright {currYear}</p>
  </div>,
  document.getElementById("root")
);
