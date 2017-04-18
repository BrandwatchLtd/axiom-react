import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Context,
  Dropdown,
  DropdownContent,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTarget,
  IconButton,
} from 'bw-axiom';

export default class DropdownExample extends Component {
  render() {
    return (
      <Example name="Dropdown with IconButton">
        <Snippet>
          <Dropdown offset="start" position="right">
            <DropdownTarget>
              <IconButton name="ellipsis" />
            </DropdownTarget>

            <DropdownContent>
              <Context>
                <DropdownMenu>
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                  <DropdownMenuItem>Option 3</DropdownMenuItem>
                </DropdownMenu>
              </Context>
            </DropdownContent>
          </Dropdown>
        </Snippet>
      </Example>
    );
  }
}
