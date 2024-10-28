let routes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20); 
}

function draw() {
  background(20, 20, 20, 25); //transparent to give trail effect 
  for (let i = 0; i < routes.length; i++) {
    routes[i].shine();  
    routes[i].show();   
  }
}

function mousePressed() {
  // new creating root 
  for (let i = 0; i < 70; i++) {
    routes.push(new Line(mouseX, mouseY, random(2, 5)));
  }
}

class Line {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.angle = random(-PI / 6, PI / 6); // branching effect
    this.color = color(random(100, 255), random(100, 255), random(100, 255), 100);
  }

  shine() {
    this.x += cos(this.angle) * 2;  
    this.y += sin(this.angle) * 2;  

    // curve as gorwing 
    if (random(1) < 0.05) {
      this.angle += random(-PI / 3, PI / 3);  
    }

    // recycle in the beginning 
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.x = mouseX;  
      this.y = mouseY;
      this.angle = random(-PI / 6, PI / 6);  
    }
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r);
  }
}
