import { isValidElement } from 'react';

export function isReactElement(element) {
  return isValidElement(element);
}

export function isReactElements(element) {
  return isReactElement(element) ||
    Array.isArray(element) && element.every(isReactElements);
}
