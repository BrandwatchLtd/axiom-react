import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
import { formatData, flattenValues, hasMultipleValues } from './utils';
import './BarChart.css';

export default class BarChart extends Component {
  static propTypes = {
    /**
     * Contextual component that appears when hovering on a bar.
     * It is provided with the `label`, and `value` that has
     * been clicked on, along with the `data` that was given for that row.
     */
    BenchmarkTooltipContext: PropTypes.func,
    /**
     * Contextual component that appears when click on a dot.
     * It is provided with the `colors`, `label`, and `value` that has
     * been clicked on, along with the `data` that was given for that row.
     */
    DropdownContext: PropTypes.func,
    /**
     * Contextual component that appears when hovering on a bar.
     * It is provided with the `colors`, `label`, and `value` that has
     * been clicked on, along with the `data` that was given for that row.
     */
    TooltipContext: PropTypes.func,
    /** The title that appears along the xAxis */
    axisTitle: PropTypes.string,
    /** Control the appearance of the bar label */
    barLabel: PropTypes.func,
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
    /** If set to false the benachmark line will not fade out on hover */
    isBenchmarkLineFadable: PropTypes.bool,
    /** The width of the yAxis labels columns */
    labelColumnWidth: PropTypes.string.isRequired,
    /** Lower value of the data displayed on the chart */
    lower: PropTypes.number,
    /** Spacing applied between Bar groups */
    rowSpace: PropTypes.oneOf(['x1', 'x2', 'x3']),
    /** Option to always show the label next to bars, as opposed to on mouse over  */
    showBarLabel: PropTypes.bool,
    /**  Control the appearance of the bar */
    showDifferenceArea: PropTypes.bool,
    /** Control for toggling visibility of the key */
    showKey: PropTypes.bool,
    /** If set to true each color will be handled individually when hovering */
    singleSelect: PropTypes.bool,
    /** Thickness of the bars */
    size: PropTypes.string,
    /** Upper value of the data displayed on the chart */
    upper: PropTypes.number,
    /**
     * Method which returns the labels to be shown along the xAxis, also used to determine where grid lines are drawn
     */
    xAxisLabels: PropTypes.func,
    /** Control for toggling the zoomed view */
    zoom: PropTypes.bool,
    /** Options for the maximum zoom value */
    zoomMax: PropTypes.number,
  };

  static defaultProps = {
    isBenchmarkLineFadable: true,
    rowSpace: 'x2',
    showKey: true,
    showDifferenceArea: false,
    xAxisLabels: () => [],
  };


  constructor(props) {
    super(props);
    this.state = {
      selectedColor: null,
      selectedIndex: null,
    };
  }

  handleDropdonOpen(selectedIndex, selectedColor) {
    this.setState({
      isDropdownOpen: true,
      selectedColor,
      selectedIndex,
    });
  }

  handleDropdonClose() {
    this.setState({
      isDropdownOpen: false,
      selectedColor: null,
      selectedIndex: null,
    });
  }

  handleMouseEnter(selectedIndex, selectedColor) {
    this.setState({
      selectedColor,
      selectedIndex,
    });
  }

  handleMouseLeave() {
    this.setState(({ isDropdownOpen }) => isDropdownOpen ? {} : ({
      selectedColor: null,
      selectedIndex: null,
    }));
  }

  render() {
    const flatValues = flattenValues(this.props.data);

    const dataLower = Math.min(...flatValues);
    const dataUpper = Math.max(...flatValues);

    const {
      axisTitle,
      barLabel,
      chartKey,
      chartKeyBenchmarkLabel,
      collapsedVisibleRowCount,
      BenchmarkTooltipContext,
      DropdownContext,
      TooltipContext,
      data,
      expandButtonSuffix,
      isBenchmarkLineFadable,
      labelColumnWidth,
      lower = dataLower,
      rowSpace,
      showBarLabel,
      showKey,
      singleSelect,
      size,
      showDifferenceArea,
      upper = dataUpper,
      xAxisLabels,
      zoom,
      zoomMax,
      ...rest
    } = this.props;

    const { selectedColor, selectedIndex } = this.state;
    const formattedData = formatData(chartKey, data);
    const isMultipleValuesData = hasMultipleValues(data);

    const finalLower = Math.min(lower, dataLower);
    const finalUpper = Math.max(upper, dataUpper);
    const finalZoomMax = Math.max(dataUpper, Math.min(zoomMax !== undefined ? zoomMax : dataUpper, finalUpper));
    const zoomTo = ((finalZoomMax - finalLower) / (finalUpper - finalLower)) * 100;

    const finalXAxisLabels = xAxisLabels(finalLower, finalUpper);

    return (
      <ChartTable { ...rest } xAxisLabels={ finalXAxisLabels }>
        <ChartTableRows
            collapsedVisibleRowCount={ collapsedVisibleRowCount }
            expandButtonSuffix={ expandButtonSuffix }
            labelColumnWidth={ labelColumnWidth }
            lower={ dataUpper }
            space={ rowSpace }
            upper={ finalUpper }
            xAxisLabels={ finalXAxisLabels }
            zoom={ zoom }
            zoomTo={ zoom ? zoomTo : undefined }>
          { formattedData.map(({ values, label, benchmark }, index) =>
            <ChartTableRow
                hover={ index === selectedIndex }
                key={ index }>
              <ChartTableLabel
                  textStrong={ index === selectedIndex }
                  width={ labelColumnWidth }>
                { label }
              </ChartTableLabel>
              <ChartTableVisual>
                <BarChartBars
                    BenchmarkTooltipContext={ BenchmarkTooltipContext }
                    DropdownContext={ DropdownContext }
                    TooltipContext={ TooltipContext }
                    barLabel={ barLabel }
                    benchmark={ benchmark }
                    benchmarkHeight={ rowSpace }
                    data={ data[index] }
                    fadeBenchmarkLine={ isBenchmarkLineFadable && selectedIndex !== null }
                    hideBars={ isMultipleValuesData && selectedIndex !== null && selectedIndex !== index }
                    hoverColor={ selectedColor }
                    hoverIndex={ selectedIndex }
                    index={ index }
                    isHovered={ index === selectedIndex }
                    label={ label }
                    lower={ finalLower }
                    onDropdownClose={ () => this.handleDropdonClose() }
                    onDropdownOpen={ (color) => this.handleDropdonOpen(index, color) }
                    onMouseEnter={ (color) => this.handleMouseEnter(index, color) }
                    onMouseLeave={ () => this.handleMouseLeave() }
                    showBarLabel={ showBarLabel }
                    showDifferenceArea={ showDifferenceArea }
                    singleSelect={ singleSelect }
                    size={ size }
                    upper={ finalUpper }
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
