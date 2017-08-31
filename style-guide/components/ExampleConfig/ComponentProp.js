import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  BadgeGroup,
  Badge,
  Base,
  Grid,
  GridCell,
  Heading,
  Italic,
  Paragraph,
  Strong,
} from 'bw-axiom';

const colors = [
  'rose',
  'pink',
  'purple',
  'lilac',
  'blue',
  'teal',
  'green',
  'chartreuse',
  'amber',
  'orange',
  'brown',
  'grey',
];

const typeColorMap = {
  arrayOf: colors[0],
  bool: colors[1],
  enum: colors[2],
  func: colors[3],
  instanceOf: colors[4],
  node: colors[5],
  number: colors[6],
  string: colors[7],
  union: colors[8],
};

export default class ComponentProp extends Component {
  static propTypes = {
    PropEditor: PropTypes.func,
    defaultValue: PropTypes.any,
    description: PropTypes.string,
    prop: PropTypes.string.isRequired,
    propOptions: PropTypes.object.isRequired,
    required: PropTypes.bool.isRequired,
    setOptionValue: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    type: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    value: PropTypes.any,
    values: PropTypes.array,
  };

  render() {
    const {
      PropEditor,
      defaultValue,
      description,
      prop,
      propOptions,
      required,
      setOptionValue,
      setValue,
      type,
      value,
      values,
      ...rest
    } = this.props;

    const showDefault = defaultValue !== undefined &&
      type && type.name !== 'func' && type.name !== 'arrayOf';

    return (
      <Base { ...rest } className="dm-example__prop">
        <Grid verticalAlign="middle">
          <GridCell>
            <Grid
                gutters="small"
                shrink
                space="x2"
                verticalAlign="middle">
              <GridCell>
                <Heading>
                  { prop }
                </Heading>
              </GridCell>

              <GridCell>
                <BadgeGroup>
                  { required && (
                    <Badge color="pink">
                      <Strong>Required</Strong>
                    </Badge>
                  ) }

                  {  showDefault && (
                    <Badge color="orange">
                      <Strong>Default:</Strong> { defaultValue.toString() }
                    </Badge>
                  ) }

                  { type && (
                    <Badge color={ typeColorMap[type.name] } opacity={ 0.2 }>
                      { type.name }
                    </Badge>
                  ) }
                </BadgeGroup>
              </GridCell>
            </Grid>

            { description && (
              <Paragraph textColor="subtle">
                <Italic>{ description }</Italic>
              </Paragraph>
            ) }
          </GridCell>

          { PropEditor && (
            <GridCell shrink>
              <PropEditor
                  prop={ prop }
                  propOptions={ propOptions[prop] || {} }
                  required={ required }
                  setOptionValue={ setOptionValue }
                  setValue={ setValue }
                  type={ type }
                  value={ value }
                  values={ values } />
            </GridCell>
          ) }
        </Grid>
      </Base>
    );
  }
}
