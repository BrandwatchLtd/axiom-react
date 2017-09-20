import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Toggle from '../Toggle';

class ToggleExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Toggle: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Toggle: components.Toggle,
    };

    const initialProps = {
      Toggle: {
        children: 'Toggle',
        toggled: true,
        onToggle: () => window.alert('Toggled changed!'),
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Toggle { ...initialProps.Toggle } />
      </ExampleConfig>
    );
  }
}

module.exports = [ ToggleExample ];
