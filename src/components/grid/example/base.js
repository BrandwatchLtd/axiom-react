import React, { Component } from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class GridExample extends Component {
  render() {
    return (
      <Example name="Basic Grid">
        <Snippet>
          <Grid>
            <GridCell>
              <DemoBox snippetReplace={ true }>Fit / Full</DemoBox>
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
