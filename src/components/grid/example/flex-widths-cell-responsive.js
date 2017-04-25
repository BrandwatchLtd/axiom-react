import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell, Heading } from 'bw-axiom';

export default class GridExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      GridCell: PropTypes.shape({
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
    const { GridCell: { fit, full } } = components;

    return (
      <Example name="Flex sizing (cell level responsive)">
        <Heading>Full width</Heading>
        <Snippet>
          <Grid snippetIgnore={ true }>
            { full.values.map((id) =>
              <GridCell full={ id } key={ id }>
                <DemoBox snippetReplace={ true }>Full (> { id })</DemoBox>
              </GridCell>
            ) }
          </Grid>
        </Snippet>

        <Heading>Shrink (to contents)</Heading>
        <Snippet>
          <Grid snippetIgnore={ true }>
            { fit.values.map((id) =>
              <GridCell key={ id } shrink={ id }>
                <DemoBox snippetReplace={ true }>Shrink (> { id })</DemoBox>
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
