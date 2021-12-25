function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}

var x, y;

function draw() {
  // map() 原始值 0 ~ width(畫布範圍) 目前的值 0 ~ 255 (顏色的範圍)
  x = random(windowWidth);
  y = random(windowHeight);
  var colorR = map(x, 0, windowWidth - 10, 0, 255, true); // 填色依照範圍調整顏色範圍
  fill(colorR, 0, 0);
  ellipse(x, y, 100, 100); // random 隨機改變 x,y 位置
}
