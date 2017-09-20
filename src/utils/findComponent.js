import { Children } from 'react';

export default (components, Component) => {
  const arr = Children.toArray(components);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === Component) {
      return arr[i];
    }
  }
};
