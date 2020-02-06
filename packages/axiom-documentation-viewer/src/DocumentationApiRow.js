import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Badge,
  Heading,
  Paragraph,
  TableCell,
  TableRow,
  Tooltip,
  TooltipContent,
  TooltipContext,
  TooltipSource,
  TooltipTarget,
} from '@brandwatch/axiom-components';
import { DataPoint, DataPoints } from '@brandwatch/axiom-charts';
import { colors } from '@brandwatch/axiom-materials';
import TypeArrayOf from './TypeArrayOf';
import TypeBool from './TypeBool';
import TypeEnum from './TypeEnum';
import TypeFunc from './TypeFunc';
import TypeInstanceOf from './TypeInstanceOf';
import TypeNumber from './TypeNumber';
import TypeString from './TypeString';

const productColors = Object.keys(colors.productColorNames);

const typeColorMap = {
  arrayOf: productColors[0],
  bool: productColors[1],
  enum: productColors[2],
  func: productColors[3],
  instanceOf: productColors[4],
  node: productColors[5],
  number: productColors[6],
  string: productColors[7],
  union: productColors[8],
};

const propEditorMap = {
  arrayOf: TypeArrayOf,
  bool: TypeBool,
  enum: TypeEnum,
  func: TypeFunc,
  instanceOf: TypeInstanceOf,
  number: TypeNumber,
  string: TypeString,
};

export default class DocumentationApiRow extends Component {
  static propTypes = {
    component: PropTypes.string.isRequired,
    defaultValue: PropTypes.any,
    description: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    values: PropTypes.array,
  };

  static contextTypes = {
    getPropValue: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
  };

  render() {
    const { component, defaultValue, description, disabled, name, required, type, values } = this.props;
    const PropEditor = propEditorMap[type.name];
    const showDefault = defaultValue !== undefined &&
      type && type.name !== 'func' && type.name !== 'arrayOf';

    return (
      <TableRow>
        <TableCell>
          <Heading
              space="x0"
              textStrong>
            { name }
          </Heading>

          { description && (
            <Paragraph
                space="x0"
                textColor="subtle"
                textSize="small">
              { description }
            </Paragraph>
          ) }
        </TableCell>

        <TableCell>
          <Badge color={ typeColorMap[type.name] } opacity={ 0.2 }>
            { type.name }
          </Badge>
        </TableCell>

        <TableCell>{ showDefault && defaultValue.value.toString() }</TableCell>
        <TableCell>
          { PropEditor && (
            <PropEditor
                disabled={ disabled }
                prop={ name }
                propOptions={ { } }
                required={ required }
                setOptionValue={ () => {} }
                setValue={ this.context.setValue.bind(null, component, name) }
                type={ type }
                value={ this.context.getPropValue(component, name) }
                values={ values } />
          ) }
        </TableCell>

        <TableCell>
          { required && (
            <Tooltip>
              <TooltipTarget>
                <DataPoints size=".75rem">
                  <DataPoint color="critical-mass" />
                </DataPoints>
              </TooltipTarget>

              <TooltipSource theme="night" width="auto">
                <TooltipContext>
                  <TooltipContent textStrong>Required</TooltipContent>
                </TooltipContext>
              </TooltipSource>
            </Tooltip>
          ) }
        </TableCell>
      </TableRow>
    );
  }
}
