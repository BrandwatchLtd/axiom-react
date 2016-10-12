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
      <Example name="Flex sizing (cell level)">
        <Heading level={ 5 }>Full width</Heading>
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

        <Heading level={ 5 }>Shrink (to contents)</Heading>
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
