import React from 'react';
import Avatar from '../Avatar';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';

export default (
  <Grid snippetIgnore={ true } vAlign="bottom">
    { Avatar.__ax_propTypes.size.oneOf.map((size, index) =>
      <GridCell key={ index } shrink={ true } snippetIgnore={ true }>
        <Avatar size={ size } src="/assets/avatar.png" />
      </GridCell>
    ) }
  </Grid>
);
