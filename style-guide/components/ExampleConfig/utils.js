import { Children, cloneElement, isValidElement } from 'react';
import extend from 'deep-extend';

const preparePropMap = {
  func: (propName, propValue, propType, options = {}) =>
    options.included === false ? undefined : propValue,
  node: (propName, propValue, propType, options = {}) =>
    propName === 'children' && options.count
      ? Array.from({ length: options.count }, () => propValue)
      : propValue,
};

export const basePropTypes = { Base: __COMPONENT_PROPS__.Base };

function prepareProps(state, options, propTypes) {
  const props = {};

  for (const prop in state) {
    props[prop] = propTypes[prop] && preparePropMap[propTypes[prop].type.name]
      ? preparePropMap[propTypes[prop].type.name](
          prop, state[prop], propTypes[prop], options[prop])
      : state[prop];
  }

  return props;
}

export function render(child, propTypes, state) {
  if (!child) {
    return;
  }

  if (Array.isArray(child)) {
    return Children.map(child, (child) =>
        render(child, propTypes, state)
      );
  }

  if (isValidElement(child)) {
    const props = state[child.type.name]
      ? prepareProps(
          { ...state[child.type.name].props, children: child.props.children },
          state[child.type.name].options,
          propTypes[child.type.name])
      : child.props;

    return cloneElement(
      child, props, render(props.children, propTypes, state),
    );
  }

  return child;
}

export function mergeState(propTypes, props, propOptions, state, withDefaults) {
  const merged = {};

  for (const component in propTypes) {
    merged[component] = {
      props: {},
      options: {},
    };

    if (withDefaults) {
      for (const prop in propTypes[component]) {
        if (propTypes[component][prop].defaultValue) {
          merged[component].props[prop] = propTypes[component][prop].defaultValue.value;
        }
      }
    }
  }

  for (const component in props) {
    if (merged[component]) {
      for (const prop in props[component]) {
        merged[component].props[prop] = props[component][prop];
      }
    }
  }

  for (const component in propOptions) {
    if (merged[component]) {
      merged[component].options = propOptions[component];
    }
  }

  return extend(merged, state);
}
