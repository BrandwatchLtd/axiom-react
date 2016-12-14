import React, { Component, PropTypes } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell, Heading } from 'bw-axiom';

export default class GridExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      GridCell: PropTypes.shape({
        vAlign: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }

  render() {
    const { components } = this.props;
    const { GridCell: { vAlign } } = components;

    return (
      <Example name="Grid Cell alignment controlled by Grid Cell">
        <Heading>Vertical</Heading>
        <Snippet>
          <Grid snippetIgnore={ true } style={ { minHeight: 180 } }>
            { vAlign.values.map((vAlign) =>
              <GridCell key={ vAlign } vAlign={ vAlign }>
                <DemoBox snippetReplace={ true }>{ vAlign }</DemoBox>
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
