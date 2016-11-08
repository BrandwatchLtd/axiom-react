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
      <Example name="Grid Cell alignment controlled by Grid Cell">
        <Heading>Vertical</Heading>
        <Snippet>
          <Grid snippetIgnore={ true } style={ { minHeight: 180 } }>
            { GridCell.__ax_propTypes.vAlign.oneOf.map((vAlign, index) =>
              <GridCell key={ index } vAlign={ vAlign }>
                <DemoBox snippetReplace={ true }>{ vAlign }</DemoBox>
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
