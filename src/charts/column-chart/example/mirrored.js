import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Heading from '../../../components/typography/Heading';
import MirroredColumnChart from '../MirroredColumnChart';
import ContextDemoComponent from './ContextDemoComponent';
import { data, chartKey } from './data';

export default class MirroredColumnChartExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      MirroredColumnChart: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      MirroredColumnChart: components.MirroredColumnChart,
    };

    const initialProps = {
      MirroredColumnChart: {
        ContextComponent: ContextDemoComponent,
        chartKey,
        data,
        height: '10rem',
        label: <Heading textSize="display2">57%</Heading>,
        labelColumnWidth: '10rem',
        reflectionData: data,
        reflectionLabel: <Heading textSize="display2">67%</Heading>,
      },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <MirroredColumnChart { ...initialProps.MirroredColumnChart } />
      </ExampleConfig>
    );
  }
}
