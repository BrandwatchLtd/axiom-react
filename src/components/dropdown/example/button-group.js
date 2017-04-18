import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  Context,
  Dropdown,
  DropdownContent,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTarget,
} from 'bw-axiom';

export default class DropdownExample extends Component {
  render() {
    return (
      <Example name="Dropdown with ButtonGroup">
        <Snippet>
          <ButtonGroup joined={ true }>
            <Button style="secondary">Primary Action</Button>

            <Dropdown>
              <DropdownTarget>
                <Button style="secondary">
                  <ButtonIcon name="chevron-down" />
                </Button>
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
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
