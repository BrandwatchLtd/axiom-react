import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AlertBar from '../AlertBar';
import { ExampleConfig } from 'style-guide';

class AlertBarExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      AlertBar: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      AlertBar: components.AlertBar,
    };

    const initialProps = {
      AlertBar: {
        onRemoveClick: () => {},
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <AlertBar { ...initialProps.AlertBar }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
          accumsan quam, ut ullamcorper nulla.
        </AlertBar>
      </ExampleConfig>
    );
  }
}


export default [
  AlertBarExample,
];
