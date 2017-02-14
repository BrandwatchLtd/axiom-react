import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ImageCircle, Grid, GridCell } from 'bw-axiom';

export default class ImageExample extends Component {
  render() {
    return (
      <Example name="ImageCircle with overlay">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <ImageCircle
                  border="small"
                  overlayIconName="magnify-glass"
                  overlayIconSize="3rem"
                  size="4rem"
                  src="assets/axiom-square.jpg" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <ImageCircle
                  border="large"
                  overlayIconName="magnify-glass"
                  overlayIconSize="7rem"
                  size="10rem"
                  src="assets/axiom-square.jpg" />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
