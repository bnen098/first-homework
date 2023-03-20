let points = [[-3, 5], [3, 7], [1, 5], [2, 4], [4, 3], [5, 2], [6, 2], [8, 4], [8, -1], [6, 0], [0, -3], [2, -6], [-2, -3], [-4, -2], [-5, -1], [-6, 1], [-6, 2]];


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let x = 0; x < points.length; x++) {
    for (let y = 0; y < points[x].length; y++) {
      points[x][y] = points[x][y] * 10;
    }
  }
}

function draw() {
 
  background(255);

  let centerX = mouseX;
  let centerY = mouseY;
  translate(centerX, centerY);

  let fishx = map(mouseX, 0, width, 0.5, 3);
  let fishy = map(mouseY, 0, height, 0.5, 3);
  scale(fishx);
  scale(fishy);

  push();
  noFill();
  for (let i = 0; i < 5; i++) {

    if (i < 5) {
      let gradient = drawingContext.createLinearGradient(-200, 0, 200, 0);
      gradient.addColorStop(0, color(0, 255, 0));
      gradient.addColorStop(1, color(0, 0 ,255 ));
      drawingContext.strokeStyle = gradient;
    } 

    strokeWeight(2+i*0.5);

    beginShape();
    for (let j = 0; j < points.length; j++) {
      vertex(points[j][0], points[j][1]);
    }
    endShape(CLOSE);
    scale(0.8);
  }
  pop();

  textSize(10);
  textAlign(CENTER, CENTER);
  fill(0, 125, 125)
  text("魚", 0, 0);


}
