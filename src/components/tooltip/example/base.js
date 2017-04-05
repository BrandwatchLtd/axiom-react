import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Avatar,
  Context,
  ContextTip,
  Grid,
  GridCell,
  Paragraph,
  Tooltip,
  TooltipTarget,
  TooltipContent,
} from 'bw-axiom';

export default class DropdownExample extends Component {
  render() {
    const positions = [
      ['bottom', 'bottom'],
      ['right', 'left'],
      ['top', 'top'],
    ];

    return (
      <Example name="Tooltip">
        <Snippet>
          { positions.map((cols, ri) =>
            <Grid gutters={ false } key={ ri } snippetIgnore={ true } space="none">
              { cols.map((position, ci) =>
                <GridCell key={ ci } shrink={ true } snippetIgnore={ true }>
                  <Tooltip position={ position } snippetSkip={ ri + ci !== 0 }>
                    <TooltipTarget>
                      <Avatar size="4rem" src="assets/avatar.png" />
                    </TooltipTarget>

                    <TooltipContent>
                      <Context>
                        <ContextTip>
                          <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Duis at velit ut nisl eleifend volutpat.
                          </Paragraph>
                        </ContextTip>
                      </Context>
                    </TooltipContent>
                  </Tooltip>
                </GridCell>
              ) }
            </Grid>
          ) }
        </Snippet>
      </Example>
    );
  }
}
