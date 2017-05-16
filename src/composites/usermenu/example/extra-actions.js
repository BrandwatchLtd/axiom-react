import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  DropdownMenu,
  DropdownMenuItem,
  Grid,
  GridCell,
  UserMenu,
} from 'bw-axiom';

export default class UserMenuExample extends Component {
  render() {
    return (
      <Example name="UserMenu with custom actions">
        <Snippet>
          <Grid responsive={ false } snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <UserMenu
                  email="lorem.ipsum@gmail.com"
                  firstName="Lorem"
                  imageSrc=""
                  lastName="Ipsum"
                  onLogout={ () => {} }>
                <DropdownMenu>
                  <DropdownMenuItem>
                    Settings
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    Help!
                  </DropdownMenuItem>
                </DropdownMenu>
              </UserMenu>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
