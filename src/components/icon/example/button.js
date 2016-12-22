import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, IconButton, Icon } from 'bw-axiom';

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
              <GridCell key={ size }>
                <IconButton size={ size }>
                  <Icon name="ellipsis" />
                </IconButton>
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
