import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, ProgressInfinite } from 'bw-axiom';

export default class ProgressExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ProgressInfinite: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { ProgressInfinite: { size } } = components;

    return (
      <Example name="ProgressInfinite sizes">
        <Snippet>
          <Grid snippetIgnore={ true }>
            { size.values.map((size) =>
              <GridCell key={ size } shrink={ true } snippetIgnore={ true }>
                <ProgressInfinite size={ size } />
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
