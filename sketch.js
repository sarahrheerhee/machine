// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/SWHaKxzOY/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(1920, 960);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
  
 
   bgred = loadImage('colors-01.svg');
  
  bgorange = loadImage('colors-07.svg');

  bgyellow = loadImage('colors-02.svg');
  bggreen = loadImage('colors-03.svg');
  bgblue = loadImage('colors-04.svg');
  bgpurple = loadImage('colors-05.svg');
  bgblack = loadImage('colors-06.svg');
  
  }   


// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // Pick an emoji, the "default" is train
  let emoji = "";
  if (label == "red") {
      image(bgred, 1000, 600);
    img.resize(5000, 1000);
  } else if (label == "orange") {
  image(bgorange, 600, 600);
    img.resize(5000, 1000);
  } else if (label == "yellow") {
  image(bgyellow, 0, 500);
    img.resize(5000, 1000);
  } else if (label == "green") {
  image(bggreen, 30, 400);
    img.resize(5000, 1000);
  } else if (label == "blue") {
  image(bgblue, 800, 300);
img.resize(5000, 1000);
    
  } else if (label == "purple") {
  image(bgpurple, 1100, 200);
    img.resize(5000, 1000);
  } 
  
  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}



