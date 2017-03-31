import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Context,
  ContextBox,
  ContextMenu,
  ContextMenuItem,
  Grid,
  GridCell,
  Paragraph,
} from 'bw-axiom';

export default class ContextTipExample extends Component {
  render() {
    return (
      <Example name="Combining Context Contents">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <Context theme="dark">
                <ContextBox padding="small">
                  <Paragraph snippetIgnore={ true }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at velit ut nisl eleifend volutpat.
                  </Paragraph>
                </ContextBox>

                <ContextBox padding="small">
                  <Paragraph snippetIgnore={ true }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at velit ut nisl eleifend volutpat.
                  </Paragraph>
                </ContextBox>
              </Context>
            </GridCell>

            <GridCell shrink={ true } snippetSkip={ true }>
              <Context position="top">
                <ContextBox>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at velit ut nisl eleifend volutpat.
                  </Paragraph>
                </ContextBox>

                <ContextBox>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at velit ut nisl eleifend volutpat.
                  </Paragraph>
                </ContextBox>
              </Context>
            </GridCell>

            <GridCell shrink={ true } snippetSkip={ true }>
              <Context position="top">
                <ContextBox>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at velit ut nisl eleifend volutpat.
                  </Paragraph>
                </ContextBox>

                <ContextMenu>
                  <ContextMenuItem>
                    Settings
                  </ContextMenuItem>

                  <ContextMenuItem>
                    Help!
                  </ContextMenuItem>
                </ContextMenu>
              </Context>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
