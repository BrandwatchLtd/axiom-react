import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import AlertIcon from '../AlertIcon';

class AlertIconExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      AlertIcon: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      AlertIcon: components.AlertIcon,
    };

    const initialProps = {
      AlertIcon: {
        size: 'medium',
        type: 'info',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <AlertIcon { ...initialProps.AlertIcon } />
      </ExampleConfig>
    );
  }
}

export default [ AlertIconExample ];
