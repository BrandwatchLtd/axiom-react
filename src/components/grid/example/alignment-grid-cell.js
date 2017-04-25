import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell, Heading } from 'bw-axiom';

export default class GridExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      GridCell: PropTypes.shape({
        verticalAlign: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }

  render() {
    const { components } = this.props;
    const { GridCell: { verticalAlign } } = components;

    return (
      <Example name="Grid Cell alignment controlled by Grid Cell">
        <Heading>Vertical</Heading>
        <Snippet>
          <Grid snippetIgnore={ true } style={ { minHeight: 180 } }>
            { verticalAlign.values.map((verticalAlign) =>
              <GridCell key={ verticalAlign } verticalAlign={ verticalAlign }>
                <DemoBox snippetReplace={ true }>{ verticalAlign }</DemoBox>
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
