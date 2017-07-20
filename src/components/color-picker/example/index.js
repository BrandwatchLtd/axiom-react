import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { ColorPicker } from 'bw-axiom';

class ColorPickerExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ColorPicker: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      ColorPicker: components.ColorPicker,
    };

    const initialProps = {
      ColorPicker: {
        onOpen: () => window.alert('Opened!'),
        onSelectColor: (color) => window.alert(`Selected ${color}!`),
      },
    };

    const initialPropOptions = {
      ColorPicker: {
        onOpen: {
          included: false,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <ColorPicker { ...initialProps.ColorPicker } />
      </ExampleConfig>
    );
  }
}

module.exports = [ ColorPickerExample ];
