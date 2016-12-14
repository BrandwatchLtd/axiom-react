import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Menu, MenuItem } from 'bw-axiom';

export default class MenuExample extends Component {
  render() {
    return (
      <Example name="Menu">
        <Snippet>
          <Menu>
            <MenuItem>Lorem ipsum</MenuItem>
            <MenuItem isActive={ true }>Nunc eu massa ligula</MenuItem>
            <MenuItem>Aenean tristique</MenuItem>
            <MenuItem isDisabled={ true }>Nunc eu massa ligula</MenuItem>
          </Menu>
        </Snippet>
      </Example>
    );
  }
}
