 var myState = 0 ;



function setup() {
  createCanvas(800, 800) ;
  background("blue")
}

function draw() {

switch (myState) {

  case 0:
  fill("white")
  text("Why did the chicken cross the road?", 10, 10) ;

  break;

  case 1:
  background("green")
  fill("white")
  text("To get to the other side", 20, 10) ;
  break ;
}
}

function mouseReleased() {

myState = myState + 1 ;
if (myState > 1 )
  myState = 0 ;
}
