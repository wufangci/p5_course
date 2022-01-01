function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
}

function draw() {
  background(0);
  circleModel();
  // circleModel2();
}

function circleModel() {
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 5; j++) {
      const colorRange = map(i, 0, 10, 0, 255);
      const frameCountRange = map(i, 0, frameCount, 0, i / 2);

      noFill();
      stroke(colorRange, 20);
      strokeWeight(frameCountRange);

      ellipse(windowWidth / 2, windowHeight / 2, (i * frameCount) / j + 1.5);
      if (j % 2 == 0) {
        strokeWeight(map(i, 0, frameCount, 0, i));
        ellipse(windowWidth / 2, windowHeight / 2, i / frameCount);
      }
    }
  }
}

function circleModel2() {
  for (var i = 0; i < 50; i--) {
    for (var j = 0; j < 5; j--) {
      noFill();
      stroke(map(i, 0, 10, 0, 255), 20);
      strokeWeight(map(i, 0, frameCount, 0, i / 2));
      ellipse(windowWidth / 2, windowHeight / 2, (i * frameCount) / j + 1.5);
      if (j % 2 == 0) {
        strokeWeight(map(i, 0, frameCount, 0, i));
        ellipse(windowWidth / 2, windowHeight / 2, i / frameCount);
      }
    }
  }
}
