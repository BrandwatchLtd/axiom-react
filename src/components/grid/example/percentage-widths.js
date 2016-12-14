import React, { Component } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import Grid from '../Grid';
import GridCell from '../GridCell';

export default class GridExample extends Component {
  render() {
    return (
      <Example name="Percentage widths">
        <Snippet>
          <Grid>
            <GridCell width={ 30 }>
              <DemoBox snippetReplace={ true }>30%</DemoBox>
            </GridCell>

            <GridCell>
              <DemoBox snippetReplace={ true }>Fit / Full</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
