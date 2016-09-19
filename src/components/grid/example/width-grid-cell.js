import React from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import { breakpoints } from '../../../design-patterns/layout/_vars';
import { gridWidths } from '../_vars';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';

export const full = (
  <Grid snippetIgnore={ true }>
    <GridCell full={ true }>
      <DemoBox snippetReplace={ true }>Full width</DemoBox>
    </GridCell>

    <GridCell snippetSkip={ true }>
      <DemoBox>Auto</DemoBox>
    </GridCell>
  </Grid>
);

export const shrink = (
  <Grid snippetIgnore={ true }>
    <GridCell shrink={ true }>
      <DemoBox snippetReplace={ true }>Shrink</DemoBox>
    </GridCell>

    <GridCell snippetSkip={ true }>
      <DemoBox>Auto</DemoBox>
    </GridCell>
  </Grid>
);

export const fullResponsive = (
  <Grid snippetIgnore={ true }>
    { breakpoints.map(({ id }, index) =>
      <GridCell full={ id } key={ index }>
        <DemoBox snippetReplace={ true }>Full (> { id })</DemoBox>
      </GridCell>
    ) }
  </Grid>
);

export const shrinkResponsive = (
  <Grid snippetIgnore={ true }>
    { breakpoints.map(({ id }, index) =>
      <GridCell key={ index } shrink={ id }>
        <DemoBox snippetReplace={ true }>Shrink (> { id })</DemoBox>
      </GridCell>
    ) }
  </Grid>
);

export const base12 = gridWidths.map(({ id: gridWidthId }, t) =>
  breakpoints.map(({ id: breakpointId }, b) =>
    <Grid key={ `${t}${b}` } snippetIgnore={ true }>
      <GridCell { ...{ [gridWidthId]: breakpointId } }>
        <DemoBox snippetReplace={ true }>
          { gridWidthId } (> { breakpointId })
        </DemoBox>
      </GridCell>

      <GridCell snippetSkip={ true }>
        <DemoBox>Auto</DemoBox>
      </GridCell>
    </Grid>
  )
);

export const base12Responsive = gridWidths.map(({ id: gridWidthId }, t) =>
  breakpoints.map(({ id: breakpointId }, b) =>
    <Grid key={ `${t}${b}` } snippetIgnore={ true }>
      <GridCell { ...{ [gridWidthId]: breakpointId } }>
        <DemoBox snippetReplace={ true }>
          { gridWidthId } (> { breakpointId })
        </DemoBox>
      </GridCell>

      <GridCell snippetSkip={ true }>
        <DemoBox>Auto</DemoBox>
      </GridCell>
    </Grid>
  )
);
