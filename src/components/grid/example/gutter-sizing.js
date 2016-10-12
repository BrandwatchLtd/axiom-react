import React, { Component } from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import { gridGutters } from '../_vars';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class GridExample extends Component {
  render() {
    return (
      <Example name="Gutter sizing">
        <Snippet>
          { gridGutters.map(({ id }, index) =>
            <Grid gutters={ id } key={ index }>
              <GridCell snippetReplace={ true }>
                <DemoBox>Gutters size { id }</DemoBox>
              </GridCell>

              <GridCell snippetReplace={ true }>
                <DemoBox>Gutters size { id }</DemoBox>
              </GridCell>
            </Grid>
          ) }
        </Snippet>
      </Example>
    );
  }
}
