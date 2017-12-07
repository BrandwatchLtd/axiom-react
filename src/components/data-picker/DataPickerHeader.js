import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
import Small from '../typography/Small';
import Strong from '../typography/Strong';
import t from '../../utils/locales';
import './DataPickerHeader.css';

export default class DataPickerHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static contextTypes = {
    color: PropTypes.string,
    colorOptions: PropTypes.arrayOf(PropTypes.string),
    disabledColors: PropTypes.arrayOf(PropTypes.string),
    axiomLanguage: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onClear: PropTypes.func,
    onColorPickerOpen: PropTypes.func,
    onSelectColor: PropTypes.func,
    value: PropTypes.string,
  };

  render() {
    const { children, ...rest } = this.props;
    const {
      color,
      colorOptions,
      disabledColors,
      axiomLanguage,
      placeholder,
      onClear,
      onColorPickerOpen,
      onSelectColor,
      value,
    } = this.context;

    const title = value || placeholder;

    return (
      <CardContent { ...rest } cloakContainer size="small">
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
            { children && (
              <Dropdown showArrow={ false }>
                <DropdownTarget>
                  <Link style="body">
                    <div className="ax-data-picker__header-title">
                      <div className="ax-data-picker__header-title-text">
                        <Heading textEllipsis textSize="headtitle" title={ title }>
                          { title }
                        </Heading>
                      </div>
                      <div className="ax-data-picker__header-title-icon">
                        <Icon name="chevron-down"/>
                      </div>
                    </div>
                  </Link>
                </DropdownTarget>

                <DropdownContent>
                  <Context>
                    { children }
                  </Context>
                </DropdownContent>
              </Dropdown>
            )}

            { !children && (
              <Heading textSize="headtitle">{ title }</Heading>
            )}
          </GridCell>

          { onClear && value && (
            <GridCell cloak shrink>
              <Link onClick={ onClear }>
                <Strong><Small textCase="upper">{ t(axiomLanguage, 'clear') }</Small></Strong>
              </Link>
            </GridCell>
          ) }
        </Grid>
      </CardContent>
    );
  }
}
