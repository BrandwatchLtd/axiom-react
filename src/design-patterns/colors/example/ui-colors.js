import React, { Component } from 'react';
import { Example } from 'style-guide';
import { Grid, GridCell } from 'bw-axiom';
import ColorSwatch from './ColorSwatch';

export default class ColorsExample extends Component {
  render() {
    const darkGreys = [
      'color-ui-dark-0',
      'color-ui-dark-1',
      'color-ui-dark-2',
    ];

    const lightGreys = [
      'color-ui-light-0',
      'color-ui-light-1',
      'color-ui-light-2',
      'color-ui-white',
    ];

    const primaries = [
      'color-ui-primary-0',
      'color-ui-primary-1',
      'color-ui-primary-2',
    ];

    const validities = [
      'color-ui-success',
      'color-ui-warning',
      'color-ui-error',
    ];

    return (
      <Example name="UI Colors">
        <Grid>
          <GridCell>
            <ColorSwatch colors={ darkGreys } />
            <ColorSwatch colors={ lightGreys } />
          </GridCell>

          <GridCell>
            <ColorSwatch colors={ primaries } />
            <ColorSwatch colors={ validities } />
          </GridCell>
        </Grid>
      </Example>
    );
  }
}
