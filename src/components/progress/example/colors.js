import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Label, Grid, GridCell, ProgressInfinite } from 'bw-axiom';

export default class ProgressColorsExample extends Component {

  render() {
    return (
      <Example name="Progress colors">
        <Snippet>
          <Grid snippetIgnore={ true } vAlign="middle">
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
