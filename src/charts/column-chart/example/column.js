import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { ColumnChart, Heading, Weak } from 'bw-axiom';
import ContextDemoComponent from './ContextDemoComponent';
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
        label: (
          <Heading style="display">
            <Weak>57%</Weak>
          </Heading>
        ),
        labelColumnWidth: '10rem',
      },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <ColumnChart { ...initialProps.ColumnChart }  />
      </ExampleConfig>
    );
  }
}
