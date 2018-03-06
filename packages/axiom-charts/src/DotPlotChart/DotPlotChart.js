import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChartKey from '../Chart/ChartKey';
import ChartKeyItem from '../Chart/ChartKeyItem';
import ChartTable from '../ChartTable/ChartTable';
import ChartTableAxisTitle from '../ChartTable/ChartTableAxisTitle';
import ChartTableKey from '../ChartTable/ChartTableKey';
import ChartTableLabel from '../ChartTable/ChartTableLabel';
import ChartTableRow from '../ChartTable/ChartTableRow';
import ChartTableRows from '../ChartTable/ChartTableRows';
import ChartTableVisual from '../ChartTable/ChartTableVisual';
import DataPoint from '../DataPoint/DataPoint';
import DataPoints from '../DataPoint/DataPoints';
import DotPlot from './DotPlot';
import DotPlotBenchmarkLine from './DotPlotBenchmarkLine';
import DotPlotDifferenceLine from './DotPlotDifferenceLine';
import { formatData, flattenValues } from './utils';
import './DotPlot.css';

export default class DotPlotChart extends Component {
  static propTypes = {
    /**
     * Contextual component that appears when clicking on a dot.
     * It is provided with the `colors`, `label`, and `value` that has
     * been clicked on, along with the `data` that was given for that row.
     */
    DropdownContext: PropTypes.func,
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
    /** Control the appearance of the value */
    dotPlotLabel: PropTypes.func,
    /** The description given to the expand button */
    expandButtonSuffix: PropTypes.string,
    /** The width of the yAxis labels columns */
    labelColumnWidth: PropTypes.string.isRequired,
    /** Lower value of the data displayed on the chart */
    lower: PropTypes.number,
    /** Control for toggling visibility of the key */
    showKey: PropTypes.bool,
    /** Upper value of the data displayed on the chart */
    upper: PropTypes.number,
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
    const flatValues = flattenValues(this.props.data);

    const dataLower = Math.min(...flatValues);
    const dataUpper = Math.max(...flatValues);

    const {
      axisTitle,
      chartKey,
      chartKeyBenchmarkLabel,
      chartKeyDifferenceLabel,
      collapsedVisibleRowCount,
      DropdownContext,
      data,
      dotPlotLabel,
      expandButtonSuffix,
      labelColumnWidth,
      lower = dataLower,
      showKey,
      upper = dataUpper,
      xAxisLabels,
      zoom,
      zoomMax,
      ...rest
    } = this.props;

    const { mouseOverColors, mouseOverRowIndex } = this.state;
    const formattedData = formatData(chartKey, data);

    const finalLower = Math.min(lower, dataLower);
    const finalUpper = Math.max(upper, dataUpper);
    const finalZoomMax = Math.max(dataUpper, Math.min(zoomMax !== undefined ? zoomMax : dataUpper, finalUpper));
    const zoomTo = ((finalZoomMax - finalLower) / (finalUpper - finalLower)) * 100;

    return (
      <ChartTable { ...rest } xAxisLabels={ xAxisLabels }>
        <ChartTableRows
            collapsedVisibleRowCount={ collapsedVisibleRowCount }
            expandButtonSuffix={ expandButtonSuffix }
            labelColumnWidth={ labelColumnWidth }
            space="x2"
            xAxisLabels={ xAxisLabels }
            zoomTo={ zoom ? zoomTo : undefined }>
          { formattedData.map(({ values, benchmark, label }, index) =>
            <ChartTableRow key={ label }>
              <ChartTableLabel
                  textStrong={ index === mouseOverRowIndex }
                  width={ labelColumnWidth }>
                { label }
              </ChartTableLabel>
              <ChartTableVisual>
                <DotPlot
                    DropdownContext={ DropdownContext }
                    benchmark={ benchmark }
                    data={ values }
                    dotPlotLabel={ dotPlotLabel }
                    label={ label }
                    lower={ finalLower }
                    mouseOverColors={ mouseOverColors }
                    mouseOverRowIndex={ mouseOverRowIndex }
                    onDotMouseEnter={ (colors) => this.handleDotMouseEnter(index, colors) }
                    onDotMouseLeave={ () => this.handleDotMouseLeave() }
                    rawData={ data[index] }
                    rowIndex={ index }
                    upper={ finalUpper } />
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
