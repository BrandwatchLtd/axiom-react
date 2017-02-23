import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Context, ContextMenu, ContextMenuItem, Grid, GridCell } from 'bw-axiom';

export default class ContextMenuExample extends Component {
  render() {
    return (
      <Example name="Menu">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <Context position="bottom">
                <ContextMenu>
                  <ContextMenuItem>
                    Nam dignissim bibendum
                  </ContextMenuItem>

                  <ContextMenuItem snippetSkip={ true }>
                    Nam dignissim bibendum
                  </ContextMenuItem>

                  <ContextMenuItem snippetSkip={ true }>
                    Nam dignissim bibendum
                  </ContextMenuItem>
                </ContextMenu>
              </Context>
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Context position="right">
                <ContextMenu>
                  <ContextMenuItem>
                    Nam dignissim bibendum
                  </ContextMenuItem>

                  <ContextMenuItem snippetSkip={ true }>
                    Nam dignissim bibendum
                  </ContextMenuItem>

                  <ContextMenuItem snippetSkip={ true }>
                    Nam dignissim bibendum
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
