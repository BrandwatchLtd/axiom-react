import { Children } from 'react';
import { mapToPropTypes } from './prop-types';

export function findComponent(components, Component) {
  return Children.toArray(components).find(({ type }) => type === Component);
}

export function findComponents(components, Component) {
  return Children.toArray(components).filter(({ type }) => type === Component);
}

export function enhance(Component) {
  return (...transforms) => {
    return [
      ...transforms,
    ].reduce((result, transform) => {
      return transform(result);
    }, Component);
  };
}

export function addPropTypes() {
  return (Component) => {
    if (!Component.__ax_propTypes) {
      Component.__ax_propTypes = { ...Component.propTypes };
    }

    Component.propTypes = mapToPropTypes({
      ...Component.__ax_propTypes,
    });

    return Component;
  };
}

export function extendClass(Component, Wrapped) {
  for (const staticProp in Component) {
    Wrapped[staticProp] = Component[staticProp];
  }

  return Wrapped;
}
