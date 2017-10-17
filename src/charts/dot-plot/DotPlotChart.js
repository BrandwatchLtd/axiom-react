import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChartKey from '../chart-key/ChartKey';
import ChartKeyItem from '../chart-key/ChartKeyItem';
import ChartTable from '../chart-table/ChartTable';
import ChartTableAxisTitle from '../chart-table/ChartTableAxisTitle';
import ChartTableKey from '../chart-table/ChartTableKey';
import ChartTableLabel from '../chart-table/ChartTableLabel';
import ChartTableRow from '../chart-table/ChartTableRow';
import ChartTableRows from '../chart-table/ChartTableRows';
import ChartTableVisual from '../chart-table/ChartTableVisual';
import DataPoint from '../data-point/DataPoint';
import DataPoints from '../data-point/DataPoints';
import DotPlot from './DotPlot';
import DotPlotBenchmarkLine from './DotPlotBenchmarkLine';
import DotPlotDifferenceLine from './DotPlotDifferenceLine';
import { formatData, getHighestValue } from './utils';
import './DotPlot.css';

export default class DotPlotChart extends Component {
  static propTypes = {
    /**
     * Contextual component that appears when clicking on a dot.
     * It is provided with the `colors`, `label`, and `value` that has
     * been clicked on, along with the `data` that was given for that row.
     */
    ContextComponent: PropTypes.func,
    /** The title that appears along the xAxis */
    axisTitle: PropTypes.string,
    /**
     * The key that is shown along the bottom of the axis. It is also used
     * to determine the order of stacked dots.
     */
    chartKey: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    /** The description displayed for the benchmarking line in the key */
    chartKeyBenchmarkLabel: PropTypes.string,
    /** The description displayed for the difference line in the key */
    chartKeyDifferenceLabel: PropTypes.string,
    /** The number of rows to be visible when collapsed */
    collapsedVisibleRowCount: PropTypes.number,
    /**
     * The data used to render the dots. The `label` is used for the yAxis
     * and `values` for dots
     */
    data: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      values: PropTypes.object.isRequired,
    })).isRequired,
    /** The description given to the expand button */
    expandButtonSuffix: PropTypes.string,
    /** The width of the yAxis labels columns */
    labelColumnWidth: PropTypes.string.isRequired,
    /** Control for toggling visibility of the key */
    showKey: PropTypes.bool,
    /**
     * Labels to be shown along the xAxis, also used to determine where
     * grid lines are drawn
     */
    xAxisLabels: PropTypes.arrayOf(PropTypes.string),
    /** Control for toggling the zoomed view */
    zoom: PropTypes.bool,
    /** Options for the maximum zoom value */
    zoomMax: PropTypes.number,
  };

  static defaultProps = {
    showKey: true,
    zoomMax: 50,
  };

  constructor(props) {
    super(props);
    this.state = {
      mouseOverColors: [],
      mouseOverRowIndex: -1,
    };
  }

  handleDotMouseEnter(rowIndex, colors) {
    this.setState({
      mouseOverColors: colors,
      mouseOverRowIndex: rowIndex,
    });
  }

  handleDotMouseLeave() {
    this.setState({
      mouseOverColors: [],
      mouseOverRowIndex: -1,
    });
  }

  render() {
    const {
      axisTitle,
      chartKey,
      chartKeyBenchmarkLabel,
      chartKeyDifferenceLabel,
      collapsedVisibleRowCount,
      ContextComponent,
      data,
      expandButtonSuffix,
      labelColumnWidth,
      showKey,
      xAxisLabels,
      zoom,
      zoomMax,
      ...rest
    } = this.props;

    const { mouseOverColors, mouseOverRowIndex } = this.state;
    const formattedData = formatData(chartKey, data);
    const highestValue = getHighestValue(data);
    const zoomValue = zoom
      ? Math.max(zoomMax, Math.min(100, Math.ceil(highestValue / 10) * 10))
      : 100;

    return (
      <ChartTable { ...rest } xAxisLabels={ xAxisLabels }>
        <ChartTableRows
            collapsedVisibleRowCount={ collapsedVisibleRowCount }
            expandButtonSuffix={ expandButtonSuffix }
            labelColumnWidth={ labelColumnWidth }
            space="x2"
            xAxisLabels={ xAxisLabels }
            zoomTo={ zoomValue }>
          { formattedData.map(({ values, benchmark, label }, index) =>
            <ChartTableRow key={ label }>
              <ChartTableLabel
                  textStrong={ index === mouseOverRowIndex }
                  width={ labelColumnWidth }>
                { label }
              </ChartTableLabel>
              <ChartTableVisual>
                <DotPlot
                    ContextComponent={ ContextComponent }
                    benchmark={ benchmark }
                    data={ values }
                    label={ label }
                    mouseOverColors={ mouseOverColors }
                    mouseOverRowIndex={ mouseOverRowIndex }
                    onDotMouseEnter={ (colors) => this.handleDotMouseEnter(index, colors) }
                    onDotMouseLeave={ () => this.handleDotMouseLeave() }
                    rawData={ data[index] }
                    rowIndex={ index } />
              </ChartTableVisual>
            </ChartTableRow>
          ) }
        </ChartTableRows>

        { axisTitle && (
          <ChartTableAxisTitle>
            { axisTitle }
          </ChartTableAxisTitle>
        ) }

        { showKey && (
          <ChartTableKey>
            <ChartKey>
              { chartKeyBenchmarkLabel && (
                <ChartKeyItem label={ chartKeyBenchmarkLabel }>
                  <DotPlotBenchmarkLine height="1rem" width="0.75rem" />
                </ChartKeyItem>
              ) }

              { chartKey.map(({ label, color }) =>
                <ChartKeyItem key={ `${label}.${color}` } label={ label }>
                  <DataPoints size="0.75rem">
                    <DataPoint color={ color } />
                  </DataPoints>
                </ChartKeyItem>
              ) }

              { chartKeyDifferenceLabel && (
                <ChartKeyItem label={ chartKeyDifferenceLabel }>
                  <DotPlotDifferenceLine width="1rem" />
                </ChartKeyItem>
              ) }
            </ChartKey>
          </ChartTableKey>
        ) }
      </ChartTable>
    );
  }
}
