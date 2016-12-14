import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import Menu from '../Menu';
import MenuItem from '../MenuItem';

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
