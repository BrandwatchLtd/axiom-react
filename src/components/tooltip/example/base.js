import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Avatar,
  Context,
  ContextTip,
  Paragraph,
  Tooltip,
  TooltipTarget,
  TooltipContent,
} from 'bw-axiom';

export default class DropdownExample extends Component {
  render() {
    return (
      <Example name="Tooltip">
        <Snippet>
          <Tooltip position="top">
            <TooltipTarget>
              <Avatar size="4rem" src="assets/avatar.png" />
            </TooltipTarget>

            <TooltipContent>
              <Context theme="dark">
                <ContextTip>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at velit ut nisl eleifend volutpat.
                  </Paragraph>
                </ContextTip>
              </Context>
            </TooltipContent>
          </Tooltip>
        </Snippet>
      </Example>
    );
  }
}
