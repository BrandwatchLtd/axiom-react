import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Bars, ChartKey, ChartKeyItem, DataPoints, DataPoint } from 'bw-axiom';
import ChartTable from '../chart-table/ChartTable';
import ChartTableAxisTitle from '../chart-table/ChartTableAxisTitle';
import ChartTableKey from '../chart-table/ChartTableKey';
import ChartTableLabel from '../chart-table/ChartTableLabel';
import ChartTableRow from '../chart-table/ChartTableRow';
import ChartTableRows from '../chart-table/ChartTableRows';
import ChartTableVisual from '../chart-table/ChartTableVisual';
import BarChartContext from './BarChartContext';
import { formatData, getHighestValue } from './utils';

export default class BarChart extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
    axisTitle: PropTypes.string,
    chartKey: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    collapsedVisibleRowCount: PropTypes.number,
    /**
     * Where the values keys are brand colors and value is the percentage
     */
    data: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      values: PropTypes.object.isRequired,
    })).isRequired,
    expandButtonSuffix: PropTypes.string,
    labelColumnWidth: PropTypes.string.isRequired,
    showKey: PropTypes.bool,
    xAxisLabels: PropTypes.arrayOf(PropTypes.string),
    zoom: PropTypes.bool,
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
          { formattedData.map(({ values, label }, index) =>
            <ChartTableRow key={ label }>
              <ChartTableLabel
                  textStrong={ index === this.state.hoverIndex }
                  width={ labelColumnWidth }>
                { label }
              </ChartTableLabel>
              <ChartTableVisual>
                <Bars direction="right">
                  { values.map(({ color, value }) =>
                    <BarChartContext
                        ContextComponent={ ContextComponent }
                        color={ color }
                        data={ data[index] }
                        dataIndex={ index }
                        key={ color }
                        label={ label }
                        labelStrong={ index === this.state.hoverIndex }
                        onMouseEnter={ this.onMouseEnter }
                        onMouseLeave={ this.onMouseLeave }
                        showLabel={ color === this.state.hoverColor }
                        value={ value } />
                  ) }
                </Bars>
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
              { chartKey.map(({ label, color }) =>
                <ChartKeyItem key={ label } label={ label }>
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
