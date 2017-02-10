import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, ProgressFinite } from 'bw-axiom';

export default class FiniteProgressExample extends Component {

  render() {
    return (
      <Example name="Finite progress">
        <Snippet>
          <Grid snippetIgnore={ true }>
            { [5, 75, 100].map((percent) =>
              <GridCell key={ percent } shrink={ true } snippetIgnore={ true }>
                <ProgressFinite percent={ percent }/>
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
