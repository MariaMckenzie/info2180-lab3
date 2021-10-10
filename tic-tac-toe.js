"use strict";

/*
  JAVA SCRIPT FOR INDEX.html
  Maria McKenzie
*/

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("board");
  //grid.setAttribute("class", "grid");
  //grid.style.backgroundColor = "red";

  //let boxes = document.getElementById(".grid");
  //console.log(boxes);

  //grid.classList.add("square");

  //boxes[1].style.backgroundColor = "yellow";
  //elements[5].style.backgroundColor = 'white';
  let x = document.getElementById("board").children;

  for (var i = 0; i < x.length; i++){
    x[i].classList.add("square");
  }
  
  //x[3].classList.add("square");
  //x[5].classList.add("square");
  //x[7].classList.add("square");
  //x[1].classList.add("square");
  //x[1].classList.add("square");
  //x[1].classList.add("square");
  console.log(x);

})

