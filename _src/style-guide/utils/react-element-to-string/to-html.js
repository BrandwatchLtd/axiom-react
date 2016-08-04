import { cloneElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { isReactElement } from 'style-guide/utils/react-elements';

export default function reactElementToHtmlString(element, withoutProps = []) {
  if (__SERVER__) {
    // Needs some sort of truthy content here.
    return 'SERVER';
  }

  if (Array.isArray(element)) {
    return element.reduce((string, element) => {
      return string += reactElementToHtmlString(element, withoutProps);
    }, '');
  }

  if (!isReactElement(element)) {
    return element;
  }

  const staticMarkup = renderToStaticMarkup(cloneElement(element,
    withoutProps.reduce((excludeObj, prop) => {
      excludeObj[prop] = null;
      return excludeObj;
    }, {}),
  ));

  return staticMarkup === '<noscript></noscript>' ? '' : staticMarkup;
}
