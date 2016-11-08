import React, { Component } from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import Heading from '../../typography/Heading';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class GridExample extends Component {
  render() {
    return (
      <Example name="Gutter suppression">
        <Heading>No vertical gutters</Heading>
        <Snippet>
          <Grid vGutters={ false }>
            <GridCell snippetReplace={ true }>
              <DemoBox>Fit / Full</DemoBox>
            </GridCell>

            <GridCell snippetReplace={ true }>
              <DemoBox>Fit / Full</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>

        <Heading>No horizontal gutters</Heading>
        <Snippet>
          <Grid hGutters={ false }>
            <GridCell snippetReplace={ true }>
              <DemoBox>Fit / Full</DemoBox>
            </GridCell>

            <GridCell snippetReplace={ true }>
              <DemoBox>Fit / Full</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>

        <Heading>No vertical or horizontal gutters</Heading>
        <Snippet>
          <Grid gutters={ false }>
            <GridCell snippetReplace={ true }>
              <DemoBox>Fit / Full</DemoBox>
            </GridCell>

            <GridCell snippetReplace={ true }>
              <DemoBox>Fit / Full</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
