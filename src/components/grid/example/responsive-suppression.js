import React, { Component } from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
