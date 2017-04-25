import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, IconButton } from 'bw-axiom';

export default class ButtonExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      IconButton: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { IconButton: { size } } = components;

    return (
      <Example name="Icon buttons">
        <Snippet>
          <Grid shrink={ true } snippetIgnore={ true }>
            { size.values.map((size) =>
              <GridCell key={ size } snippetIgnore={ true }>
                <IconButton name="ellipsis" size={ size } />
              </GridCell>
            ) }

            { size.values.map((size) =>
              <GridCell key={ `${size}d` } snippetIgnore={ true }>
                <IconButton disabled={ true } name="ellipsis" size={ size } />
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
