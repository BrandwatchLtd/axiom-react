import { isReactElement } from 'style-guide/utils/react-elements';

const PROP_EXCLUDE_LIST = ['children'];

function renderProps(props) {
  return Object.keys(props).reduce((acc, prop) => {
    if (!PROP_EXCLUDE_LIST.includes(prop)) {
      const value = typeof props[prop] === 'string'
        ? `"${props[prop]}"`
        : `{ ${props[prop]} }`;

      return `${acc} ${prop}=${value}`;
    }

    return acc;
  }, '');
}

function getDisplayName(Component) {
  return Component.__ax_displayName ||
    Component.name ||
    Component.displayName ||
    (typeof Component === 'string' ? Component : 'Component');
}

export default function reactElementToJsxString(element) {
  if (Array.isArray(element)) {
    return element.reduce((string, element) => {
      return string += reactElementToJsxString(element);
    }, '');
  }

  if (!isReactElement(element)) {
    return element;
  }

  const { props, props: { children }, type } = element;
  const displayName = getDisplayName(type);
  let jsxString = `<${displayName} ${renderProps(props)}`;

  if (children) {
    jsxString += '>';
    jsxString += reactElementToJsxString(children);
    jsxString += `</${displayName}>`;
  } else {
    jsxString += ' />';
  }

  return jsxString;
}
