import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, LogoBox } from 'bw-axiom';

export default class LogoExample extends Component {
  render() {
    return (
      <Example name="Box">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <LogoBox color="white" height="7.1875rem" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <LogoBox color="grey" height="7.1875rem" />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
