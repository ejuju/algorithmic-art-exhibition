import { getSketchWidth, getSketchHeight } from '../util/p5';

export default (p5) => {
  let x1;
  let y1;

  p5.setup = function () {
    p5.createCanvas(getSketchWidth(), getSketchHeight());
    p5.noFill();
    p5.strokeWeight(0.2);
    x1 = p5.width;
    y1 = 0;
  };

  p5.draw = function () {
    p5.stroke('#ffffff');
    p5.bezier(x1, y1, p5.width / 2, p5.height / 2, 1, 1, 0, p5.height - y1);

    if (x1 >= 6) {
      x1 -= 6;
    }

    if (y1 < p5.height) {
      y1 += 2;
    }
  };
};
