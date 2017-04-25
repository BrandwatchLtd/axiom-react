import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Alert, Strong } from 'bw-axiom';

export default class AlertExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Alert: PropTypes.shape({
        color: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Alert: { color } } = components;

    return (
      <Example name="Colored Alerts">
        <Snippet>
          { color.values.map((color) =>
            <Alert color={ color } key={ color }>
              <Strong snippetIgnore={ true } textCase="capital">{ color }</Strong>: Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nam ac accumsan quam,
              ut ullamcorper nulla.
            </Alert>
          ) }
        </Snippet>
      </Example>
    );
  }
}
