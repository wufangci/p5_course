function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  x = windowWidth / 2;
  y = windowHeight / 2;
  delta = 10;
}

var x, y;

function draw() {
  // map() 原始值 0 ~ width(畫布範圍) 目前的值 0 ~ 255 (顏色的範圍)
  // 逼近 lerp(start, stop, amt) amt : 介於 0 ~ 1

  delta = mouseX / 50;
  x += random(-delta, delta);
  y += random(-delta, delta);
  x = lerp(x, mouseX, 0.04); // 跟著 x 逼近移動
  y = lerp(y, mouseY, 0.04); // 跟著 y 逼近移動
  var colorR = map(x, 0, windowWidth - 10, 0, 255, true); // 填色依照範圍調整顏色範圍
  fill(colorR, 5);
  stroke(5, 2);
  ellipse(x + 100, y + 100, 200, 200); // random 隨機改變 x,y 位置
  // stroke(100, 2);
  // ellipse(x + random(50), y + random(50), 200, 200); // random 隨機改變 x,y 位置
}
