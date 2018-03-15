import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findComponent } from '@brandwatch/axiom-utils';
import atIds from '@brandwatch/axiom-automation-testing/ids';
import Card from '../Card/Card';
import CardContent from '../Card/CardContent';
import ColorPicker from '../ColorPicker/ColorPicker';
import ColorPickerOption from '../ColorPicker/ColorPickerOption';
import Dropdown from '../Dropdown/Dropdown';
import DropdownContext from '../Dropdown/DropdownContext';
import DropdownSource from '../Dropdown/DropdownSource';
import DropdownTarget from '../Dropdown/DropdownTarget';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import Heading from '../Typography/Heading';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';
import { DataPickerDropdownRef } from './DataPickerDropdown';
import { DataPickerMetaRef } from './DataPickerMeta';
import './DataPicker.css';

export default class DataPicker extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /** Selected color that will be displayed in the header */
    color: PropTypes.oneOf([
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
    ]),
    /** List of pickable colors to override the default, which is all colors. */
    colorOptions: PropTypes.arrayOf(PropTypes.string),
    /** List of disabled colors that become unpickable */
    disabledColors: PropTypes.arrayOf(PropTypes.string),
    /** Handler that is called when the color picker is opened */
    onColorPickerOpen: PropTypes.func,
    /** Handler that is called when a color is selected */
    onSelectColor: PropTypes.func,
    /** Placeholder text that will be displayed when no value is provided */
    placeholder: PropTypes.string.isRequired,
    /** Value that will be displayed in the header. */
    value: PropTypes.string,
  };

  render() {
    const {
      children,
      color,
      colorOptions,
      disabledColors,
      onColorPickerOpen,
      onSelectColor,
      placeholder,
      value,
      ...rest
    } = this.props;

    const dropdownMenu = findComponent(children, DataPickerDropdownRef);
    const metaData = findComponent(children, DataPickerMetaRef);
    const title = value || placeholder;

    return (
      <Card { ...rest }
          border={ Boolean(dropdownMenu) }
          color={ dropdownMenu ? 'default' : 'darker' }
          size="medium">
        <div className="ax-data-picker">
          <div className="ax-data-picker__dropdown">
            <CardContent size="small">
              <Grid
                  gutters="tiny"
                  responsive={ false }
                  verticalAlign="middle"
                  wrap={ false }>
                <GridCell none>
                  { onSelectColor ? (
                    <ColorPicker
                        colorOptions={ colorOptions }
                        disabledOptions={ disabledColors }
                        onOpen={ onColorPickerOpen }
                        onSelectColor={ onSelectColor }
                        selected={ color } />
                  ) : (
                    <ColorPickerOption color={ color } />
                  ) }
                </GridCell>

                <GridCell>
                  { dropdownMenu && (
                    <Dropdown showArrow={ false }>
                      <DropdownTarget>
                        <div
                            className="ax-data-picker__link"
                            data-ax-at={ atIds.DataPicker.dropdown }>
                          <Link style="body">
                            <Grid responsive={ false } verticalAlign="middle" wrap={ false }>
                              <GridCell>
                                <Heading textEllipsis title={ title }>
                                  { title }
                                </Heading>
                              </GridCell>

                              <GridCell none>
                                <Icon name="chevron-down"/>
                              </GridCell>
                            </Grid>
                          </Link>
                        </div>
                      </DropdownTarget>

                      <DropdownSource>
                        <DropdownContext>
                          { dropdownMenu }
                        </DropdownContext>
                      </DropdownSource>
                    </Dropdown>
                  ) }

                  { !dropdownMenu && (
                    <Heading textEllipsis title={ title }>
                      { title }
                    </Heading>
                  ) }
                </GridCell>
              </Grid>
            </CardContent>
          </div>

          { metaData && (
            <div className="ax-data-picker__meta">
              <CardContent size="small">
                { metaData }
              </CardContent>
            </div>
          ) }
        </div>
      </Card>
    );
  }
}

