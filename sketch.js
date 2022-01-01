function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // mousePressed();
}

function mousePressed() {
  // L5 噴灑技巧
  var count = int(random(5, 15)); // random 取整數
  var circleSize = random(50, 200);
  for (var i = 0; i < count; i++) {
    fill(random(200), random(220, 255), random(50));
    ellipse(mouseX + i * 5, mouseY, circleSize); 
    circleSize *= 0.9; // 從大畫到小
  }
}
