import React, { Component } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import Grid from '../Grid';
import GridCell from '../GridCell';

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
