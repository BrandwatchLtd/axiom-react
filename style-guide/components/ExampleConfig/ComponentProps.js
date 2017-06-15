import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Heading } from 'bw-axiom';
import ComponentProp from './ComponentProp';
import TypeArrayOf from './TypeArrayOf';
import TypeBool from './TypeBool';
import TypeEnum from './TypeEnum';
import TypeFunc from './TypeFunc';
import TypeNode from './TypeNode';
import TypeNumber from './TypeNumber';
import TypeString from './TypeString';

const TypeMap = {
  arrayOf: TypeArrayOf,
  bool: TypeBool,
  enum: TypeEnum,
  func: TypeFunc,
  node: TypeNode,
  number: TypeNumber,
  string: TypeString,
};

export default class ComponentProps extends Component {
  static propTypes = {
    component: PropTypes.string.isRequired,
    propOptions: PropTypes.object.isRequired,
    propTypes: PropTypes.object.isRequired,
    propValues: PropTypes.object.isRequired,
    setPropOptionValue: PropTypes.func.isRequired,
    setPropValue: PropTypes.func.isRequired,
  };

  render() {
    const {
      component,
      propOptions,
      propTypes,
      propValues,
      setPropOptionValue,
      setPropValue,
      ...rest
    } = this.props;

    return (
      <Base { ...rest }>
        <Heading style="title">{ `<${component}>` }</Heading>
        { Object.keys(propTypes).map((prop)  =>
          <ComponentProp
              PropEditor={ TypeMap[propTypes[prop].type.name] }
              description={ propTypes[prop].description }
              key={ prop }
              prop={ prop }
              propOptions={ propOptions }
              required={ propTypes[prop].required }
              setOptionValue={ (...a) => setPropOptionValue(prop, ...a) }
              setValue={ (...a) => setPropValue(prop, ...a) }
              space="small"
              type={ propTypes[prop].type.name }
              value={ propValues[prop] }
              values={ propTypes[prop].values } />
        ) }
      </Base>
    );
  }
}
