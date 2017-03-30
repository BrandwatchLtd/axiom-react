import React, { Component } from 'react';
import { Grid, GridCell, Icon, Link, Strong } from 'bw-axiom';

export default class ChartHeaderContent extends Component {
  render() {
    return (
      <Grid responsive={ false } verticalAlign="middle">
        <GridCell>
          <Strong>Chart Header</Strong> Lorem Ipsum
        </GridCell>

        <GridCell shrink={ true }>
          <Link style="inherit">
            <Icon name="question-mark-circle" />
          </Link>
        </GridCell>
      </Grid>
    );
  }
}
