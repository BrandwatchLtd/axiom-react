import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, ProgressFinite } from 'bw-axiom';

export default class ProgressExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ProgressFinite: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { ProgressFinite: { size } } = components;

    return (
      <Example name="ProgressFinite sizes">
        <Snippet>
          <Grid snippetIgnore={ true }>
            { size.values.map((size) =>
              <GridCell key={ size } shrink={ true } snippetIgnore={ true }>
                <ProgressFinite percent={ 62 } size={ size } />
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
