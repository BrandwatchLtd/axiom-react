import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { ChartHeading } from 'bw-axiom';

class ChartHeadingExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ChartHeading: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      ChartHeading: components.ChartHeading,
    };

    return (
      <ExampleConfig propTypes={ propTypes }>
        <ChartHeading>
          Chart Heading
        </ChartHeading>
      </ExampleConfig>
    );
  }
}

module.exports = [
  ChartHeadingExample,
];
