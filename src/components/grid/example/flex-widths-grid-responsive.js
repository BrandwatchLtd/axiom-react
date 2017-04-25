import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell, Heading } from 'bw-axiom';

export default class GridExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Grid: PropTypes.shape({
        fit: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
        full: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }

  render() {
    const { components } = this.props;
    const { Grid: { fit, full } } = components;

    return (
      <Example name="Flex widths (grid level responsive)">
        <Heading>Full width</Heading>
        <Snippet>
          { full.values.map((id) =>
            <Grid full={ id } key={ id }>
              <GridCell snippetReplace={ true }>
                <DemoBox>Full (> { id })</DemoBox>
              </GridCell>

              <GridCell snippetReplace={ true }>
                <DemoBox>Full (> { id })</DemoBox>
              </GridCell>
            </Grid>
          ) }
        </Snippet>

        <Heading>Fit (equal widths)</Heading>
        <Snippet>
          { fit.values.map((id) =>
            <Grid fit={ id } full={ true } key={ id }>
              <GridCell snippetReplace={ true }>
                <DemoBox>Fit (> { id })</DemoBox>
              </GridCell>

              <GridCell snippetReplace={ true }>
                <DemoBox>Fit (> { id })</DemoBox>
              </GridCell>
            </Grid>
          ) }
        </Snippet>
      </Example>
    );
  }
}
