import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell, Heading } from 'bw-axiom';

export default class GridExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Grid: PropTypes.shape({
        horizontalAlign: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
        verticalAlign: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }

  render() {
    const { components } = this.props;
    const { Grid: { verticalAlign, horizontalAlign } } = components;

    return (
      <Example name="Grid Cell alignment controlled by Grid">
        <Heading>Vertical</Heading>
        <Snippet>
          { verticalAlign.values.map((verticalAlign) =>
            <Grid
                key={ verticalAlign }
                style={ { minHeight: 180 } }
                verticalAlign={ verticalAlign }>
              <GridCell snippetReplace={ true }>
                <DemoBox>{ verticalAlign }</DemoBox>
              </GridCell>

              <GridCell snippetReplace={ true }>
                <DemoBox>{ verticalAlign }</DemoBox>
              </GridCell>
            </Grid>
          ) }
        </Snippet>

        <Heading>Horizontal</Heading>
        <Snippet>
          { horizontalAlign.values.map((horizontalAlign) =>
            <Grid
                horizontalAlign={ horizontalAlign }
                key={ horizontalAlign }
                shrink={ true }>
              <GridCell snippetReplace={ true }>
                <DemoBox>{ horizontalAlign }</DemoBox>
              </GridCell>

              <GridCell snippetReplace={ true }>
                <DemoBox>{ horizontalAlign }</DemoBox>
              </GridCell>
            </Grid>
          ) }
        </Snippet>
      </Example>
    );
  }
}
