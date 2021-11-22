export function getSketchWidth() {
  return window.innerWidth - 36;
}

export function getSketchHeight() {
  return window.innerHeight - 200;
}

// Including min and max
export function getRandNoise(p5, inc, min, max) {
  return p5.noise(inc) * (max - min + 1) + min;
}
