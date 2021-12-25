function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  background(100);

  // 原始值 0 ~ width(畫布範圍) 目前的值 0 ~ 255 (顏色的範圍)
  var colorR = map(mouseX, 0, windowWidth, 0, 255, true); // true 避開負值
  textSize(40);
  text(colorR, 50, 50);
  // 填色依照範圍調整顏色範圍
  fill(colorR);
  ellipse(mouseX, mouseY, 50, 50);
}
