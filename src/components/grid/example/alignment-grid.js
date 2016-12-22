import React, { Component, PropTypes } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell, Heading } from 'bw-axiom';

export default class GridExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Grid: PropTypes.shape({
        vAlign: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
        hAlign: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }

  render() {
    const { components } = this.props;
    const { Grid: { vAlign, hAlign } } = components;

    return (
      <Example name="Grid Cell alignment controlled by Grid">
        <Heading>Vertical</Heading>
        <Snippet>
          { vAlign.values.map((vAlign) =>
            <Grid key={ vAlign } style={ { minHeight: 180 } } vAlign={ vAlign }>
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
          { hAlign.values.map((hAlign) =>
            <Grid hAlign={ hAlign } key={ hAlign } shrink={ true }>
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
