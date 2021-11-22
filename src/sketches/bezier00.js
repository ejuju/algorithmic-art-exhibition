import { getSketchWidth, getSketchHeight, getRandNoise } from '../util/p5';

export default (p5) => {
  let inc = 0;

  let x1;
  let y1;

  let x2;
  let y2;
  let x3;
  let y3;

  let x4;
  let y4;

  let clicked;

  // Setup
  p5.setup = () => {
    inc = 0;
    clicked = false;
    p5.createCanvas(getSketchWidth(), getSketchHeight());
    p5.background('#fff');
    p5.noFill();
    p5.stroke('#000');
    p5.strokeWeight(0.1);
    // p5.noLoop();
  };

  // Draw
  p5.draw = () => {
    // Check if user mouse is above or below sketch (sides is fine)

    if (clicked === false) {
      x1 = getRandNoise(p5, inc - 1, 0, getSketchWidth());
      y1 = getRandNoise(p5, inc - 2, 0, getSketchHeight());
    }

    x2 = getRandNoise(p5, inc, 0, getSketchWidth());
    y2 = getRandNoise(p5, inc + 3, 0, getSketchHeight());

    x3 = getRandNoise(p5, inc + 6, 0, getSketchWidth());
    y3 = getRandNoise(p5, inc + 9, 0, getSketchHeight());

    x4 = getRandNoise(p5, inc + 6, 0, getSketchWidth());
    y4 = getRandNoise(p5, inc + 9, 0, getSketchHeight());

    p5.bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    inc += 0.008;
  };

  p5.mousePressed = function () {
    if (
      p5.mouseX > 0 &&
      p5.mouseX < p5.width &&
      p5.mouseY > 0 &&
      p5.mouseY < p5.height
    ) {
      clicked = true;
      x1 = p5.mouseX;
      y1 = p5.mouseY;
    }
  };
};
