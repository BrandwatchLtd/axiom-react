import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ColorPickerOption from './ColorPickerOption';
import Context from '../context/Context';
import ContextBox from '../context/ContextBox';
import Dropdown from '../dropdown/Dropdown';
import DropdownContent from '../dropdown/DropdownContent';
import DropdownTarget from '../dropdown/DropdownTarget';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';

export default class ColorPicker extends Component {
  static propTypes = {
    /** Colors that should be disabled from selection */
    disabledOptions: PropTypes.arrayOf(PropTypes.oneOf([
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
    ])),
    /** Callback for when the color picker has been opened */
    onOpen: PropTypes.func,
    /** Callback for when a color has been selected, provided with the selected color */
    onSelectColor: PropTypes.func.isRequired,
    /** Colors that should be visible for selection */
    options: PropTypes.arrayOf(PropTypes.oneOf([
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
    ])),
    /** Color that should appear as selected */
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
    /** Width of the color selection container */
    width: PropTypes.string,
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
        <DropdownTarget>
          <ColorPickerOption color={ selected } onClick={ onOpen } />
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
                    <GridCell key={ color } shrink>
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
