import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Dropdown,
  DropdownContent,
  DropdownTarget,
  Context,
  ContextMenu,
  ContextMenuItem,
  Strong,
  Toolbar,
  Tool,
} from 'bw-axiom';

export default class ToolbarExample extends Component {
  render() {
    return (
      <Example name="Toolbar">
        <Snippet>
          <Toolbar>
            <Tool icon="cross">Close</Tool>
            <Dropdown>
              <DropdownTarget>
                <Tool icon="chevron-down">
                  Sort by: <Strong>Size of Difference</Strong>
                </Tool>
              </DropdownTarget>
              <DropdownContent>
                <Context snippetSkip={ true }>
                  <ContextMenu>
                    <ContextMenuItem>Cheese (Volume)</ContextMenuItem>
                    <ContextMenuItem>Bread (Volume)</ContextMenuItem>
                  </ContextMenu>
                </Context>
              </DropdownContent>
            </Dropdown>
            <Dropdown snippetSkip={ true }>
              <DropdownTarget>
                <Tool icon="chevron-down">View</Tool>
              </DropdownTarget>
              <DropdownContent>
                <Context>
                  <ContextMenu>
                    <ContextMenuItem>Big</ContextMenuItem>
                    <ContextMenuItem>Small</ContextMenuItem>
                  </ContextMenu>
                </Context>
              </DropdownContent>
            </Dropdown>
          </Toolbar>
        </Snippet>
      </Example>
    );
  }
}
