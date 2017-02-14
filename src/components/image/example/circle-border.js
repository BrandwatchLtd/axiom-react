import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, ImageCircle } from 'bw-axiom';

export default class ImageExample extends Component {
  render() {
    return (
      <Example name="ImageCircle with a border">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <ImageCircle border="small" size="4rem" src="assets/avatar.png" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <ImageCircle border="large" size="5rem" src="assets/avatar.png" />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
