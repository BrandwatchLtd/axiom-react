import { Children, cloneElement, isValidElement } from 'react';
import extend from 'deep-extend';

const preparePropMap = {
  func: (propName, propValue, propType, options = {}, setProp, setPropOption) => {
    if (options.included === false) {
      return undefined;
    }

    if (typeof options.callback === 'function') {
      return (...args) => options.callback(setProp, setPropOption, ...args);
    }

    return propValue;
  },
  node: (propName, propValue, propType, options = {}) => {
    if (propName === 'children') {
      if (options.selection) {
        const selectedOptions = options.options.filter(({ name }) => name === options.selection)[0];
        return selectedOptions ? selectedOptions.children : propValue;
      }

      if (options.count) {
        return Array.apply(null, { length: options.count }).map(() => propValue);
      }
    }

    return propValue;
  },
};

export const basePropTypes = { Base: __COMPONENT_PROPS__.Base };

function prepareProps(state, options, propTypes, setProp, setPropOption) {
  const props = {};

  for (const prop in state) {
    props[prop] = propTypes[prop] && preparePropMap[propTypes[prop].type.name]
      ? preparePropMap[propTypes[prop].type.name](
          prop, state[prop], propTypes[prop], options[prop], setProp, setPropOption)
      : state[prop];
  }

  return props;
}

export function render(child, propTypes, state, setProp, setPropOption) {
  if (!child) {
    return;
  }

  if (Array.isArray(child)) {
    return Children.map(child, (child) =>
        render(child, propTypes, state, setProp, setPropOption)
      );
  }

  if (isValidElement(child)) {
    const props = state[child.type.name]
      ? prepareProps(
          { ...state[child.type.name].props, children: child.props.children },
          state[child.type.name].options,
          propTypes[child.type.name],
          setProp,
          setPropOption)
      : child.props;

    return cloneElement(
      child, props, render(props.children, propTypes, state, setProp, setPropOption),
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
