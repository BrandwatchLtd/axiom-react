import { isReactElement } from 'style-guide/utils/react-elements';

const PROP_EXCLUDE_LIST = ['children'];

function renderProps(props, withoutProps) {
  const propsToExclude = withoutProps.concat(PROP_EXCLUDE_LIST);

  return Object.keys(props).reduce((acc, prop) => {
    if (!propsToExclude.includes(prop)) {
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

export default function reactElementToJsxString(element, withoutProps = []) {
  if (Array.isArray(element)) {
    return element.reduce((string, element) => {
      return string += reactElementToJsxString(element, withoutProps);
    }, '');
  }

  if (!isReactElement(element)) {
    return element;
  }

  const { props, props: { children }, type } = element;
  const displayName = getDisplayName(type);
  let jsxString = `<${displayName} ${renderProps(props, withoutProps)}`;

  if (children) {
    jsxString += '>';
    jsxString += reactElementToJsxString(children, withoutProps);
    jsxString += `</${displayName}>`;
  } else {
    jsxString += ' />';
  }

  return jsxString;
}
