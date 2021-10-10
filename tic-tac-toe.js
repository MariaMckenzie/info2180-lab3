"use strict";

/*
  JAVA SCRIPT FOR INDEX.html
  Maria McKenzie
*/

const all_spaces = [];
var m = 0;
const player_x = ["playerX", []];
const player_o = ["playerO", []];
var last_move = "";
let count_moves = 9;
const winning_spaces = [[0,1,2], [3,4,5], 
                        [6,7,8], [0,3,6], 
                        [1,4,7], [2,5,8],
                        [0,4,8], [2,4,6]]

document.addEventListener("DOMContentLoaded", () => {
  let board = document.getElementById("board");
  let grids = board.children;

  for (var i = 0; i < grids.length; i++){
    grids[i].classList.add("square");
  }

  for (var i = 0; i < grids.length; i++){
    clicked(player_o[1], player_x[1], grids, i);
    hover(grids, i);
  }


});

//CLICK BOXES -> Only can click once
function clicked(lst1, lst2, positions, n) {
  positions[n].addEventListener("click", function(){
    if (last_move == "" || last_move == "O") {     
      last_move = "X";
      positions[n].innerHTML = "X";
      positions[n].classList.add("X");
      lst1.push(n);
      console.log("x", lst1); 
    }
    else {     
      last_move = "O"; 
      positions[n].innerHTML = "O";
      positions[n].classList.add("O"); 
      lst2.push(n);    
      console.log("o", lst2);   
    }
  }, {once: true});  
}

//HOVER OVER BOX
function hover(positions, n){
  positions[n].addEventListener("mouseenter", function(){
      positions[n].classList.add("hover"); 
  }); 
  
  positions[n].addEventListener("mouseleave", function(){
    positions[n].classList.remove("hover"); 
}); 
}
