import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from '@brandwatch/axiom-components';
import BulletChart from './BulletChart';
import ColumnChartXAxis from '../ColumnChart/ColumnChartXAxis';
import ColumnChartXAxisLabel from '../ColumnChart/ColumnChartXAxisLabel';
import './MirroredBulletChart.css';

export default class MirroredBulletChart extends Component {
  static propTypes = {
    /** A key for the chart */
    chartKey: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    /** The data to build the top half of the chart */
    data: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        values: PropTypes.object.isRequired,
      })
    ).isRequired,
    /** Controls the height of the chart */
    height: PropTypes.string.isRequired,
    /** Chart y-axis label */
    label: PropTypes.node,
    /** The offset value of the y-axis labels */
    labelColumnWidth: PropTypes.string,
    /** Controls which data set's bar label shows */
    labelIndex: PropTypes.number,
    /** The data to build the bottom half of the chart */
    reflectionData: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        values: PropTypes.object.isRequired,
      })
    ).isRequired,
    /** Chart y-axis label */
    reflectionLabel: PropTypes.node.isRequired,
    /** Visibility control of the x-Axis label */
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
      labelIndex,
      reflectionData,
      showBarLabels,
      ...rest
    } = this.props;

    return (
      <Base {...rest} className="ax-mirrored-bullet-chart">
        <BulletChart
          chartKey={chartKey}
          data={data}
          direction="up"
          height={height}
          label={label}
          labelColumnWidth={labelColumnWidth}
          labelIndex={labelIndex}
          showBarLabel={showBarLabels}
        />

        <ColumnChartXAxis labelColumnWidth={labelColumnWidth}>
          {data.map(({ label }, index) => (
            <ColumnChartXAxisLabel key={index}>{label}</ColumnChartXAxisLabel>
          ))}
        </ColumnChartXAxis>

        <BulletChart
          chartKey={chartKey}
          data={reflectionData}
          direction="down"
          height={height}
          label={reflectionLabel}
          labelColumnWidth={labelColumnWidth}
          labelIndex={labelIndex}
          showBarLabel={showBarLabels}
        />
      </Base>
    );
  }
}
