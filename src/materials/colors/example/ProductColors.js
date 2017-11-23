import React, { Component } from 'react';
import { Example } from 'style-guide';
import chunk from 'lodash.chunk';
import ColorSwatch from './ColorSwatch';
import { productColors } from '../productColors';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';

export default class ColorsExample extends Component {
  render() {
    return (
      <Example name="Product">
        { chunk(productColors, 3).map((colors, index) =>
          <Grid gutters="large" key={ index } shrink>
            { colors.map(({ id, name }) =>
              <GridCell key={ id }>
                <ColorSwatch colors={ [
                  { name: 'Active', variable: `product-${id}--active` },
                  { name: 'Default', variable: `product-${id}` },
                  { name: 'Hover', variable: `product-${id}--hover` },
                ] } name={ name } />
              </GridCell>
            ) }
          </Grid>
        ) }
      </Example>
    );
  }
}
