import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import ColumnChart from '../ColumnChart';
import ContextDemoComponent from './ContextDemoComponent';
import Heading from '../../../components/typography/Heading';
import { data, chartKey } from './data';

export default class ColumnExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ColumnChart: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      ColumnChart: components.ColumnChart,
    };

    const initialProps = {
      ColumnChart: {
        ContextComponent: ContextDemoComponent,
        chartKey,
        data,
        height: '20rem',
        label: <Heading textSize="display2">57%</Heading>,
        labelColumnWidth: '10rem',
      },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <ColumnChart { ...initialProps.ColumnChart } />
      </ExampleConfig>
    );
  }
}
