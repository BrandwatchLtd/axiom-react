import React, { Component } from 'react';
import { Example } from 'style-guide';
import ColorSwatch from './ColorSwatch';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';

export default class ColorsExample extends Component {
  render() {
    return (
      <Example name="UI Colors">
        <Grid gutters="large" shrink>
          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Darker', variable: 'ui-carbon--darker' },
              { name: 'Dark', variable: 'ui-carbon--dark' },
              { name: 'Default', variable: 'ui-carbon' },
            ] } name="Carbon" />
          </GridCell>

          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Active', variable: 'ui-accent--active' },
              { name: 'Default', variable: 'ui-accent' },
              { name: 'Hover', variable: 'ui-accent--hover' },
            ] } name="Accent" />
          </GridCell>

          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Darker', variable: 'ui-white-noise--darker' },
              { name: 'Dark', variable: 'ui-white-noise--dark' },
              { name: 'Default', variable: 'ui-white-noise' },
            ] } name="White Noise" />
          </GridCell>
        </Grid>

        <Grid gutters="large" shrink>
          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Default', variable: 'ui-white' },
            ] } name="White" />
          </GridCell>
        </Grid>
      </Example>
    );
  }
}
