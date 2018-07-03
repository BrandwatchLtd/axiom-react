import PropTypes from 'prop-types';
import React, { Component } from 'react';
import atIds from '@brandwatch/axiom-automation-testing/ids';
import Dropdown from '../Dropdown/Dropdown';
import DropdownContent from '../Dropdown/DropdownContent';
import DropdownContext from '../Dropdown/DropdownContext';
import DropdownSource from '../Dropdown/DropdownSource';
import DropdownTarget from '../Dropdown/DropdownTarget';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import ColorPickerOption from './ColorPickerOption';

export default class ColorPicker extends Component {
  static propTypes = {
    /** Colors that should be disabled from selection */
    disabledOptions: PropTypes.arrayOf(PropTypes.oneOf([
      'forbidden-planet',
      'tiny-clanger',
      'critical-mass',
      'fantastic-voyage',
      'paradise-lost',
      'serene-sea',
      'event-horizon',
      'electric-dreams',
      'outer-limits',
      'giant-leap',
      'moon-lagoon',
      'space-invader',
      'extraterrestrial',
      'terra-form',
      'primeval-soup',
      'future-shock',
      'sun-maker',
      'new-horizon',
      'blast-off',
      'crash-course',
      'solar-rust',
      'ground-control',
      'space-oddity',
      'rocky-planet',
      'deep-thought',
      'luna-dust',
    ])),
    /** Callback for when the color picker has been opened */
    onOpen: PropTypes.func,
    /** Callback for when a color has been selected, provided with the selected color */
    onSelectColor: PropTypes.func.isRequired,
    /** Colors that should be visible for selection */
    options: PropTypes.arrayOf(PropTypes.oneOf([
      'forbidden-planet',
      'tiny-clanger',
      'critical-mass',
      'fantastic-voyage',
      'paradise-lost',
      'serene-sea',
      'event-horizon',
      'electric-dreams',
      'outer-limits',
      'giant-leap',
      'moon-lagoon',
      'space-invader',
      'extraterrestrial',
      'terra-form',
      'primeval-soup',
      'future-shock',
      'sun-maker',
      'new-horizon',
      'blast-off',
      'crash-course',
      'solar-rust',
      'ground-control',
      'space-oddity',
      'rocky-planet',
      'deep-thought',
      'luna-dust',
    ])),
    /** Color that should appear as selected */
    selected: PropTypes.oneOf([
      'forbidden-planet',
      'tiny-clanger',
      'critical-mass',
      'fantastic-voyage',
      'paradise-lost',
      'serene-sea',
      'event-horizon',
      'electric-dreams',
      'outer-limits',
      'giant-leap',
      'moon-lagoon',
      'space-invader',
      'extraterrestrial',
      'terra-form',
      'primeval-soup',
      'future-shock',
      'sun-maker',
      'new-horizon',
      'blast-off',
      'crash-course',
      'solar-rust',
      'ground-control',
      'space-oddity',
      'rocky-planet',
      'deep-thought',
      'luna-dust',
    ]),
    /** Width of the color selection container */
    width: PropTypes.string,
  };

  static defaultProps = {
    disabledOptions: [],
    options: [
      'tiny-clanger',
      'critical-mass',
      'paradise-lost',
      'serene-sea',
      'giant-leap',
      'moon-lagoon',
      'terra-form',
      'primeval-soup',
      'new-horizon',
      'blast-off',
      'ground-control',
      'luna-dust',
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
      <Dropdown position="bottom" { ... rest } showArrow>
        <DropdownTarget>
          <ColorPickerOption
              color={ selected }
              data-ax-at={ atIds.ColorPicker.dropdown }
              onClick={ onOpen } />
        </DropdownTarget>

        <DropdownSource>
          <DropdownContext width={ width }>
            <DropdownContent>
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
                          data-ax-at={ atIds.ColorPicker.option }
                          disabled={ isColorDisabled }
                          onClick={ () => isColorDisabled || onSelectColor(color) } />
                    </GridCell>
                  );
                } ) ) }
              </Grid>
            </DropdownContent>
          </DropdownContext>
        </DropdownSource>
      </Dropdown>
    );
  }
}
