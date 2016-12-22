import React, { Component } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell, Heading } from 'bw-axiom';

export default class GridExample extends Component {
  render() {
    return (
      <Example name="Flex widths (grid level)">
        <Heading>Fill width</Heading>
        <Snippet>
          <Grid fill={ true }>
            <GridCell snippetReplace={ true }>
              <DemoBox>Fill</DemoBox>
            </GridCell>

            <GridCell snippetReplace={ true }>
              <DemoBox>Fill</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>

        <Heading>Fit (equal widths)</Heading>
        <Snippet>
          <Grid fit={ true }>
            <GridCell snippetReplace={ true }>
              <DemoBox>Fit</DemoBox>
            </GridCell>

            <GridCell snippetReplace={ true }>
              <DemoBox>Fit</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>

        <Heading>Full width</Heading>
        <Snippet>
          <Grid full={ true }>
            <GridCell snippetReplace={ true }>
              <DemoBox>Full</DemoBox>
            </GridCell>

            <GridCell snippetReplace={ true }>
              <DemoBox>Full</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>

        <Heading>Shrink width</Heading>
        <Snippet>
          <Grid shrink={ true }>
            <GridCell snippetReplace={ true }>
              <DemoBox>Shrink</DemoBox>
            </GridCell>

            <GridCell snippetReplace={ true }>
              <DemoBox>Shrink</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
