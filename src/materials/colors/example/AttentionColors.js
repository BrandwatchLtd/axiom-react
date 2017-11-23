import React, { Component } from 'react';
import { Example } from 'style-guide';
import ColorSwatch from './ColorSwatch';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';

export default class ColorsExample extends Component {
  render() {
    return (
      <Example name="Attention Colors">
        <Grid gutters="large" shrink>
          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Active', variable: 'ui-error--active' },
              { name: 'Default', variable: 'ui-error' },
              { name: 'Hover', variable: 'ui-error--hover' },
            ] } name="Error" />
          </GridCell>

          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Active', variable: 'ui-warning--active' },
              { name: 'Default', variable: 'ui-warning' },
              { name: 'Hover', variable: 'ui-warning--hover' },
            ] } name="Warning" />
          </GridCell>

          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Active', variable: 'ui-success--active' },
              { name: 'Default', variable: 'ui-success' },
              { name: 'Hover', variable: 'ui-success--hover' },
            ] } name="Success" />
          </GridCell>
        </Grid>

        <Grid gutters="large" shrink>
          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Active', variable: 'ui-info--active' },
              { name: 'Default', variable: 'ui-info' },
              { name: 'Hover', variable: 'ui-info--hover' },
            ] } name="Info" />
          </GridCell>

          <GridCell>
            <ColorSwatch colors={ [
              { name: 'Default', variable: 'ui-highlight' },
            ] } name="Highlight" />
          </GridCell>
        </Grid>
      </Example>
    );
  }
}
