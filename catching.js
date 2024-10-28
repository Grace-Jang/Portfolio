let route = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  for (let i = 0; i < 70; i++) {
    route[i] = new Line(width , height, random(0, 5)); 
  }
}

function draw() {
  background(200, 0);
  
  for (let i = 0; i < route.length; i++) {
    route[i].shine();  
    route[i].show();   
  }
}

class Line {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.angle = random(-PI / 6, PI / 6);  // branching effect
  }

  shine() {
    this.x += cos(this.angle) * 2;  
    this.y += sin(this.angle) * 2;  


    if (random(0) < 5) {
      this.angle += random(-PI / 3, PI / 3);  
    }


    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.x = width / 2;  
      this.y = height / 2;
      this.angle = random(-PI / 6, PI / 6);  
    }
  }

  show() {
    noStroke();
    fill(255, 100);
    ellipse(this.x, this.y, this.r);
  }
}

