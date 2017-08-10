import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { IconIndicator } from 'bw-axiom';

export default class IconExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      IconIndicator: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      IconIndicator: components.IconIndicator,
    };

    const initialProps = {
      IconIndicator: {
        name: 'annotate',
        size: 'medium',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <IconIndicator { ...initialProps.IconIndicator } />
      </ExampleConfig>
    );
  }
}
