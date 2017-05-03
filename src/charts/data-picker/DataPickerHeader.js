import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  DataPoint,
  DataPoints,
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
    headerText: PropTypes.string,
  };

  render() {
    const { children, color, headerText, ...rest } = this.props;
    return (
      <PanelHeader { ...rest }>
        <Grid gutters="tiny" verticalAlign="middle">
          <GridCell shrink={ true }>
            <DataPoints height="1rem">
              <DataPoint color={ color } radius={ .75 } />
            </DataPoints>
          </GridCell>
          <GridCell>
            { children && (
              <Dropdown>
                <DropdownTarget>
                  <Link style="subtle">
                    <Grid gutters="tiny" verticalAlign="middle">
                      <GridCell shrink={ true }>
                        <Heading style="title">{ headerText }</Heading>
                      </GridCell>
                      <GridCell>
                        <Icon name="chevron-down"/>
                      </GridCell>
                    </Grid>
                  </Link>
                </DropdownTarget>

                <DropdownContent>
                  { children }
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

