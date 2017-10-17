import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Heading from '../../../components/typography/Heading';
import MirroredBulletChart from '../MirroredBulletChart';
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
        chartKey,
        data,
        height: '10rem',
        label: <Heading textSize="display2">57%</Heading>,
        labelColumnWidth: '10rem',
        labelIndex: 0,
        reflectionData: data,
        reflectionLabel: <Heading textSize="display2">67%</Heading>,
        showBarLabels: true,
      },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <MirroredBulletChart { ...initialProps.MirroredBulletChart } />
      </ExampleConfig>
    );
  }
}
