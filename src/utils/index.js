import { Children } from 'react';

export function findComponent(components, Component) {
  return Children.toArray(components).find(({ type }) => type === Component);
}

export function getCSSVar(variable, context) {
  if (typeof window === 'undefined') {
    return '';
  }

  if (!context || context === document) {
    context = document.documentElement;
  }

  return window
    .getComputedStyle(context)
    .getPropertyValue(`--${variable}`)
    .trim();
}
