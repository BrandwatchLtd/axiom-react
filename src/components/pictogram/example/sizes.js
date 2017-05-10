import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, Pictogram } from 'bw-axiom';

export default class PictogramExample extends Component {
  render () {
    return (
      <Example name="Pictograms sizes">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <Pictogram name="organisation" size="3rem" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Pictogram name="organisation" size="5rem" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Pictogram name="organisation" size="7rem" />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
