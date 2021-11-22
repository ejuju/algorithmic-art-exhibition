import { getSketchWidth, getSketchHeight, getRandNoise } from '../util/p5';

export default (p5) => {
  let boids;
  let NUMBER_OF_BOIDS = 40;

  p5.setup = function () {
    p5.noiseSeed(p5.random(1000));
    boids = [];

    p5.createCanvas(getSketchWidth(), getSketchHeight());
    p5.noStroke();
    p5.background('#fff');

    for (let i = 0; i < NUMBER_OF_BOIDS; i++) {
      boids.push(new Boid());
    }

    // console.log(boids);
  };

  p5.draw = function () {
    updateBoids(boids);
    // p5.background('#ffffff01');
  };

  p5.mousePressed = function () {
    boids.push(new Boid(p5.mouseX, p5.mouseY));
    boids.push(new Boid(p5.mouseX, p5.mouseY));
    boids.push(new Boid(p5.mouseX, p5.mouseY));
    boids.push(new Boid(p5.mouseX, p5.mouseY));
    boids.push(new Boid(p5.mouseX, p5.mouseY));
    boids.push(new Boid(p5.mouseX, p5.mouseY));
  };

  // Boids class
  class Boid {
    constructor(x, y) {
      this.size = 1;
      this.x = x || p5.width / 2;
      this.y = y || p5.height / 2;

      this.incX = p5.random(NUMBER_OF_BOIDS);
      this.incY = p5.random(NUMBER_OF_BOIDS);

      const rand = p5.random(0, 10);
      this.r = rand;
      this.g = rand;
      this.b = rand;
    }

    draw() {
      p5.fill(this.r, this.g, this.b);
      p5.circle(this.x, this.y, this.size);
    }

    move() {
      this.incX += 0.01;
      this.incY += 0.005;

      this.x += (p5.noise(this.incX) - 0.5) * (p5.width / 100);
      this.y += (p5.noise(this.incY) - 0.5) * (p5.height / 100);

      if (this.x > p5.width) {
        this.x = 0;
      }
      if (this.x < 0) {
        this.x = p5.width;
      }
      if (this.y > p5.height) {
        this.y = 0;
      }
      if (this.y < 0) {
        this.y = p5.height;
      }

      this.size = getRandNoise(p5, this.incX + 3.21, 0, 1);
    }
  }
};

function updateBoids(boids) {
  boids.forEach((b) => {
    b.move();
    b.draw();
  });
}
