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
  
 
   bgred = loadImage('tomato.png');
  bgorange = loadImage('https://www.alimentarium.org/en/system/files/thumbnails/image/AL012-02%20carotte.jpg');

  bgyellow = loadImage('https://kathleendichiara.com/wp-content/uploads/2017/12/fresh-ripe-lemons-isolated-on-white-background_BPXbN31d3zx-e1512149333632.jpg');
  bggreen = loadImage('https://cdn.shopify.com/s/files/1/1143/3886/products/pepper-jalapeno_7dc15c16-6b00-45f9-9cad-b7dfdecb3c24_1024x1024.jpg?v=1522431847');
  bgblue = loadImage('https://thumbs.dreamstime.com/b/single-blueberry-isolated-berry-white-background-103533622.jpg');
  bgpurple = loadImage('https://www.freshplaza.es/images/2017/boniatos.jpg');
  bgblack = loadImage('https://i1.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2016/02/ThinkstockPhotos-478874358.jpg?fit=685%2C514&ssl=1');
  
  bgwhite = loadImage('egg-02.png');
    bgwhite2 = loadImage('https://www.wallflowerproduce.com.au/wp-content/uploads/2019/10/cauliflower.jpg');
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
      image(bgred, 0, 0);
  } else if (label == "orange") {
  image(bgorange, 600, 600);
  } else if (label == "yellow") {
  image(bgyellow, 0, 500);
  } else if (label == "green") {
  image(bggreen, 30, 400);
  } else if (label == "blue") {
  image(bgblue, 800, 300);

    
  } else if (label == "purple") {
  image(bgpurple, 1100, 200);
  } else if (label == "black") {
  image(bgblack, 800, 60);
  } else if (label == "white") {

  image(bgwhite, 1200, 0) ;

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



