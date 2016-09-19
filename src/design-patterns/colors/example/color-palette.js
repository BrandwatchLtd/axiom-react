import React from 'react';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';
import { colorPalette } from '../../colors/_vars';
import ColorSwatch from 'style-guide/components/ColorSwatch/ColorSwatch';

export default colorPalette.map((colors, t) =>
  <Grid key={ t }>
    {
      colors.map(({ name, color }, b) =>
        <GridCell key={ `${t}${b}` }>
          <ColorSwatch color={ color } name={ name } />
        </GridCell>
      )
    }
  </Grid>
);
