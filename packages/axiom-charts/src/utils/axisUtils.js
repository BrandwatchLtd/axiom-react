const DEFAULT_TICK_COUNT = 5;
const MIN_TICK_COUNT = 3;

export function getEquallyDistributedAxisLabels({
  lower,
  upper,
  tickCount = DEFAULT_TICK_COUNT,
  labelFormatter = v => v,
}) {
  if (lower === upper) {
    return [];
  }

  const finalTickCount = Math.max(MIN_TICK_COUNT, tickCount);
  const tickSize = (upper - lower) / (finalTickCount - 1);
  const ticks = [];

  for (let index = 0; index < finalTickCount; index++) {
    ticks.push(index * tickSize + lower);
  }

  return ticks.map(labelFormatter);
}

function getOrder(value) {
  if (value === 0) {
    return 0;
  }

  return Math.floor(Math.log10(value));
}

export function getAxisUpper(values) {
  const max = Math.max.apply(null, values);
  const mag = Math.pow(10, getOrder(max));
  return Math.ceil(max / mag) * mag;
}

export default {
  getEquallyDistributedAxisLabels,
  getAxisUpper,
};
