import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Alert from '../Alert';
import { ExampleConfig } from 'style-guide';

class AlertExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Alert: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Alert: components.Alert,
    };

    const initialProps = {
      Alert: {
        onRemoveClick: () => {},
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Alert { ...initialProps.Alert }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
          accumsan quam, ut ullamcorper nulla.
        </Alert>
      </ExampleConfig>
    );
  }
}


export default [
  AlertExample,
];
