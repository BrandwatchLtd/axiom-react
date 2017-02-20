import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, IconIndicator } from 'bw-axiom';

export default class IconIndicatorExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      IconIndicator: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { IconIndicator: { size } } = components;

    return (
      <Example name="IconIndicator sizes">
        <Snippet>
          <Grid shrink={ true } snippetIgnore={ true }>
            { size.values.map((size) =>
              <GridCell key={ size } snippetIgnore={ true }>
                <IconIndicator color="info" name="information" size={ size } />
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
