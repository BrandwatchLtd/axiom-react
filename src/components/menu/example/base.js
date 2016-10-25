import React, { Component } from 'react';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
