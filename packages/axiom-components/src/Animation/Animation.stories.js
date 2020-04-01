import React, { useState } from 'react';
import Animation from './Animation';
import Button from '../Button/Button';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';

export default {
  title: 'Components/Animation',
  component: Animation,
};

export function Default() {
  const [animated, setAnimated] = useState(false);

  return (
    <Grid>
      <GridCell>
        <Button onClick={() => setAnimated(a => !a)} size="small">
          {' '}
          Toggle Animation
        </Button>
      </GridCell>
      <GridCell>
        <Animation toggled={animated}>Animated text</Animation>
      </GridCell>
    </Grid>
  );
}
