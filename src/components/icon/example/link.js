import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, IconLink } from 'bw-axiom';

export default class IconExample extends Component {
  render () {
    return (
      <Example name="Icon link">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <IconLink name="twitter" size="1rem" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <IconLink name="twitter" size="2rem" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <IconLink name="twitter" size="3rem" />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
