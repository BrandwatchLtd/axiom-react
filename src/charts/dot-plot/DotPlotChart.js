import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ChartKey,
  ChartKeyItem,
  ChartTable,
  ChartTableAxis,
  ChartTableGrid,
  ChartTableKey,
  ChartTableLabel,
  ChartTableRow,
  ChartTableRows,
  ChartTableVisual,
  DataPoint,
  DataPoints,
} from 'bw-axiom';
import DotPlot from './DotPlot';
import DotPlotLine from './DotPlotLine';

import './DotPlot.css';

export default class DotPlotChart extends Component {
  static propTypes = {
    axisTitle: PropTypes.string,
    chartKey: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.oneOf([
        'rose',
        'pink',
        'purple',
        'lilac',
        'blue',
        'teal',
        'green',
        'chartreuse',
        'amber',
        'orange',
        'brown',
        'grey',
      ]).isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    chartKeyLineLabel: PropTypes.string.isRequired,
    collapsedVisibleRowCount: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      values: PropTypes.object.isRequired,
    })).isRequired,
    expandButtonSuffix: PropTypes.string,
    labelColumnWidth: PropTypes.string.isRequired,
    xAxisLabels: PropTypes.arrayOf(PropTypes.string),
  };

  render() {
    const {
      axisTitle,
      chartKey,
      chartKeyLineLabel,
      collapsedVisibleRowCount,
      data,
      expandButtonSuffix,
      labelColumnWidth,
      xAxisLabels,
    } = this.props;

    const colorOrder = {};
    chartKey.forEach(({ color }, i) => colorOrder[color] = i);

    const formattedData = data.map(({ label, values }) => {
      const dotPlotData = Object.keys(values)
        .map(color => ({ color, value: values[color] }))
        .sort((a, b) => {
          const valueDifference = a.value - b.value;
          return valueDifference ? valueDifference : colorOrder[a.color] - colorOrder[b.color];
        });

      return { dotPlotData, label };
    });

    return (
      <ChartTable
          collapsedVisibleRowCount={ collapsedVisibleRowCount }
          expandButtonSuffix={ expandButtonSuffix }
          labelColumnWidth={ labelColumnWidth }>
        <ChartTableGrid>
          <ChartTableRows>
            { formattedData.map(({ dotPlotData, label }) =>
              <ChartTableRow key={ label }>
                <ChartTableLabel>{ label }</ChartTableLabel>
                <ChartTableVisual>
                  <DotPlot data={ dotPlotData } />
                </ChartTableVisual>
              </ChartTableRow>
            ) }
          </ChartTableRows>
        </ChartTableGrid>
        <ChartTableAxis labels={ xAxisLabels } title={ axisTitle } />
        <ChartTableKey>
          <ChartKey>
            { chartKey.map(({ label, color }) =>
              <ChartKeyItem key={ label } label={ label }>
                <DataPoints size="0.75rem">
                  <DataPoint color={ color } />
                </DataPoints>
              </ChartKeyItem>
            ) }
            <ChartKeyItem label={ chartKeyLineLabel }>
              <DotPlotLine width="0.75rem" />
            </ChartKeyItem>
          </ChartKey>
        </ChartTableKey>
      </ChartTable>
    );
  }
}
