import React from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';

export default (
  <Grid>
    <GridCell>
      <DemoBox snippetReplace={ true }>Fit / Full</DemoBox>
    </GridCell>

    <GridCell>
      <DemoBox snippetReplace={ true }>Fit / Full</DemoBox>
    </GridCell>
  </Grid>
);
