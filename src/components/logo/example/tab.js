import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, LogoTab } from 'bw-axiom';

export default class LogoExample extends Component {
  render() {
    return (
      <Example name="Tab">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <LogoTab color="white" height="7.75rem" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <LogoTab color="grey" height="7.75rem" />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
