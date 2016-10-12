import React, { Component } from 'react';
import Avatar from '../Avatar';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class AvatarExample extends Component {
  render() {
    return (
      <Example name="Sized Avatars">
        <Snippet>
          <Grid snippetIgnore={ true } vAlign="bottom">
            { Avatar.__ax_propTypes.size.oneOf.map((size, index) =>
              <GridCell key={ index } shrink={ true } snippetIgnore={ true }>
                <Avatar size={ size } src="/assets/avatar.png" />
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
