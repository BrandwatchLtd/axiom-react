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
              <Avatar size={ 40 } src="assets/avatar.png" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Avatar size={ 80 } src="assets/avatar.png" />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Avatar size={ 120 } src="assets/avatar.png" />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
