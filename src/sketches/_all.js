import bezier00 from './bezier00';
import daboids from './daboids';
import descending00 from './descending';

export default [
  addSketch(descending00, 'Descending #00', false),
  addSketch(daboids, 'Da Boids', true),
  addSketch(bezier00, 'Bézier #00', true),
];

function addSketch(sketchFunc, title, interactive) {
  return {
    sketchFunc,
    title,
    interactive,
  };
}
