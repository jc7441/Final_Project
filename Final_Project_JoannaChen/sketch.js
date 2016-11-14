var shed = [];
var elephant;
var tradeMap;
var lastDays;

function preload() {
  elephant = loadImage("data/elephant.png");
  tradeMap = loadImage("data/map.png");
}

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  //before main screen
  if (frameCount < 200) {
    tearShed();
  }
  //home screen
  if (frameCount > 200) {
    background(0);
    scale(.7);
    image(elephant, 100, 200); //1
    image(elephant, 500, 200); //2
    image(elephant, 300, 500); //3
    if ((mouseX > 89) && (mouseX < 233) && (mouseY > 142) && (mouseY < 247)) { //1
      if (mouseIsPressed) { //if mouse is pressed on top left elephant, then it will take you to the video page
        vid();
      }
    }
    if ((mouseX > 370) && (mouseX < 506) && (mouseY > 142) && (mouseY < 247)) { //2
      if (mouseIsPressed) { //if mouse is pressed on top right elephant, then it will take you to the map page
        background(0);
        image(tradeMap, 0, 0);
      }
    }
  }
} //closes draw

//falling teardrops
function tearShed() {
  background(0);
  for (var i = 0; i < 1; i++) {
    var t = new Tears(createVector(random(0, width)), 0);
    shed.push(t);
  }
  for (i = 0; i < shed.length; i++) {
    shed[i].run();
  }
}

//video page
function vid() {
  createCanvas(0, 0);
  lastDays = createVideo("data/lastdays.mp4");
  lastDays.size(600, 300);
}

/*
function mousePressed() {
  console.log("X: " + mouseX);
  console.log("Y: " + mouseY);
}
*/