export function getSketchWidth() {
  //   return window.innerWidth - 36;
  return getMinSize();
}

export function getSketchHeight() {
  //   return window.innerHeight - 200;
  return getMinSize();
}

function getMinSize() {
  const additionalSpace = 36;

  if (window.innerWidth < window.innerHeight) {
    return window.innerWidth - additionalSpace;
  } else {
    return window.innerHeight - 160;
  }
}

// Including min and max
export function getRandNoise(p5, inc, min, max) {
  return p5.noise(inc) * (max - min + 1) + min;
}
