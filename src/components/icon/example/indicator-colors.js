import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, IconIndicator } from 'bw-axiom';

export default class IconIndicatorExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      IconIndicator: PropTypes.shape({
        color: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { IconIndicator: { color } } = components;
    const iconMap = {
      info: 'information',
      warning: 'warning',
      error: 'warning',
      success: 'tick',
      subtle: 'tick',
    };

    return (
      <Example name="IconIndicator colors">
        <Snippet>
          <Grid shrink={ true } snippetIgnore={ true }>
            { color.values.map((color) =>
              <GridCell key={ color } snippetIgnore={ true }>
                <IconIndicator color={ color } name={ iconMap[color] } />
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
