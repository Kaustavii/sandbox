//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let Img;
let Forest;
let city;
let house;
let lucy;
let lucy2;
let linus;
let linus2;
let music;

function preload() {
  Img = loadImage("assets/snoopy.png");
  Forest = loadImage("assets/forest.jpg");
  city = loadImage("assets/city.jpg");
  house = loadImage("assets/snoopyhouse.png");
  lucy = loadImage("assets/lucy.jpg");
  lucy2 = loadImage("assets/Lucywsnoopy.jpg");
  linus = loadImage("assets/linus.jpg");
  linus2 = loadImage("assets/linuswsnoopy.jpg");
  music = loadSound("assets/Peanuts.mp3");
}
/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();
  // Set up the home screen
  background('lavender');
  textFont('Chalkduster');
  text(
    "Welcome to Snoopy's Great Adventure! \n Help him make it to Snoopy's house!",
    width / 2,
    height / 2 - 125
  );


  // Create buttons for all screens
  enterButton = new Sprite(width/2, height/2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite (-150, -150);
}

/* DRAW LOOP REPEATS */
function draw() {

  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = 'k';
  enterButton.color = 'plum';
  enterButton.text = 'Enter';
  screen == 0;
  
  // draw snoopy at start
  if (screen == 0 || screen == 1 || screen == 2){
    //Display Img
    Img.resize(100,0);
    image(Img, 250, 150);
  }

  // Check enter button
  if (enterButton.mouse.presses()){
    background('pink')
    showScreen1();
     screen = 1;
    Forest.resize(175,0);
    image(Forest, 20, 135)
    city.resize(135,0);
    image(city, 420, 140);
  }

  if (screen == 1){
    if(a1Button.mouse.presses()){
      print('Display screen 2');
      screen = 2;
      showScreen2();
    } else if (a2Button.mouse.presses()){
      print('Display screen 5');
      screen = 5;
      showScreen5();
    }

  } else if (screen == 2){
    lucy.resize(75,0);
    image(lucy, 75,150);
    linus.resize(110,0);
    image(linus, 400, 155);
    if (b1Button.mouse.presses()){
      showScreen3();
      lucy2.resize(200,0);
      image(lucy2, 200, 150);
      screen = 3;
    } else if (b2Button.mouse.presses()){
      showScreen4();
      screen = 4;
    }
  }
  print(screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1(){
  background('pink');
  text('Snoopy is stuck in a fork between \n a forest and city!',
      width/2,
      height/2 - 100);
  enterButton.pos = {x: -100, y: -100};
  // Add A1 button
  a1Button.w = 75;
  a1Button.h = 50;
  a1Button.collider = 'k';
  a1Button.color = 'plum';
  a1Button.text = 'Forest';
  a1Button.pos = {x: width/2 - 60, y: height/2 + 100};
  //Add A2 button
  a2Button.w = 75;
  a2Button.h = 50;
  a2Button.collider = 'k';
  a2Button.color = 'plum';
  a2Button.text = 'City';
  a2Button.pos = {x: width/2 + 70, y: height/2 + 100};
}
function showScreen2(){
  background('#87CEEB');
  text('Snoopy found 2 of his friends! \n Who does he talk to?',
      width/2,
      height/2 - 125);
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -50, y: -50};
  //Add B1 button
  b1Button.w = 70;
  b1Button.h = 50;
  b1Button.collider = 'k';
  b1Button.color = 'plum';
  b1Button.text = 'Lucy';
  b1Button.pos = {x: width/2 - 50, y: height/2 + 100};
  //Add B2 button
  b2Button.w = 70;
  b2Button.h = 50;
  b2Button.collider = 'k';
  b2Button.color = 'plum';
  b2Button.text = 'Linus';
  b2Button.pos = {x: width/2 +50, y: height/2 + 100};
}
function showScreen3(){
  background('#D2B48C');
  text('Lucy talked to Snoopy \n until it started raining!',
       width/2,
       height/2 - 100);
  b1Button.pos = {x: -100, y: -100};
  b2Button.pos = {x: -150, y: -150};
}
function showScreen4(){
  background('#E6E6FA');
  linus2.resize(150,0);
  image(linus2, 200, 125);
  text('Linus talked and walked snoopy home!',
       width/2,
       height/2 - 100);
  b1Button.pos = {x: -100, y: -100};
  b2Button.pos = {x: -150, y: -150};
}
function showScreen5(){
  background('#9ee7b3');
  text('The city trail lead directly to his house!',
       width/2,
       height/2 - 100);
  house.resize(125,0);
  image(house, 250, 150);
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -50, y: -50};
}
