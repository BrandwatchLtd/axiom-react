import React, { Component, PropTypes } from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
