let drops = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    for (let i = 0; i < 100; i++) {
        drops.push(new Drop(random(-width / 2, width / 2), random(-height / 2, height / 2)));
    }
}

function draw() {
    background(255,0);
    for (let drop of drops) {
        drop.update();
        drop.show();
    }
}

class Drop {
    constructor(x, y) {
        this.pos = createVector(x, y, random(-300, 300));
        this.speed = random(5, 10);
        this.length = random(10, 20);
    }

    update() {
    
        this.pos.y += this.speed;

        if (this.pos.y > height / 2) {
            this.pos.y = -height / 2;
            this.pos.x = random(-width / 2, width / 2);
            this.pos.z = random(-300, 300);
        }

    
        if (mouseIsPressed) {
            let mouseVector = createVector(mouseX - width / 2, mouseY - height / 2, 0);
            let direction = p5.Vector.sub(mouseVector, this.pos);
            direction.setMag(0.1);
            this.pos.add(direction);
        }
    }

    show() {
        stroke(0, 0, 255, 255); // Light blue color for raindrop
        strokeWeight(2);
        line(this.pos.x, this.pos.y, this.pos.z, this.pos.x, this.pos.y - this.length, this.pos.z);
    }
}
