import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Avatar, Grid, GridCell } from 'bw-axiom';

export default class AvatarExample extends Component {
  render() {
    return (
      <Example name="Sized Avatars">
        <Snippet>
          <Grid snippetIgnore={ true } vAlign="bottom">
            <GridCell shrink={ true } snippetIgnore={ true }>
              <Avatar size="2rem" src="assets/avatar.png" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Avatar size="4rem" src="assets/avatar.png" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Avatar size="6rem" src="assets/avatar.png" />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
