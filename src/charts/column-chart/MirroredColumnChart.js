import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import ColumnChart from './ColumnChart';
import ColumnChartXAxis from './ColumnChartXAxis';
import ColumnChartXAxisLabel from './ColumnChartXAxisLabel';
import './MirroredColumnChart.css';

export default class MirroredColumnChart extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
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
    showLabel: PropTypes.bool,
  };

  static defaultProps = {
    labelColumnWidth: '0rem',
  };

  render() {
    const {
      ContextComponent,
      label,
      reflectionLabel,
      chartKey,
      data,
      height,
      labelColumnWidth,
      reflectionData,
      ...rest
    } = this.props;

    return (
      <Base { ...rest }
          className="ax-mirrored-column-chart">
        <ColumnChart
            ContextComponent={ ContextComponent }
            chartKey={ chartKey }
            data={ data }
            direction="up"
            height={ height }
            label={ label }
            labelColumnWidth={ labelColumnWidth }/>

        <ColumnChartXAxis labelColumnWidth={ labelColumnWidth }>
          { data.map(({ label }, index) =>
            <ColumnChartXAxisLabel key={ index }>
              { label }
            </ColumnChartXAxisLabel>
          ) }
        </ColumnChartXAxis>

        <ColumnChart
            ContextComponent={ ContextComponent }
            chartKey={ chartKey }
            data={ reflectionData }
            direction="down"
            height={ height }
            label={ reflectionLabel }
            labelColumnWidth={ labelColumnWidth }/>
      </Base>
    );
  }
}
