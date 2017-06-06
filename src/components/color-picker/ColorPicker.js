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
    disabledOptions: PropTypes.arrayOf(PropTypes.string),
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
    onOpen: PropTypes.func,
    onSelectColor: PropTypes.func.isRequired,
  };

  static defaultProps = {
    disabledOptions: [],
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
    const {
      disabledOptions,
      onOpen,
      onSelectColor,
      options,
      selected,
      width,
      ...rest
    } = this.props;

    return (
      <Dropdown position="bottom" { ... rest }>
        <DropdownTarget onClick={ onOpen }>
          <ColorPickerOption color={ selected } />
        </DropdownTarget>

        <DropdownContent>
          <Context width={ width }>
            <ContextBox>
              <Grid
                  gutters="small"
                  horizontalAlign="middle"
                  responsive={ false }>
                { options.map(((color)=> {
                  const isColorDisabled = disabledOptions.indexOf(color) !== -1;
                  return (
                    <GridCell key={ color } shrink={ true }>
                      <ColorPickerOption
                          color={ color }
                          disabled={ isColorDisabled }
                          onClick={ () => isColorDisabled || onSelectColor(color) } />
                    </GridCell>
                  );
                } ) ) }
              </Grid>
            </ContextBox>
          </Context>
        </DropdownContent>
      </Dropdown>
    );
  }
}
