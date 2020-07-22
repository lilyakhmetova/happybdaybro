function setup() {
    let myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
    myCanvas.parent("canvas");
    background(0);
    colorMode(HSB);
    noFill();
}

function draw() {
  background(0);

  stroke('#FF1493');
  rotateY(millis() / 1500);
  sphere(100, 24, 2);

  stroke('#00FF00');
  translate(100, 200);
  rotateY(millis() / 5000);
  sphere(120, 24, 24);

  stroke(245, 255, 255);
  translate(-400, -200);
  rotateX(millis() / 5000);
  sphere(200, 24, 3);
  //
  // rotateY(millis() / 1500);
  // sphere(100, 24, 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

new CircleType(document.getElementById('text'))
