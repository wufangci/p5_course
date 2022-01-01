function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
}

function draw() {
  background(0);
  circleModel();
}

function circleModel() {
  // TODO 把指針概念加進去
  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 5; j++) {
      const colorRange = map(i, 0, 10, 0, 255);
      const frameCountRange = map(i, 0, frameCount, 0, i / 2, true);
      const circleSize = (i * frameCount) / j + 1.5;

      console.log(i, "i");
      console.log(j, "j");
      console.log(circleSize, "circleSize");
      console.log(colorRange, "colorRange");
      console.log(frameCountRange, "frameCountRange");

      noFill();
      stroke(colorRange, 20);
      strokeWeight(frameCountRange);

      ellipse(windowWidth / 2, windowHeight / 2, circleSize);
      if (j % 5 == 0) {
        strokeWeight(map(i, 0, frameCount, 0, i));
        ellipse(windowWidth / 2, windowHeight / 2, i / frameCount);
      }
    }
  }
}
