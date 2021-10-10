"use strict";

/*
  JAVA SCRIPT FOR INDEX.html
  Maria McKenzie
*/

const all_spaces = [];
const player1 = [];
const player2 = [];
const winning_spaces = [[0,1,2], [3,4,5], 
                        [6,7,8], [0,3,6], 
                        [1,4,7], [2,5,8],
                        [0,4,8], [2,4,6]]

document.addEventListener("DOMContentLoaded", () => {
  let board = document.getElementById("board");
  let grids = board.children;

  for (var i = 0; i < grids.length; i++){
    grids[i].classList.add("square");
    clicked(grids, i);
  }
});

function clicked(positions, n) {
  positions[n].addEventListener("click", function(){
    if (positions[n].innerHTML != "X"){
      positions[n].innerHTML = "X";
      positions[n].classList.add("X");
    }
    else {     
      positions[n].innerHTML = "O";
      positions[n].classList.add("O"); 
    }
  });

}