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
              <Icon name="twitter" size={ 24 } />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Icon name="twitter" size={ 36 } />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Icon name="twitter" size={ 50 } />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
