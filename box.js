let d = 55;
let xPos = [];
let yPos = [];
let clicked = [];
let colors = [];
let cols, rows;

function setup() {
  createCanvas(windowWidth, windowHeight);


  //grid arrangement
  cols = floor((windowWidth - 30) / d); //number of sq
  rows = floor((windowHeight - 30) / d); // num

  // middle
  let startX = (windowWidth - cols * d) / 2;
  let startY = (windowHeight - rows * d) / 2;

  // locations of sqaure for begi.
  for (let x = startX; x < startX + cols * d; x += d) {
    for (let y = startY; y < startY + rows * d; y += d) {
      xPos.push(x);
      yPos.push(y);
      clicked.push(false); // beginng - false)
      colors.push(color(0, 0, 0, 0)); // color black
    }
  }
}

function draw() {
  background(0);

  // sqaures
  for (let i = 0; i < xPos.length; i++) {
    stroke(255);

    // interaction clicking
    if (clicked[i]) {
      fill(colors[i]);
      draw3DSquare(xPos[i], yPos[i]); // 3D effect
    } else {
      fill(0);
      rect(xPos[i], yPos[i], d, d); // 2D effect
    }
  }
}

// clicked squares to look like 3d
function draw3DSquare(x, y) {
  let offset = 20;

  // front 2d
  rect(x, y, d, d);

  // depth for lines
  line(x, y, x - offset, y - offset); // left up
  line(x + d, y, x + d - offset, y - offset); // r up
  line(x + d, y + d, x + d - offset, y + d - offset); // r down
  line(x, y + d, x - offset, y + d - offset); // left down

  // back of sqaure part
  noFill();
  rect(x - offset, y - offset, d, d);
}

// click interaction when pressed
function mousePressed() {
  for (let i = 0; i < xPos.length; i++) {
    //location of mouse
    if (
      mouseX > xPos[i] &&
      mouseX < xPos[i] + d &&
      mouseY > yPos[i] &&
      mouseY < yPos[i] + d
    ) {
      // random
      let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);
      let alpha = 100;

      colors[i] = color(r, g, b, alpha);
      clicked[i] = true;
    }
  }
}