import React, { Component } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell, Heading } from 'bw-axiom';

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
