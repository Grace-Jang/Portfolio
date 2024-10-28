let soundFile;
let fft;

function preload() {
  soundFile = loadSound(
    'Amine Maxwell - Love (freetouse.com).mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

 

  fft = new p5.FFT();
  

  let button = createButton('⏯');
  button.mousePressed(toggleSound);
}

function draw() {
  
  background(255, 69, 0, 30);
  

  let spectrum = fft.analyze();
  
  noFill();
  
 
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width); 
    let y = map(spectrum[i], 0, 255, height, 0);  
    
   let hueValue = map(spectrum[i], 0, 255, 0, 360); 
    stroke(hueValue, 80, 100);

  
    let curveX = x + sin(i * 0.1) * 50; 
    vertex(curveX, y);
  }
  endShape();
}


function toggleSound() {
  if (soundFile.isPlaying()) {
    soundFile.pause();
  } else {
    soundFile.play();
  }
}
