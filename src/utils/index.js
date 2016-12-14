import { Children } from 'react';

export function findComponent(components, Component) {
  return Children.toArray(components).find(({ type }) => type === Component);
}

export function getCSSVar(variable) {
  if (typeof window === 'undefined') {
    return '';
  }

  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`--${variable}`)
    .trim();
}
