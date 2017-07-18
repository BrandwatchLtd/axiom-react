import PropTypes from 'prop-types';
import React, { Component, isValidElement } from 'react';
import { ChartKey, ChartKeyItem, DataPoints, DataPoint } from 'bw-axiom';
import ChartTable from '../chart-table/ChartTable';
import ChartTableAxisTitle from '../chart-table/ChartTableAxisTitle';
import ChartTableKey from '../chart-table/ChartTableKey';
import ChartTableLabel from '../chart-table/ChartTableLabel';
import ChartTableRow from '../chart-table/ChartTableRow';
import ChartTableRows from '../chart-table/ChartTableRows';
import ChartTableVisual from '../chart-table/ChartTableVisual';
import BarChartBars from './BarChartBars';
import BarChartBenchmarkLine from './BarChartBenchmarkLine';
import { formatData, getHighestValue } from './utils';
import '../vars.css';
import './BarChart.css';

export default class BarChart extends Component {
  static propTypes = {
    /**
     * Contextual component that appears when click on a dot.
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
    showKey: true,
    zoomMax: 50,
  };

  render() {
    const {
      axisTitle,
      chartKey,
      chartKeyBenchmarkLabel,
      collapsedVisibleRowCount,
      ContextComponent,
      data,
      expandButtonSuffix,
      labelColumnWidth,
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
                    ContextComponent={ ContextComponent }
                    benchmark={ benchmark }
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
