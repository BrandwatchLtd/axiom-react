import React, { Component } from 'react';
import { Example } from 'style-guide';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';
import ColorSwatch from './ColorSwatch';

export default class ColorsExample extends Component {
  render() {
    const darkGreys = [
      'ui-dark--dark',
      'ui-dark',
      'ui-dark--light',
    ];

    const lightGreys = [
      'ui-light--dark',
      'ui-light',
      'ui-light--light',
    ];

    const white = [
      'ui-white',
    ];

    const primaries = [
      'ui-primary--dark',
      'ui-primary',
      'ui-primary--light',
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
