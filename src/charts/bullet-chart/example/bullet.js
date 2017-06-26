import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import {
  BulletChart,
} from 'bw-axiom';
import { data, chartKey } from './data';

export default class BulletExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      BulletChart: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      BulletChart: components.BulletChart,
    };

    const initialProps = {
      BulletChart: {
        chartKey: chartKey,
        data: data,
        height: '20rem',
        labelIndex: 1,
        showBarLabel: true,
        showSubLabel: true,
        showXAxisLabels: true,
      },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <BulletChart { ...initialProps.BulletChart }  />
      </ExampleConfig>
    );
  }
}
