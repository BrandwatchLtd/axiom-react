export function hasNext(totalIndex, currentIndex) {
  return currentIndex < totalIndex;
}

export function hasPrev(totalIndex, currentIndex) {
  return currentIndex > 0;
}

export function getNext(totalIndex, currentIndex) {
  if (hasNext(totalIndex, currentIndex)) {
    return ++currentIndex;
  }

  return totalIndex;
}

export function getPrev(totalIndex, currentIndex) {
  if (hasPrev(totalIndex, currentIndex)) {
    return --currentIndex;
  }

  return 0;
}

export default {
  hasNext,
  hasPrev,
  getNext,
  getPrev,
};
