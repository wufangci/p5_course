function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  x = 500;
  y = 500;
  // delta = 10;
}

var x, y;
var ang = 0;

function draw() {
  for (i = 700; i >= 2; i -= 10) {
    var time = second();
    var ang = time / 20;
    // noStroke();
    strokeWeight(0.5);
    var colorR = map(x, 0, i, 0, 100, true); // 填色依照範圍調整顏色範圍
    stroke(160);
    fill(colorR, 7);
    arc(width / 2, height / 2, i, i, 0, ang - i, PIE);
    if (i % 2 === 0) {
    }
  }
}
