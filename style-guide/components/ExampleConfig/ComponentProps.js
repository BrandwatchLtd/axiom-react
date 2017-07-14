import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Grid, GridCell, Heading, Link, Paragraph, Reveal } from 'bw-axiom';
import ComponentProp from './ComponentProp';
import TypeArrayOf from './TypeArrayOf';
import TypeBool from './TypeBool';
import TypeEnum from './TypeEnum';
import TypeFunc from './TypeFunc';
import TypeNode from './TypeNode';
import TypeNumber from './TypeNumber';
import TypeString from './TypeString';
import { basePropTypes } from './utils';

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
    baseState: PropTypes.object,
    component: PropTypes.string,
    propOptions: PropTypes.object.isRequired,
    propTypes: PropTypes.object.isRequired,
    propValues: PropTypes.object.isRequired,
    setPropOptionValue: PropTypes.func.isRequired,
    setPropValue: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isBasePropsVisible: false,
    };
  }

  render() {
    const { isBasePropsVisible } = this.state;
    const {
      baseState,
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
        <Grid>
          { component && (
            <GridCell>
              <Heading textSize="headtitle">{ `<${component}>` }</Heading>
            </GridCell>
          ) }

          { baseState && component !== 'Base' && (
            <GridCell shrink={ true }>
              <Link onClick={ () => this.setState({ isBasePropsVisible: !isBasePropsVisible }) }>
                { isBasePropsVisible ? 'Hide' : 'Show' } { '<Base>' } properties
              </Link>
            </GridCell>
          ) }
        </Grid>

        { !Object.keys(propTypes).length && (
          <Paragraph>
            This component has no properties to configure.
          </Paragraph>
        ) }

        { Object.keys(propTypes).map((prop)  =>
          <ComponentProp
              PropEditor={ TypeMap[propTypes[prop].type.name] }
              defaultValue={ propTypes[prop].defaultValue && propTypes[prop].defaultValue.value }
              description={ propTypes[prop].description }
              key={ prop }
              prop={ prop }
              propOptions={ propOptions }
              required={ propTypes[prop].required }
              setOptionValue={ (...a) => setPropOptionValue(prop, ...a) }
              setValue={ (...a) => setPropValue(prop, ...a) }
              space="x4"
              type={ propTypes[prop].type.name }
              value={ propValues[prop] }
              values={ propTypes[prop].values } />
        ) }

        { baseState && (
          <Reveal visible={ isBasePropsVisible }>
            <ComponentProps
                propOptions={ propOptions }
                propTypes={ basePropTypes.Base }
                propValues={ propValues }
                setPropOptionValue={ setPropOptionValue }
                setPropValue={ setPropValue } />
          </Reveal>
        ) }
      </Base>
    );
  }
}
