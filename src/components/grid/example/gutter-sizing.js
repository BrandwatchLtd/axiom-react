import React, { Component, PropTypes } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell } from 'bw-axiom';

export default class GridExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Grid: PropTypes.shape({
        gutters: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }

  render() {
    const { components } = this.props;
    const { Grid: { gutters } } = components;

    return (
      <Example name="Gutter sizing">
        <Snippet>
          { gutters.values.map((gutter) =>
            <Grid gutters={ gutter } key={ gutter }>
              <GridCell snippetReplace={ true }>
                <DemoBox>Gutters size { gutter }</DemoBox>
              </GridCell>

              <GridCell snippetReplace={ true }>
                <DemoBox>Gutters size { gutter }</DemoBox>
              </GridCell>
            </Grid>
          ) }
        </Snippet>
      </Example>
    );
  }
}
