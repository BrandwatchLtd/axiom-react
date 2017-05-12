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
} from 'bw-axiom';
import './DataPickerHeader.css';

export default class DataPickerHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf([
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
    colorOptions: PropTypes.array,
    headerText: PropTypes.string,
    onSelectColor: PropTypes.func,
  };

  render() {
    const {
      children,
      color,
      colorOptions,
      headerText,
      onSelectColor,
      ...rest
    } = this.props;

    return (
      <PanelHeader { ...rest }>
        <Grid gutters="tiny"
            responsive={ false }
            shrink={ true }
            verticalAlign="middle"
            wrap={ false }>
          <GridCell>
            { onSelectColor ? (
              <ColorPicker
                  colorOptions={ colorOptions }
                  onSelectColor={ onSelectColor }
                  selected={ color } />
            ) : (
              <ColorPickerOption color={ color } />
            ) }
          </GridCell>
          <GridCell>
            { children && (
              <Dropdown>
                <DropdownTarget>
                  <Link style="subtle">
                    <div className="ax-data-picker__header-title">
                      <div className="ax-data-picker__header-title-text">
                        <Heading style="title" textEllipsis={ true } title={ headerText }>
                          { headerText }
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
              <Heading style="title">{ headerText }</Heading>
            )}
          </GridCell>
        </Grid>
      </PanelHeader>
    );
  }
}
