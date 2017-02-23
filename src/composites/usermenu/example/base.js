import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, UserMenu } from 'bw-axiom';

export default class UserMenuExample extends Component {
  render() {
    return (
      <Example name="UserMenu">
        <Snippet>
          <Grid responsive={ false } snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <UserMenu
                  email="lorem.ipsum@gmail.com"
                  firstName="Lorem"
                  lastName="Ipsum"
                  onLogout={ () => {} } />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
