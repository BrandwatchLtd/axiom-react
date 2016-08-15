import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./ApiDocsPropType.scss');
}

function oneOf(list) {
  return `enum(${
    list.map((oneOf) => {
      return typeof oneOf === 'string'
        ? `'${oneOf}'`
        : oneOf;
    }).join(',')
  })`;
}

const PROP_TYPE_MAP = {
  any: 'Anything',
  string: 'String',
  bool: 'Boolean',
  func: 'Function',
  number: 'Number',
  array: 'Array',
  object: 'Object',
  node: 'Node (Number, String, Elements, Array)',
  element: 'Element',
  shape: () => {},
  instanceOf: () => {},
  arrayOf: () => {},
  objectOf: () => {},
  oneOf,
  oneOfType: () => {},
};

function getPropType(prop) {
  for (let key in prop) {
    if (PROP_TYPE_MAP[key]) {
      return key;
    }
  }
}

export default class ApiDocsPropType extends Component {
  static propTypes = {
    propType: PropTypes.object.isRequired,
  };

  render()  {
    const { propType } = this.props;
    const type = getPropType(propType);

    return (
      <pre className="dm-doc-api__pre">
        <code className="dm-doc-api__code">
          {
            typeof PROP_TYPE_MAP[type] === 'function'
              ?  PROP_TYPE_MAP[type](propType[type])
              : PROP_TYPE_MAP[type]
          }
        </code>
      </pre>
    );
  }
}

