import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DataPickerDropdownRef } from './DataPickerDropdown';
import { DataPickerMetaRef } from './DataPickerMeta';
import Card from '../card/Card';
import CardContent from '../card/CardContent';
import ColorPicker from '../color-picker/ColorPicker';
import ColorPickerOption from '../color-picker/ColorPickerOption';
import Context from '../context/Context';
import Dropdown from '../dropdown/Dropdown';
import DropdownContent from '../dropdown/DropdownContent';
import DropdownTarget from '../dropdown/DropdownTarget';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';
import Heading from '../typography/Heading';
import Icon from '../icon/Icon';
import Link from '../typography/Link';
import findComponent from '../../utils/findComponent';
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
                <GridCell shrink>
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
                        <div className="ax-data-picker__link">
                          <Link style="body">
                            <Grid responsive={ false } verticalAlign="middle">
                              <GridCell>
                                <Heading textEllipsis title={ title }>
                                  { title }
                                </Heading>
                              </GridCell>

                              <GridCell shrink>
                                <Icon name="chevron-down"/>
                              </GridCell>
                            </Grid>
                          </Link>
                        </div>
                      </DropdownTarget>

                      <DropdownContent>
                        <Context>
                          { dropdownMenu }
                        </Context>
                      </DropdownContent>
                    </Dropdown>
                  )}

                  { !dropdownMenu && (
                    <Heading textEllipsis title={ title }>
                      { title }
                    </Heading>
                  )}
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

