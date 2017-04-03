import React, { Component } from 'react';
import { Example } from 'style-guide';
import { Grid, GridCell } from 'bw-axiom';
import ColorSwatch from './ColorSwatch';

export default class ColorsExample extends Component {
  render() {
    const darkGreys = [
      'ui-dark-0',
      'ui-dark-1',
      'ui-dark-2',
    ];

    const lightGreys = [
      'ui-light-0',
      'ui-light-1',
      'ui-light-2',
    ];

    const white = [
      'ui-white',
    ];

    const primaries = [
      'ui-primary-0',
      'ui-primary-1',
      'ui-primary-2',
    ];

    const validities = [
      'ui-success',
      'ui-warning',
      'ui-error',
    ];

    const attention = [
      'ui-highlight',
    ];

    return (
      <Example name="UI Colors">
        <Grid>
          <GridCell>
            <ColorSwatch colors={ darkGreys } />
            <ColorSwatch colors={ lightGreys } />
            <ColorSwatch colors={ white } />
          </GridCell>

          <GridCell>
            <ColorSwatch colors={ primaries } />
            <ColorSwatch colors={ validities } />
            <ColorSwatch colors={ attention } />
          </GridCell>
        </Grid>
      </Example>
    );
  }
}
