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
      <Example name="Flex sizing (cell level responsive)">
        <Heading level={ 5 }>Full width</Heading>
        <Snippet>
          <Grid snippetIgnore={ true }>
            { breakpoints.map(({ id }, index) =>
              <GridCell full={ id } key={ index }>
                <DemoBox snippetReplace={ true }>Full (> { id })</DemoBox>
              </GridCell>
            ) }
          </Grid>
        </Snippet>

        <Heading level={ 5 }>Shrink (to contents)</Heading>
        <Snippet>
          <Grid snippetIgnore={ true }>
            { breakpoints.map(({ id }, index) =>
              <GridCell key={ index } shrink={ id }>
                <DemoBox snippetReplace={ true }>Shrink (> { id })</DemoBox>
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
