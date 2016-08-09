import React, { Children } from 'react';
import { mergeClassNameSets, removeClassNameSetProps } from './class-name';
import { mergePropTypeSets, mapToPropTypes } from './prop-types';

if (__INCLUDE_CSS__) {
  require('normalize.css/normalize.css');
  require('../../design-patterns/animations/animations.scss');
  require('../../design-patterns/layout/layout.scss');
  require('../../design-patterns/utilities/utilities.scss');
  require('../typography/base.scss');
}

export function findComponent(components, Component) {
  return Children.toArray(components).find(({ type }) => type === Component);
}

export function findComponents(components, Component) {
  return Children.toArray(components).filter(({ type }) => type === Component);
}

function addDisplayName(Component) {
  Component.__ax_displayName = Component.name;

  return Component;
}

export function enhance(Component) {
  return (...transforms) => {
    return [
      addDisplayName,
      ...transforms,
    ].reduce((result, transform) => {
      return transform(result);
    }, Component);
  };
}

export function addPropTypes(...propSets) {
  return (Component) => {
    if (!Component.__ax_propTypes) Component.__ax_propTypes = { ...Component.propTypes };
    if (!Component.__ax_propTypesSet) Component.__ax_propTypesSet = mergePropTypeSets(propSets);

    Component.propTypes = mapToPropTypes({
      ...Component.__ax_propTypes,
      ...Component.__ax_propTypesSet,
    });

    return Component;
  }
}

function extendClass(Component, Wrapped) {
  for (let staticProp in Component) {
    Wrapped[staticProp] = Component[staticProp];
  }

  return Wrapped;
}

export function addClassName(...classNameSets) {
  return (Component) => {
    return extendClass(Component,
      class Wrapped extends Component {
        render() {
          return (
            <Component { ...removeClassNameSetProps(this.props) }
                className={ mergeClassNameSets(this.props, classNameSets) }
                ref="original" />
          );
        }
      }
    );
  };
}
