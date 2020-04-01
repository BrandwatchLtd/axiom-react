import { Children } from 'react';
import isComponent from './isComponent';

export default (elements, Component) => {
  const arr = Children.toArray(elements);
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //Storybook wraps components in this outer wrapper
    if (element.type && element.type.displayName === 'MDXCreateElement') {
      if (element.props.originalType.typeRef == Component) {
        return element;
      }
    }
    if (isComponent(element, Component)) {
      return element;
    }
  }
};
