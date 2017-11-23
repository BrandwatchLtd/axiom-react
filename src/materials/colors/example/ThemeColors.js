import React, { Component } from 'react';
import { Example } from 'style-guide';
import ColorSwatch from './ColorSwatch';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';

export default class ColorsExample extends Component {
  render() {
    return (
      <Example name="Dynamic Theme">
        <Grid gutters="large" shrink>
          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Darker', variable: 'theme-main--darker' },
              { name: 'Dark', variable: 'theme-main--dark' },
              { name: 'Default', variable: 'theme-main' },
            ] } name="Main" />
          </GridCell>
        </Grid>

        <Grid gutters="large" shrink>
          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Default', variable: 'theme-text' },
              { name: 'Subtle', variable: 'theme-text--subtle' },
              { name: 'Disabled', variable: 'theme-text--disabled' },
            ] } name="Text" />
          </GridCell>

          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Active', variable: 'theme-background--active' },
              { name: 'Default', variable: 'theme-background' },
              { name: 'Hover', variable: 'theme-background--hover' },
              { name: 'Subtle', variable: 'theme-background--subtle' },
              { name: 'Disabled', variable: 'theme-background--disabled' },
            ] } name="Background" />
          </GridCell>

          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Default', variable: 'theme-border' },
            ] } name="Border" />
          </GridCell>
        </Grid>
      </Example>
    );
  }
}
