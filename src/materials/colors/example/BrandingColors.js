import React, { Component } from 'react';
import { Example } from 'style-guide';
import chunk from 'lodash.chunk';
import ColorSwatch from './ColorSwatch';
import brandColors from '../brandColors';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';

export default class ColorsExample extends Component {
  render() {
    return (
      <Example name="Branding">
        { chunk(brandColors, 3).map((colors, index) =>
          <Grid gutters="large" key={ index } shrink>
            { colors.map((color) =>
              <GridCell key={ color }>
                <ColorSwatch colors={ [
                  { name: 'Active', variable: `brand-${color}--dark` },
                  { name: 'Default', variable: `brand-${color}` },
                  { name: 'Hover', variable: `brand-${color}--light` },
                ] } name={ color } />
              </GridCell>
            ) }
          </Grid>
        ) }
      </Example>
    );
  }
}
