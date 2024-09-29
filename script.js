/* VARIABLES */
let eyeWIDTH = 50;
let eyeHEIGHT = 40;
let pupilWIDTH = 22;
let pupilHEIGHT = 25;
/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background(151,208,155); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);
  //face
  fill(230,180,129);
  ellipse(width/2,height/2,175,200);
  //eyes
  if (mouseIsPressed){
    //eyes closed
    fill(0);
    ellipse(170,170,eyeWIDTH,eyeHEIGHT/8);
    ellipse(230,170,eyeWIDTH,eyeHEIGHT/8);
  } else {
    //eyes open
    fill(224,224,224);
    ellipse(170,170,eyeWIDTH,eyeHEIGHT);
    fill(224,224,224);
    ellipse(230,170,eyeWIDTH,eyeHEIGHT);
    //pupils
    fill(51,25,0);
    ellipse(170,170,pupilWIDTH,pupilHEIGHT);
    fill(51,25,0);
    ellipse(230,170,pupilWIDTH,pupilHEIGHT);
  }
  //mouth
  fill(255,153,204);
  arc(200,230,50,50,0,180);
  //text
  fill(0,0,0);
  textSize(15);
  text('This is an avatar representing myself',20,20);
  textSize(15);
  text('click to see me blink',250,350);
}