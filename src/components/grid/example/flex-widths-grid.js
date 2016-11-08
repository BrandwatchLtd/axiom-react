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
      <Example name="Flex widths (grid level)">
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
      </Example>
    );
  }
}
