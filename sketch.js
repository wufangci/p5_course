function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 500;
  y = 500;
  // delta = 10;
  background(0);
}

var x, y;
var ang = 0;

function draw() {
  // background();
  for (i = 500; i >= 2; i -= 10) {
    var time = second();
    var count = map(i, 0, frameCount, 0, i / 2, true);
    var ang = time * i * -count;

    strokeWeight(0.5);
    var colorR = map(x, 0, i, 0, 10, true); // 填色依照範圍調整顏色範圍
    stroke(random(100, 150));

    fill(10);
    ellipse(width / 2, height / 2, i, i);
    fill(100);
    ellipse(width / 2, height / 2, i / 2, i / 2);
    fill(colorR, 7);
    arc(width / 2, height / 2, i + count, i + count, 0, ang, PI + QUARTER_PI);
  }
}
