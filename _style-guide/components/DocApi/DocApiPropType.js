import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./DocApiPropType.scss');
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

export default class DocApiPropType extends Component {
  static propTypes = {
    propType: PropTypes.object.isRequired,
  };

  render()  {
    const { propType } = this.props;

    return (
      <pre className="dm-doc-api__pre">
        <code className="dm-doc-api__code">
          {
            typeof PROP_TYPE_MAP[propType.type] === 'function'
              ? PROP_TYPE_MAP[propType.type](propType[propType.type])
              : PROP_TYPE_MAP[propType.type]
          }
        </code>
      </pre>
    );
  }
}

