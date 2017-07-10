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

const typeColorMap = {
  arrayOf: 'grey',
  bool: 'blue',
  enum: 'amber',
  func: 'orange',
  node: 'purple',
  number: 'lilac',
  string: 'green',
};

export default class ComponentProp extends Component {
  static propTypes = {
    PropEditor: PropTypes.func,
    description: PropTypes.string,
    prop: PropTypes.string.isRequired,
    propOptions: PropTypes.object.isRequired,
    required: PropTypes.bool.isRequired,
    setOptionValue: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.any,
    values: PropTypes.array,
  };

  render() {
    const {
      PropEditor,
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

    return (
      <Base { ...rest } className="dm-example__prop">
        <Grid verticalAlign="middle">
          <GridCell>
            <Grid
                gutters="small"
                shrink={ true }
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
                    <Badge
                        color="pink"
                        textColor="light"><Strong>Required</Strong></Badge>
                  ) }

                  { type && (
                    <Badge
                        color={ typeColorMap[type] }
                        opacity={ 0.3 }>{ type }</Badge>
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
            <GridCell shrink={ true }>
              <PropEditor
                  prop={ prop }
                  propOptions={ propOptions[prop] || {} }
                  required={ required }
                  setOptionValue={ setOptionValue }
                  setValue={ setValue }
                  value={ value }
                  values={ values } />
            </GridCell>
          ) }
        </Grid>
      </Base>
    );
  }
}
