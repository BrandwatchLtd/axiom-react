import { PropTypes } from 'react';
import { breakpointIds } from '../../design-patterns/layout/_vars';
import { colorIds } from '../../design-patterns/colors/_vars';

const PROP_TYPE_MAP = {
  any: PropTypes.any,
  string: PropTypes.string,
  bool: PropTypes.bool,
  func: PropTypes.func,
  number: PropTypes.number,
  array: PropTypes.array,
  object: PropTypes.object,
  node: PropTypes.node,
  element: PropTypes.element,
  shape: PropTypes.shape,
  instanceOf: PropTypes.instanceOf,
  arrayOf: PropTypes.arrayOf,
  objectOf: PropTypes.objectOf,
  oneOf: PropTypes.oneOf,
  oneOfType: PropTypes.oneOfType,
};

export const PROP_TYPES_SETS = {
  global: {
    className: { string: true },
    hiddenUntil: { oneOf: breakpointIds },
    visibleUntil: { oneOf: breakpointIds },
  },
  text: {
    textLeft: { oneOf: [true, ...breakpointIds] },
    textCenter: { oneOf: [true, ...breakpointIds] },
    textRight: { oneOf: [true, ...breakpointIds] },
    textBreak: { oneOf: ['none', 'all', 'word'] },
    textCase: { oneOf: ['upper', 'capital', 'lower'] },
    textEllipsis: { bool: true },
    textColor: { oneOf: [...colorIds], default: 'primary' },
  },
};

function getPropType(prop) {
  for (let key in prop) {
    if (PROP_TYPE_MAP[key]) {
      return {
        type: key,
        propType: PROP_TYPE_MAP[key],
      };
    }
  }

  return {};
}

function createPropType(prop) {
  const { isRequired } = prop;
  const { type, propType } = getPropType(prop);
  let finalPropType;

  if (!propType) {
    throw new Error(`No matching PropType found: ${JSON.stringify(prop)}`);
  }

  switch (propType) {
  case PropTypes.any:
  case PropTypes.string:
  case PropTypes.bool:
  case PropTypes.func:
  case PropTypes.number:
  case PropTypes.array:
  case PropTypes.object:
  case PropTypes.node:
  case PropTypes.element:
    finalPropType = propType;
    break;
  case PropTypes.instanceOf:
  case PropTypes.oneOf:
    finalPropType = propType(prop[type]);
    break;
  case PropTypes.oneOfType:
    finalPropType = propType(prop[type].map((p) => createPropType(p)));
    break;
  case PropTypes.arrayOf:
  case PropTypes.objectOf:
    finalPropType = propType(createPropType(prop[type]));
    break;
  case PropTypes.shape:
    finalPropType = propType(mapToPropTypes(prop[type]));
    break;
  }

  return isRequired
    ? finalPropType.isRequired
    : finalPropType;
}

export function mergePropTypeSets(propSets) {
  return propSets.reduce((acc, set) => {
    if (PROP_TYPES_SETS[set]) {
      return {
        ...acc,
        ...PROP_TYPES_SETS[set],
      };
    }

    return acc;
  }, {});
}

export function mapToPropTypes(props) {
  return Object.keys(props).reduce((propTypes, key) => {
    propTypes[key] = createPropType(props[key]);
    return propTypes;
  }, {});
}
