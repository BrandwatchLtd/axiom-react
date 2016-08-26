import { mergePropTypeSets, mapToPropTypes } from './prop-types';

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
