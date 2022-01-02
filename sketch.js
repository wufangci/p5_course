var mode = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  mode == 1 ? background(0, 1) : background(255, 1);
}

function mousePressed() {
  mode++;
}
function mouseMoved() {
  /** L5
      pmouseX / PmosueY
        利用之前的mouse的設計 var delta = abs(pmouseX - mouseX) 
        設定這樣的參數 會有一個比刷的大小判定可以讓滑鼠感覺揮灑感覺在潑墨的感覺

      abs() 取得正數
      dist() 兩者之間的距離
      sqrt() 開平方之後的數
   */

  var count = int(random(50, 150)); // random 取整數
  var circleSize = random(2, 20);
  var delta = sqrt(dist(pmouseX, pmouseY, mouseX, mouseY)) * 10; // dist 兩點之間的距離
  // var delta = abs(pmouseX - mouseX);
  console.log(delta);

  if (mode === 1) {
    for (var i = 0; i < count; i++) {
      noStroke();
      fill(
        random((frameCount % 255) + mouseY),
        random(200, 255),
        random(100, 200),
        random(50, 150)
      );
      ellipse(
        mouseX + random(-delta, delta),
        mouseY + random(-delta, delta),
        circleSize,
        circleSize,
        200
      );
      circleSize *= 0.9; // 從大畫到小
    }
  } else if (mode == 2) {
    fill(
      random((frameCount % 255) + mouseY),
      random(100, 150),
      random(100, 200),
      random(50, 150)
    );
    ellipse(
      mouseX + random(-delta, delta),
      mouseY + random(-delta, delta),
      circleSize * 0.9,
      circleSize * 0.9,
      200
    );
  } else {
    mode = 1;
  }
}
