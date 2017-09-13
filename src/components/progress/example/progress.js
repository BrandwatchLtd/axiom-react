import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Progress } from 'bw-axiom';

export default class ProgressExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Progress: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Progress: components.Progress,
    };

    const initialProps = {
      Progress: {
        percent: 33,
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Progress { ...initialProps.Progress } />
      </ExampleConfig>
    );
  }
}
