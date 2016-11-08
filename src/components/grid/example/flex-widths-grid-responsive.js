import React, { Component } from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import Heading from '../../typography/Heading';
import { breakpoints } from '../../../design-patterns/layout/_vars';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class GridExample extends Component {
  render() {
    return (
      <Example name="Flex widths (grid level responsive)">
        <Heading>Full width</Heading>
        <Snippet>
          { breakpoints.map(({ id }, index) =>
            <Grid full={ id } key={ index }>
              <GridCell snippetReplace={ true }>
                <DemoBox>Full (> { id })</DemoBox>
              </GridCell>

              <GridCell snippetReplace={ true }>
                <DemoBox>Full (> { id })</DemoBox>
              </GridCell>
            </Grid>
          ) }
        </Snippet>

        <Heading>Fit (equal widths)</Heading>
        <Snippet>
          { breakpoints.map(({ id }, index) =>
            <Grid fit={ id } full={ true } key={ index }>
              <GridCell snippetReplace={ true }>
                <DemoBox>Fit (> { id })</DemoBox>
              </GridCell>

              <GridCell snippetReplace={ true }>
                <DemoBox>Fit (> { id })</DemoBox>
              </GridCell>
            </Grid>
          ) }
        </Snippet>
      </Example>
    );
  }
}
