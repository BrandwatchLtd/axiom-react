import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Heading, MirroredBulletChart, Weak } from 'bw-axiom';
import { data, chartKey } from './data';

export default class MirroredBulletChartExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      MirroredBulletChart: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      MirroredBulletChart: components.MirroredBulletChart,
    };

    const initialProps = {
      MirroredBulletChart: {
        chartKey: chartKey,
        data: data,
        height: '10rem',
        label: (
          <Heading style="display">
            <Weak>57%</Weak>
          </Heading>
        ),
        labelColumnWidth: '10rem',
        labelIndex: 0,
        reflectionData: data,
        reflectionLabel: (
          <Heading style="display">
            <Weak>67%</Weak>
          </Heading>
        ),
        showBarLabels: true,
      },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <MirroredBulletChart { ...initialProps.MirroredBulletChart }  />
      </ExampleConfig>
    );
  }
}
