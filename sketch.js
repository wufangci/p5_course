var clr;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#0000FF");
  clr = color("#DC143C");
  clr.setAlpha(100);
}

function draw() {
  /** L6
   *  examples
   *  _getBlue()  拿到 RGB 的 B 值
   *  setBlue() 設定 RGB 的 B 值
   **/

  stroke("#0000FF");
  strokeWeight(3);
  fill(clr);
  ellipse(mouseX, mouseY, 100);
}

function mousePressed() {
  var b = clr._getBlue();
  clr.setBlue(b + 20); // 每按一次滑鼠就增加 B 的值
}
