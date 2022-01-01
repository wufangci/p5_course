function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // mousePressed();
}

function mousePressed() {
  // L5 噴灑技巧
  var count = int(random(50, 150)); // random 取整數
  var circleSize = random(2, 20);
  for (var i = 0; i < count; i++) {
    noStroke();
    fill(random(255), random(200, 255), random(100, 200));
    ellipse(mouseX + random(-50, 50), mouseY + random(-50, 50), circleSize);
    circleSize *= 0.9; // 從大畫到小
  }
}
