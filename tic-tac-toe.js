"use strict";

/*
  JAVA SCRIPT FOR INDEX.html
  Maria McKenzie
*/

const all_spaces = [];
var m = 0;
var ans = "";
let winner = "";
const player_x = ["playerX", []];
const player_o = ["playerO", []];
var last_move = "";
const winning_spaces = [[0,1,2], [3,4,5], 
                        [6,7,8], [0,3,6], 
                        [1,4,7], [2,5,8],
                        [0,4,8], [2,4,6]];


//LOAD THE DOCUMENT
document.addEventListener("DOMContentLoaded", () => {
  let board = document.getElementById("board");
  let grids = board.children;
  let status = document.getElementById("status");

  for (var i = 0; i < grids.length; i++){
    grids[i].classList.add("square");
  }

  for (var i = 0; i < grids.length; i++){
    clicked(player_o[1], player_x[1], grids, i, status);
    hover(grids, i);
  }

});

//CLICK BOXES -> Only can click once
function clicked(lst1, lst2, positions, n, st) {
  positions[n].addEventListener("click", function(){
    if (last_move == "" || last_move == "O") {     
      last_move = "X";
      positions[n].innerHTML = "X";
      positions[n].classList.add("X");
      lst1.push(n);
      lst1.sort();
      if (lst1.length > 2) {
        win(lst1);
        if (ans == true){
          winner = "X";
          st.innerHTML = "Congratulations! X is the Winner!";
        }
      }
    }
    else {     
      last_move = "O"; 
      positions[n].innerHTML = "O";
      positions[n].classList.add("O"); 
      lst2.push(n);  
      lst2.sort();  
      if (lst2.length > 2) {
        win(lst2);
        if (ans == true){
          winner = "O";
          st.innerHTML = "Congratulations! O is the Winner!";      
        }
      }
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

//CHECK FOR WIN
function win(lst) { 
  if (lst.length == 4) {
    let all_combinations = [ [lst[0], lst[1], lst[2]],
                             [lst[0], lst[1], lst[3]],
                             [lst[0], lst[2], lst[3]],
                             [lst[1], lst[2], lst[3]],
                            ]
    
    for (var m = 0; m < winning_spaces.length; m++){
      for (var n = 0; n < all_combinations.length; n++){
        ans = winning_spaces[m].includes(all_combinations[n][0]) 
                && winning_spaces[m].includes(all_combinations[n][1])
                && winning_spaces[m].includes(all_combinations[n][2]);
        if (ans == true) {          
          return true;
        }
      }                        
    }
  }
  else if (lst.length == 3){
    for (var m = 0; m < winning_spaces.length; m++){
      ans = winning_spaces[m].includes(lst[0]) 
                && winning_spaces[m].includes(lst[1])
                && winning_spaces[m].includes(lst[2]);
      if (ans == true) {         
        return true;
      }
    }                        
  }

  else {
    console.log("draw");
  }
}

//NEW BOARD