import { Children } from 'react';

export function findComponent(components, Component) {
  return Children.toArray(components).find(({ type }) => type === Component);
}
