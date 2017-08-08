export const flipOrders = {
  anticlockwise: {
    top: ['left', 'bottom', 'right'],
    right: ['top', 'left', 'bottom'],
    bottom: ['right', 'top', 'left'],
    left: ['bottom', 'right', 'top'],
  },
  clockwise: {
    top: ['right', 'bottom', 'left'],
    right: ['bottom', 'left', 'top'],
    bottom: ['left', 'top', 'right'],
    left: ['top', 'right', 'bottom'],
  },
  mirror: {
    top: ['bottom'],
    right: ['left'],
    bottom: ['top'],
    left: ['right'],
  },
};

export function positionToPlacement(position, offset) {
  return offset === 'middle' ? position : `${position}-${offset}`;
}

export function placementToPosition(placement) {
  const [position, offset] = placement.split('-');
  return [position, offset || 'middle'];
}

export function getPlacementFlipOrder(placement, flip) {
  const [primary] = placementToPosition(placement);
  return [primary, ...flipOrders[flip][primary]];
}
