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
                  Sort by: <Strong snippetIgnore={ true }>Size of Difference</Strong>
                </Tool>
              </DropdownTarget>
              <DropdownContent>
                <Context snippetReplace={ true }>
                  <ContextMenu>
                    <ContextMenuItem>Cheese (Volume)</ContextMenuItem>
                    <ContextMenuItem>Ham (Volume)</ContextMenuItem>
                  </ContextMenu>
                </Context>
              </DropdownContent>
            </Dropdown>
            <Tool>Report</Tool>
          </Toolbar>
        </Snippet>
      </Example>
    );
  }
}
