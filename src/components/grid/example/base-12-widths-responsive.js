import React, { Component } from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import { breakpoints } from '../../../design-patterns/layout/_vars';
import { gridWidths } from '../_vars';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class GridExample extends Component {
  render() {
    return (
      <Example name="Standard base 12 cell sizing (responsive)">
        <Snippet>
          { gridWidths.map(({ id: gridWidthId }, t) =>
            breakpoints.map(({ id: breakpointId }, b) =>
              <Grid key={ `${t}${b}` } snippetIgnore={ true }>
                <GridCell { ...{ [gridWidthId]: breakpointId } }>
                  <DemoBox snippetReplace={ true }>
                    { gridWidthId } (> { breakpointId })
                  </DemoBox>
                </GridCell>

                <GridCell snippetSkip={ true }>
                  <DemoBox>Auto</DemoBox>
                </GridCell>
              </Grid>
            )
          ) }
        </Snippet>
      </Example>
    );
  }
}
