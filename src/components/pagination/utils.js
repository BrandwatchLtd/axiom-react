const RANGE_BOUNDS_OFFSET = 2;

export function getSetStart(current, range) {
  return current < range + RANGE_BOUNDS_OFFSET ? 1 :
    current - (((current - 1) - RANGE_BOUNDS_OFFSET) % Math.max(1, range - 1));
}

export function isLargerThanRange(range, total) {
  return range > 0 && total > range + (RANGE_BOUNDS_OFFSET * 2);
}

export function isWithinStartRange(current, range) {
  return getSetStart(current, range) < range + RANGE_BOUNDS_OFFSET;
}

export function isWithinEndRange(current, range, total) {
  return getSetStart(current, range) > total - (range + RANGE_BOUNDS_OFFSET);
}

export function getDisplayRange(current, range, total) {
  const display = [];
  let start = 1;
  let end = total;

  if (isLargerThanRange(range, total)) {
    if (isWithinStartRange(current, range)) {
      end = Math.min(total, range + RANGE_BOUNDS_OFFSET);
    } else if (isWithinEndRange(current, range, total)) {
      start = total - ((range - 1) + RANGE_BOUNDS_OFFSET);
    } else {
      start = getSetStart(current, range);
      end = start + (range - 1);
    }
  }

  for (let i = start; i <= end; i++) {
    display.push(i);
  }

  return display;
}
