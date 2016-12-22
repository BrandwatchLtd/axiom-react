import React, { Component } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell, Heading } from 'bw-axiom';

export default class GridExample extends Component {
  render() {
    return (
      <Example name="Flex sizing (cell level)">
        <Heading>Fill width</Heading>
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell fill={ true }>
              <DemoBox snippetReplace={ true }>Fill width</DemoBox>
            </GridCell>

            <GridCell snippetSkip={ true }>
              <DemoBox>Auto</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>

        <Heading>Fit width</Heading>
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell fit={ true }>
              <DemoBox snippetReplace={ true }>Fit width</DemoBox>
            </GridCell>

            <GridCell snippetSkip={ true }>
              <DemoBox>Auto</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>

        <Heading>Full width</Heading>
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell full={ true }>
              <DemoBox snippetReplace={ true }>Full width</DemoBox>
            </GridCell>

            <GridCell snippetSkip={ true }>
              <DemoBox>Auto</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>

        <Heading>Shrink (to contents)</Heading>
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true }>
              <DemoBox snippetReplace={ true }>Shrink</DemoBox>
            </GridCell>

            <GridCell snippetSkip={ true }>
              <DemoBox>Auto</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
