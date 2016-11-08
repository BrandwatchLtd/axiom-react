import React, { Component } from 'react';
import Heading from '../../typography/Heading';
import Grid from '../Grid';
import GridCell from '../GridCell';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class GridExample extends Component {
  render() {
    return (
      <Example name="Grid Cell alignment controlled by Grid">
        <Heading>Vertical</Heading>
        <Snippet>
          { Grid.__ax_propTypes.vAlign.oneOf.map((vAlign, index) =>
            <Grid key={ index } style={ { minHeight: 180 } } vAlign={ vAlign }>
              <GridCell snippetReplace={ true }>
                <DemoBox>{ vAlign }</DemoBox>
              </GridCell>

              <GridCell snippetReplace={ true }>
                <DemoBox>{ vAlign }</DemoBox>
              </GridCell>
            </Grid>
          ) }
        </Snippet>

        <Heading>Horizontal</Heading>
        <Snippet>
          { Grid.__ax_propTypes.hAlign.oneOf.map((hAlign, index) =>
            <Grid hAlign={ hAlign } key={ index }>
              <GridCell snippetReplace={ true }>
                <DemoBox>{ hAlign }</DemoBox>
              </GridCell>

              <GridCell snippetReplace={ true }>
                <DemoBox>{ hAlign }</DemoBox>
              </GridCell>
            </Grid>
          ) }
        </Snippet>
      </Example>
    );
  }
}
