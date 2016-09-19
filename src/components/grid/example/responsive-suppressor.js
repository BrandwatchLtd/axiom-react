import React from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';

export default (
  <Grid responsive={ false }>
    <GridCell snippetReplace={ true }>
      <DemoBox>Always fits</DemoBox>
    </GridCell>

    <GridCell snippetReplace={ true }>
      <DemoBox>Always fits</DemoBox>
    </GridCell>
  </Grid>
);
