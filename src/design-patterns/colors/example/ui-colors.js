import React from 'react';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';
import Heading from '../../../components/typography/Heading';
import { colorAliases } from '../../colors/_vars';
import ColorSwatch from 'style-guide/components/ColorSwatch/ColorSwatch';

export default colorAliases.map(({ heading, colors }, t) => [
  <Heading key={ t } level={ 5 }>{ heading }</Heading>,
  colors.map((group, m) =>
    <Grid key={ `${t}${m}` }>
      { group.map(({ name, color }, b) =>
        <GridCell key={ `${t}${m}${b}` }>
          <ColorSwatch color={ color } name={ name } />
        </GridCell>
      ) }
    </Grid>
  ),
]);
