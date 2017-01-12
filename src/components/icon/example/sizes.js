import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, Icon } from 'bw-axiom';

export default class IconExample extends Component {
  render () {
    return (
      <Example name="Icons sizes">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <Icon name="twitter" size="2rem" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Icon name="twitter" size="3rem" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Icon name="twitter" size="4rem" />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
