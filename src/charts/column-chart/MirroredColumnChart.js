import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import ColumnChart from './ColumnChart';
import ColumnChartXAxis from './ColumnChartXAxis';
import ColumnChartXAxisLabel from './ColumnChartXAxisLabel';
import './MirroredColumnChart.css';

export default class MirroredColumnChart extends Component {
  static propTypes = {
    /**
     * Contextual component that appears when clicking on a bar.
     * It is provided with the `color`, `label`, and `value` that has
     * been clicked on, along with the `data` that was given for that row.
     */
    ContextComponent: PropTypes.func,
    /**
     * The key that is shown along the bottom of the axis. It is also used
     * to determine the order of bars.
     */
    chartKey: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    /**
     * The data used to render the bars along the top. The `label` is used for
     * the xAxis and `values` for bars
     */
    data: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      values: PropTypes.object.isRequired,
    })).isRequired,
    /** Overall height of the individual column charts */
    height: PropTypes.string.isRequired,
    /** Label to show on the top yAxis row */
    label: PropTypes.node,
    /** The width of the yAxis labels columns */
    labelColumnWidth: PropTypes.string,
    /**
     * The data used to render the bars along the bottom. The `label` is used for
     * the xAxis and `values` for bars
     */
    reflectionData: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      values: PropTypes.object.isRequired,
    })).isRequired,
    /** Label to show on the bottom yAxis row */
    reflectionLabel: PropTypes.node.isRequired,
    /** Control for showing the percentage labels above the Bars */
    showBarLabel: PropTypes.bool,
    /** Control for showing the labels below the Bars */
    showSubLabel: PropTypes.bool,
    /** Control for showing the xAxis labels */
    showXAxisLabels: PropTypes.bool,
  };

  static defaultProps = {
    labelColumnWidth: '0rem',
    showXAxisLabels: true,
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
      showBarLabel,
      showSubLabel,
      showXAxisLabels,
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
            labelColumnWidth={ labelColumnWidth }
            showBarLabel={ showBarLabel }
            showSubLabel={ showSubLabel }
            showXAxisLabels={ false } />

        { showXAxisLabels && (
          <ColumnChartXAxis labelColumnWidth={ labelColumnWidth }>
            { data.map(({ label }, index) =>
              <ColumnChartXAxisLabel key={ index }>
                { label }
              </ColumnChartXAxisLabel>
            ) }
          </ColumnChartXAxis>
        ) }

        <ColumnChart
            ContextComponent={ ContextComponent }
            chartKey={ chartKey }
            data={ reflectionData }
            direction="down"
            height={ height }
            label={ reflectionLabel }
            labelColumnWidth={ labelColumnWidth }
            showBarLabel={ showBarLabel }
            showSubLabel={ showSubLabel }
            showXAxisLabels={ false } />
      </Base>
    );
  }
}
