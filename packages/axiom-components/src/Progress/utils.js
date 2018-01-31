const DIAMETER = 24;
const STROKE_WIDTH = 4;
const INNER_RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
const STROKE_DASH_ARRAY = 2 * Math.PI * INNER_RADIUS;

export const getArcProperties = ({ percent }) => ({
  diameter: DIAMETER,
  innerRadius: INNER_RADIUS,
  strokeWidth: STROKE_WIDTH,
  strokeDasharray: STROKE_DASH_ARRAY,
  strokeDashoffset: ((100 - percent) / 100) * STROKE_DASH_ARRAY,
});
