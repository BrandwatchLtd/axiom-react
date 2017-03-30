import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Label, Grid, GridCell, ProgressInfinite } from 'bw-axiom';

export default class ProgressExample extends Component {
  render() {
    return (
      <Example name="ProgressInfinite colors">
        <Snippet>
          <Grid snippetIgnore={ true } verticalAlign="middle">
            <GridCell shrink={ true } snippetIgnore={ true }>
              <ProgressInfinite color="subtle" />
            </GridCell>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <Label color="success" snippetIgnore={ true }>
                <ProgressInfinite color="white" />
              </Label>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
