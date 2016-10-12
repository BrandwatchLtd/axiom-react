import React, { Component } from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import { gridWidths } from '../_vars';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class GridExample extends Component {
  render() {
    return (
      <Example name="Standard base 12 cell sizing">
        <Snippet>
          { gridWidths.map(({ id: gridWidthId }, t) =>
            <Grid key={ t } snippetIgnore={ true }>
              <GridCell { ...{ [gridWidthId]: true } }>
                <DemoBox snippetReplace={ true }>
                  { gridWidthId }
                </DemoBox>
              </GridCell>

              <GridCell snippetSkip={ true }>
                <DemoBox>Auto</DemoBox>
              </GridCell>
            </Grid>
          ) }
        </Snippet>
      </Example>
    );
  }
}
