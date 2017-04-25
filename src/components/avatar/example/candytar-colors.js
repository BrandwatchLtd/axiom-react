import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Candytar, Grid, GridCell } from 'bw-axiom';

export default class AvatarExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Candytar: PropTypes.shape({
        color: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Candytar: { color } } = components;

    return (
      <Example name="Candytar colors">
        <Snippet>
          <Grid snippetIgnore={ true } verticalAlign="end">
            { color.values.map((color) =>
              <GridCell key={ color } shrink={ true } snippetIgnore={ true }>
                <Candytar color={ color } size="3rem" />
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
