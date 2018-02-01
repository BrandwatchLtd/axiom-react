import PropTypes from 'prop-types';
import React, { Component, isValidElement } from 'react';
import BarChartBars from './BarChartBars';
import BarChartBenchmarkLine from './BarChartBenchmarkLine';
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
import { formatData, getHighestValue } from './utils';
import './BarChart.css';

export default class BarChart extends Component {
  static propTypes = {
    /**
     * Contextual component that appears when click on a dot.
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
    /** Spacing applied between Bar groups */
    rowSpace: PropTypes.oneOf(['x1', 'x2', 'x3']),
    /** Option to always show the label next to bars, as opposed to on mouse over  */
    showBarLabel: PropTypes.bool,
    /** Control for toggling visibility of the key */
    showKey: PropTypes.bool,
    /** Thickness of the bars */
    size: PropTypes.string,
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

  constructor(props) {
    super(props);
    this.state = {
      hoverColor: null,
      hoverIndex: null,
    };
    this.onMouseEnter = (hoverIndex, hoverColor) => this.setState({ hoverColor, hoverIndex });
    this.onMouseLeave = () => this.setState({ hoverColor: null, hoverIndex: null });
  }

  static defaultProps = {
    rowSpace: 'x2',
    showKey: true,
    zoomMax: 50,
  };

  render() {
    const {
      axisTitle,
      chartKey,
      chartKeyBenchmarkLabel,
      collapsedVisibleRowCount,
      DropdownContext,
      data,
      expandButtonSuffix,
      labelColumnWidth,
      rowSpace,
      showBarLabel,
      showKey,
      size,
      xAxisLabels,
      zoom,
      zoomMax,
      ...rest
    } = this.props;

    const { hoverColor, hoverIndex } = this.state;
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
            space={ rowSpace }
            xAxisLabels={ xAxisLabels }
            zoomTo={ zoomValue }>
          { formattedData.map(({ values, label, benchmark }, index) =>
            <ChartTableRow key={ isValidElement(label) ? index : label }>
              <ChartTableLabel
                  textStrong={ index === hoverIndex }
                  width={ labelColumnWidth }>
                { label }
              </ChartTableLabel>
              <ChartTableVisual>
                <BarChartBars
                    DropdownContext={ DropdownContext }
                    benchmark={ benchmark }
                    benchmarkHeight={ rowSpace }
                    data={ data[index] }
                    fadeBenchmarkLine={ hoverIndex !== null }
                    hideBars={ hoverIndex !== null && hoverIndex !== index }
                    hoverColor={ hoverColor }
                    isHovered={ index === hoverIndex }
                    label={ label }
                    onMouseEnter={ (color) => this.onMouseEnter(index, color) }
                    onMouseLeave={ this.onMouseLeave }
                    showBarLabel={ showBarLabel }
                    size={ size }
                    values={ values } />
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
                  <BarChartBenchmarkLine height="1rem" width="0.75rem" />
                </ChartKeyItem>
              ) }

              { chartKey.map(({ label, color }) =>
                <ChartKeyItem key={ `${label}.${color}` } label={ label }>
                  <DataPoints size="0.75rem">
                    <DataPoint color={ color } />
                  </DataPoints>
                </ChartKeyItem>
              ) }
            </ChartKey>
          </ChartTableKey>
        ) }
      </ChartTable>
    );
  }
}
