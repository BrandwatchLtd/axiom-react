import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Context,
  ColorPicker,
  ColorPickerOption,
  Dropdown,
  DropdownContent,
  DropdownTarget,
  Grid,
  GridCell,
  Heading,
  Icon,
  Link,
  PanelHeader,
  Small,
  Strong,
} from 'bw-axiom';
import './DataPickerHeader.css';
import { translate as t } from '../../utils/locales';

export default class DataPickerHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static contextTypes = {
    color: PropTypes.string,
    colorOptions: PropTypes.arrayOf(PropTypes.string),
    disabledColors: PropTypes.arrayOf(PropTypes.string),
    axiomLanguage: PropTypes.string.isRequired,
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
      <PanelHeader { ...rest }>
        <div className="ax-data-picker__header">
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
                    <Link style="subtle">
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
              <GridCell shrink>
                <span className="ax-data-picker__header-link">
                  <Link onClick={ onClear }>
                    <Strong><Small textCase="upper">{ t(axiomLanguage, 'clear') }</Small></Strong>
                  </Link>
                </span>
              </GridCell>
            ) }
          </Grid>
        </div>
      </PanelHeader>
    );
  }
}
