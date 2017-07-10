import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Dropdown,
  DropdownContent,
  DropdownTarget,
  Context,
  ContextMenu,
  ContextMenuItem,
  Link,
  Strong,
  TextIcon,
  Toggle,
  Toolbar,
  Tool,
} from 'bw-axiom';

export default class ToolbarExample extends Component {
  render() {
    return (
      <Example name="Toolbar">
        <Snippet>
          <Toolbar>
            <Tool>
              <Link style="subtle">Close<TextIcon name="cross" spaceLeft="x2" /></Link>
            </Tool>
            <Dropdown>
              <DropdownTarget>
                <Tool>
                  <Link style="subtle">
                    Sort by: <Strong snippetIgnore={ true }>Size of Difference</Strong>
                    <TextIcon name="chevron-down" spaceLeft="x2" />
                  </Link>
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
            <Tool>
              <Toggle
                  disabled={ true }
                  onToggle={ () => {} }
                  toggled={ true } >Toggle</Toggle>
            </Tool>
          </Toolbar>
        </Snippet>
      </Example>
    );
  }
}
