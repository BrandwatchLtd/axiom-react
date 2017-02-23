import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Context,
  ContextMenu,
  ContextMenuItem,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  IconButton,
} from 'bw-axiom';

export default class DropdownExample extends Component {
  render() {
    return (
      <Example name="Dropdown with IconButton">
        <Snippet>
          <Dropdown offset="start" position="right">
            <DropdownButton>
              <IconButton name="ellipsis" />
            </DropdownButton>

            <DropdownMenu>
              <Context>
                <ContextMenu>
                  <ContextMenuItem>Option 1</ContextMenuItem>
                  <ContextMenuItem>Option 2</ContextMenuItem>
                  <ContextMenuItem>Option 3</ContextMenuItem>
                </ContextMenu>
              </Context>
            </DropdownMenu>
          </Dropdown>
        </Snippet>
      </Example>
    );
  }
}
