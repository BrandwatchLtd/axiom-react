import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ColorPickerOption,
  Context,
  ContextBox,
  Dropdown,
  DropdownTarget,
  DropdownContent,
  Grid,
  GridCell,
} from 'bw-axiom';

export default class ColorPicker extends Component {
  static propTypes = {
    options: PropTypes.array,
    selected: PropTypes.oneOf([
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
    ]),
    width: PropTypes.string,
    onSelectColor: PropTypes.func.isRequired,
  };

  static defaultProps = {
    options: [
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
    ],
    width: '9rem',
  };

  render() {
    const { onSelectColor, options, selected, width, ...rest } = this.props;

    return (
      <Dropdown position="bottom" { ... rest }>
        <DropdownTarget>
          <ColorPickerOption color={ selected } />
        </DropdownTarget>

        <DropdownContent>
          <Context width={ width }>
            <ContextBox>
              <Grid gutters="small" horizontalAlign="middle">
                { options.map(((color)=> (
                  <GridCell key={ color } shrink={ true }>
                    <ColorPickerOption
                        color={ color }
                        onClick={ () => { onSelectColor(color); } } />
                  </GridCell>
                ) ) ) }
              </Grid>
            </ContextBox>
          </Context>
        </DropdownContent>
      </Dropdown>
    );
  }
}
