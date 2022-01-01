function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
}

function draw() {
  background(10);
  drawRect();
}

function drawRect() {
  // L5 example loop and if else
  var count = 0; // counter 當累加的改變條件
  for (var i = 0; i < windowWidth; i += 50) {
    for (var j = 0; j < windowHeight; j += 50) {
      // 間格 50 畫一個方形

      if (count % 5 < 4) {
        fill(random(200, 255), random(255), random(255), 200); // 隨機方形取顏色
        stroke(random(200, 255), random(255), random(255), 200); // 隨機線條取顏色

        rect(i, j, 40, 40, 5);
        if (random() < 0.5) {
          fill(10);
          ellipse(i + 20, j + 20, 20);
          noStroke();

          if (random() < 0.5) {
            noStroke();
            fill(random(200, 255), random(255), random(255), 200); // 隨機方形取顏色
            ellipse(i + 20, j + 20, 10);
          }
        }
      }
      count += 1;
      console.log(i, "i");
      console.log(count, "count");
    }
  }
}
