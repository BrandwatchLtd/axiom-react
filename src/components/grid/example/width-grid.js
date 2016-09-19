import React from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import { breakpoints } from '../../../design-patterns/layout/_vars';

export const full = (
  <Grid full={ true }>
    <GridCell snippetReplace={ true }>
      <DemoBox>Full</DemoBox>
    </GridCell>

    <GridCell snippetReplace={ true }>
      <DemoBox>Full</DemoBox>
    </GridCell>
  </Grid>
);

export const fit = (
  <Grid fit={ true }>
    <GridCell snippetReplace={ true }>
      <DemoBox>Fit</DemoBox>
    </GridCell>

    <GridCell snippetReplace={ true }>
      <DemoBox>Fit</DemoBox>
    </GridCell>
  </Grid>
);

export const fullResponsive = breakpoints.map(({ id }, index) =>
  <Grid full={ id } key={ index }>
    <GridCell snippetReplace={ true }>
      <DemoBox>Full (> { id })</DemoBox>
    </GridCell>

    <GridCell snippetReplace={ true }>
      <DemoBox>Full (> { id })</DemoBox>
    </GridCell>
  </Grid>
);

export const fitResponsive = breakpoints.map(({ id }, index) =>
  <Grid fit={ id } full={ true } key={ index }>
    <GridCell snippetReplace={ true }>
      <DemoBox>Fit (> { id })</DemoBox>
    </GridCell>

    <GridCell snippetReplace={ true }>
      <DemoBox>Fit (> { id })</DemoBox>
    </GridCell>
  </Grid>
);
