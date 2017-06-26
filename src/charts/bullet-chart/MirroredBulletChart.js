import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import BulletChart from './BulletChart';
import ColumnChartXAxis from '../column-chart/ColumnChartXAxis';
import ColumnChartXAxisLabel from '../column-chart/ColumnChartXAxisLabel';
import './MirroredBulletChart.css';

export default class MirroredBulletChart extends Component {
  static propTypes = {
    chartKey: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      values: PropTypes.object.isRequired,
    })).isRequired,
    height: PropTypes.string.isRequired,
    label: PropTypes.node,
    labelColumnWidth: PropTypes.string,
    reflectionData: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      values: PropTypes.object.isRequired,
    })).isRequired,
    reflectionLabel: PropTypes.node.isRequired,
    showBarLabels: PropTypes.bool,
  };

  static defaultProps = {
    labelColumnWidth: '0rem',
  };

  render() {
    const {
      label,
      reflectionLabel,
      chartKey,
      data,
      height,
      labelColumnWidth,
      reflectionData,
      showBarLabels,
      ...rest
    } = this.props;

    return (
      <Base { ...rest }
          className="ax-mirrored-bullet-chart">
        <BulletChart
            chartKey={ chartKey }
            data={ data }
            direction="up"
            height={ height }
            label={ label }
            labelColumnWidth={ labelColumnWidth }
            showBarLabel={ showBarLabels }/>

        <ColumnChartXAxis labelColumnWidth={ labelColumnWidth }>
          { data.map(({ label }, index) =>
            <ColumnChartXAxisLabel key={ index }>
              { label }
            </ColumnChartXAxisLabel>
          ) }
        </ColumnChartXAxis>

        <BulletChart
            chartKey={ chartKey }
            data={ reflectionData }
            direction="down"
            height={ height }
            label={ reflectionLabel }
            labelColumnWidth={ labelColumnWidth }
            showBarLabel={ showBarLabels }/>
      </Base>
    );
  }
}
