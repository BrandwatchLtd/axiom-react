import React from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import { gridGutters } from '../_vars';

export const noVertical = (
  <Grid vGutters={ false }>
    <GridCell snippetReplace={ true }>
      <DemoBox>Fit / Full</DemoBox>
    </GridCell>
    <GridCell snippetReplace={ true }>
      <DemoBox>Fit / Full</DemoBox>
    </GridCell>
  </Grid>
);

export const noHorizontal = (
  <Grid hGutters={ false }>
    <GridCell snippetReplace={ true }>
      <DemoBox>Fit / Full</DemoBox>
    </GridCell>

    <GridCell snippetReplace={ true }>
      <DemoBox>Fit / Full</DemoBox>
    </GridCell>
  </Grid>
);

export const noVerticalNoHorizontal = (
  <Grid gutters={ false }>
    <GridCell snippetReplace={ true }>
      <DemoBox>Fit / Full</DemoBox>
    </GridCell>

    <GridCell snippetReplace={ true }>
      <DemoBox>Fit / Full</DemoBox>
    </GridCell>
  </Grid>
);

export const sizing = gridGutters.map(({ id }, index) =>
  <Grid gutters={ id } key={ index }>
    <GridCell snippetReplace={ true }>
      <DemoBox>Gutters size { id }</DemoBox>
    </GridCell>

    <GridCell snippetReplace={ true }>
      <DemoBox>Gutters size { id }</DemoBox>
    </GridCell>
  </Grid>
);
