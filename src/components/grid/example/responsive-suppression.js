import React, { Component } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell } from 'bw-axiom';

export default class GridExample extends Component {
  render() {
    return (
      <Example name="Responsive suppression">
        <Snippet>
          <Grid responsive={ false }>
            <GridCell snippetReplace={ true }>
              <DemoBox>Always fits</DemoBox>
            </GridCell>

            <GridCell snippetReplace={ true }>
              <DemoBox>Always fits</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
