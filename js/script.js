window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  // 1 =  <div class="tile wall"></div>
  function drawWall(){
    document.getElementById("game-board").innerHTML += "<div class=' tile wall'></div>";
  }
  // 2 =  <div class="tile coin"></div>
  function drawCoin(){
    document.getElementById("game-board").innerHTML += "<div class=' tile coin blink'></div>";
  }
  // 3 =  <div class="tile ground"></div>
  function drawGround(){
    document.getElementById("game-board").innerHTML += "<div class=' tile ground'></div>";
  }
  // 4 =  <div class="tile pacman"></div>
  function drawPacman(){
    document.getElementById("game-board").innerHTML += "<div class=' tile pacman'></div>";
  }
  // 5 =  <div class="tile left"></div>
  function drawPacmanLeft(){
    document.getElementById("game-board").innerHTML += "<div class=' tile left'></div>";
  }
   // 6 =  <div class="tile up"></div>
   function drawPacmanUp(){
    document.getElementById("game-board").innerHTML += "<div class=' tile up'></div>";
  }
   // 7 =  <div class="tile down"></div>
   function drawPacmanDown(){
    document.getElementById("game-board").innerHTML += "<div class=' tile down'></div>";
  }
  

let boardData = [
  
  [1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1],
  [1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1],
  [1,2,1,2,2,2,1,2,2,2,1,2,2,1,2,2,2,1],
  [1,2,2,2,1,2,1,1,2,1,1,1,2,1,1,2,1,1],
  [1,1,1,2,1,2,1,1,2,4,2,2,2,2,1,2,1,1],
  [2,2,2,2,1,2,1,1,2,1,1,2,1,1,1,2,2,2],
  [1,1,1,2,2,2,2,1,1,1,1,2,2,2,2,2,1,1],
  [1,1,1,2,1,1,2,2,2,1,1,1,1,1,1,2,1,1],
  [1,2,2,2,1,1,1,1,2,2,2,2,2,1,2,2,2,1],
  [1,2,1,2,2,2,2,1,2,1,1,1,2,1,2,1,2,1],
  [1,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1],
]

function drawMap(){
  document.getElementById("game-board").innerHTML = "";
  for(var y = 0; y < boardData.length; y++){
    for(var x =0; x < boardData[y].length; x++){
      if(boardData[y][x] === 1){
        drawWall();
      }
      else if(boardData[y][x] === 2){
        drawCoin();
      }
      else if(boardData[y][x] === 3){
        drawGround();
      } 
      else if(boardData[y][x] === 4){
        drawPacman();
      } 
      else if(boardData[y][x] === 5){
        drawPacmanLeft();
      }
      else if(boardData[y][x] === 6){
        drawPacmanUp();
      }
      else if(boardData[y][x] === 7){
        drawPacmanDown();
      }
    }
    document.getElementById("game-board").innerHTML += "<br>";
  }
}

const Pacman = function(){
  this.x = 9;
  this.y = 5;
}



Pacman.prototype.move = function(someKeyCode){
  switch(someKeyCode){
    case 37: //Left
      if(boardData[currentGame.pacman.y][currentGame.pacman.x-1] !== 1){
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 3;
        currentPacman.x -= 1;
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 5;
        if(currentPacman.x < 0){
          currentPacman.x = 17;
        }
        drawMap();
      }
    break;
    case 39: //Right
      if(boardData[currentGame.pacman.y][currentGame.pacman.x+1] !== 1){
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 3;
        currentPacman.x += 1;
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 4;
        if(currentPacman.x > 16){
          currentPacman.x = 0;
        }
        drawMap();
      }
    break;
    case 38: //Up
      if(boardData[currentGame.pacman.y-1][currentGame.pacman.x] !== 1){
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 3;
        currentPacman.y -= 1;
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 6;
        
        if(currentPacman.y < 1){
          currentPacman.y = 12;
        }
        
        drawMap(); 
      }
    break;
    case 40: //Down
      if(boardData[currentGame.pacman.y+1][currentGame.pacman.x] !== 1){
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 3;
        currentPacman.y += 1;
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 7;
        if(currentPacman.y > 11){
          currentPacman.y = 0;
        }
        drawMap();
      }
    break;
  }
}


const Game = function(){
  this.pacman = {};
  
}

let currentGame;
let currentPacman;

function startGame() {
  currentGame = new Game();
  currentPacman = new Pacman();
  currentGame.pacman = currentPacman;
  drawMap();
  console.log("the game: ", currentPacman.y);
  

}

document.onkeydown = function(event){
  currentGame.pacman.move(event.keyCode)
}
































};
function newFunction(currentPacman) {
  if (currentPacman.x < 0) {
    currentPacman.x = 17;
  }
}

