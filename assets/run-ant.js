/* ----------------------------------------------------------------------
Brian Chung
Last Modified: September 28, 2019
------------------------------------------------------------------------*/


//Constant variables to store the values of each direction
const WEST = 0; const NORTH = 1; const EAST = 2; const SOUTH = 3
//Constant variable to store the length of gridbox size in pixels
const gridUnit = 9.5
//Initialize the position array as a 1 dimensional array
var pos = [];
//Starting x,y cordinates of the ant, the center of the 41x41 grid
var x = 20, y = 20;
var totNoOfMoves = 1000; //Total number of moves the ant is to make
var currentMoves = 0; //Initialize number of moves the ant has made to 0
var dir = WEST; //Starting direction

//Initialize grid and assign each position a color
//COMPLEXITY: O(N^2)
function init_grid() {
      for (var i = 0; i < 41; i++) {
        pos[i] = []; //Create a two-dimensional array to store current state of each box in the grid
          for (var j=0; j < 41; j++) {
            pos[i][j] = 0; //store the current color state to the posistion array. Initial state is black (0)
          }
      }
}

//Function to draw triangle given x and y position on grid as well as direction the triangle should be facing
//COMPLEXITY: O(1)
function draw_ant(x,y,dir) {
  fill(255); //Set triangle color to white
  noStroke(); //No stroke on triangle
  switch(dir){
    case 0: //Draw trinagle facing west
      triangle(x+gridUnit,y,x+gridUnit,y+gridUnit,x, y+(gridUnit/2));
      break;
    case 1: //Draw trinagle facing north
      triangle(x+gridUnit,y+gridUnit,x+(gridUnit/2), y,x,y+gridUnit);
      break;
    case 2: //Draw trinagle facing east
      triangle(x,y,x+gridUnit,y+(gridUnit/2),x, y+gridUnit);
      break;
    case 3: //Draw trinagle facing south
      triangle(x,y,x+(gridUnit/2), y+gridUnit,x+gridUnit,y);
      break;

  }
}

//Function to fill in color to each box in the grid
//COMPLEXITY: O(N^2)
function drawGridColor(){
  //Iterate through every element in the two-dimensional array
  for (var i = 0; i < 41; i++) {
    for (var j = 0; j < 41; j++) {
      if(pos[i][j] == 0) //If state 0, set fill color to black
      {
        fill('black');
      }
      else if(pos[i][j] == 1) //If state 1, set fill color to red
      {
        fill('red');
      }
      else if(pos[i][j] == 2) //If state 2, set fill color to yellow
      {
        fill('yellow');
      }
      else if(pos[i][j] == 3) //If state 3, set fill color to blue
      {
        fill('blue');
      }
      noStroke(); //No stroke
      rect(i*10,j*10,gridUnit,gridUnit); //Draw rectangle in that pixel position with determined color
    }
  }
}

//Function that deals with ant direction
//COMPLEXITY: O(1)
function ant_dir(){
  //turn right (NORTH) if state 0 or 1, else turn left (SOUTH)
  if(dir == WEST){
    if(pos[x][y] == 0 || pos[x][y] == 1){
      dir = NORTH;
    } else{
      dir = SOUTH;
    }
  }
  //turn right (EAST) if state 0 or 1, else turn left (WEST)
  else if(dir == NORTH){
    if(pos[x][y] == 0 || pos[x][y] == 1){
      dir = EAST;
    } else{
      dir = WEST;
    }
  }
  //turn right (SOUTH) if state 0 or 1, else turn left (NORTH)
  else if(dir == EAST){
    if(pos[x][y] == 0 || pos[x][y] == 1){
      dir = SOUTH;
    } else{
      dir = NORTH;
    }
  }
  //turn right (WEST) if state 0 or 1, else turn left (EAST)
  else if(dir == SOUTH){
    if(pos[x][y] == 0 || pos[x][y] == 1){
      dir = WEST;
    } else{
      dir = EAST;
    }
  }
}

//Function that deals with ant moving forward
//COMPLEXITY: O(1)
function move_forward() {
  //Change ant's current position to next color state
  ++pos[x][y];
  //If color state exceeds limit, wrap back to state 0 (black)
  if(pos[x][y] > 3){
    pos[x][y] = 0;
  }
  switch (dir) {
    case WEST:
      --x;
      break;
    case NORTH:
      --y;
      break;
    case EAST:
      ++x;
      break;
    case SOUTH:
      ++y;
      break;
    default:

  }
}

//JS Setup function
function setup() {
  createCanvas(410, 410); //Create a canvas of 410 x 410 pixels
  background(225); //Set background to white
  init_grid(); //Initialize grid and set each box in the grid to a black state
}

//JS Draw (Runtime) function
//COMPLEXITY: O(N)
function draw() {
  //If the number of moves is less than the number of moves by the ant
  if(currentMoves < totNoOfMoves){
    ant_dir();
    move_forward();
    drawGridColor(); //Color in all boxes in the grid with assigned colors
    //Draw a triangle based given x and y on cordinate system, and direction the "ant" should be facing
    draw_ant(x*10, y*10, dir); //Pixel position will be 10 times the x and y cordinate of the grid
    currentMoves++; //Increment the number of moves the ant has completed
  }
}
//Total Time Complexity: O(N^2) * O(1) + O(N^2) = O(N^2)
