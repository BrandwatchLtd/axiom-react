export function positionToPlacement(position, offset) {
  return offset === 'middle' ? position : `${position}-${offset}`;
}

export function placementToPosition(placement) {
  const [position, offset] = placement.split('-');
  return [position, offset || 'middle'];
}

export function getPlacementFlipOrder(placement) {
  return [
    'top', 'top-start', 'top-end',
    'right', 'right-start', 'right-end',
    'bottom', 'bottom-start', 'bottom-end',
    'left', 'left-start', 'left-end',
  ].reduce((o, p) => {
    if (p !== placement) {
      o.unshift(p);
    }

    return o;
  }, [placement]);
}
