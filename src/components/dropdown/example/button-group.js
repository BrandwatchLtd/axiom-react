import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ContextMenu,
  ContextMenuItem,
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from 'bw-axiom';

export default class DropdownExample extends Component {
  render() {
    return (
      <Example name="Dropdown with ButtonGroup">
        <Snippet>
          <ButtonGroup joined={ true }>
            <Button style="secondary">Primary Action</Button>

            <Dropdown>
              <DropdownButton>
                <Button style="secondary">
                  <ButtonIcon name="chevron-down" />
                </Button>
              </DropdownButton>

              <DropdownMenu>
                <ContextMenu>
                  <ContextMenuItem>Option 1</ContextMenuItem>
                  <ContextMenuItem>Option 2</ContextMenuItem>
                  <ContextMenuItem>Option 3</ContextMenuItem>
                </ContextMenu>
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
