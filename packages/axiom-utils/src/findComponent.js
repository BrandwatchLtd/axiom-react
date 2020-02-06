import { Children } from 'react';
import isComponent from './isComponent';

export default (elements, Component) => {
  const arr = Children.toArray(elements);
  for (let i = 0; i < arr.length; i++) {
    if (isComponent(arr[i], Component)) {
      return arr[i];
    }
  }
};
