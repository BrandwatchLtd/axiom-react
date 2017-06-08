import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Bars, ChartKey, ChartKeyItem, DataPoints, DataPoint } from 'bw-axiom';
import ChartTable from '../chart-table/ChartTable';
import ChartTableAxis from '../chart-table/ChartTableAxis';
import ChartTableGrid from '../chart-table/ChartTableGrid';
import ChartTableKey from '../chart-table/ChartTableKey';
import ChartTableLabel from '../chart-table/ChartTableLabel';
import ChartTableRow from '../chart-table/ChartTableRow';
import ChartTableRows from '../chart-table/ChartTableRows';
import ChartTableVisual from '../chart-table/ChartTableVisual';
import BarChartContext from './BarChartContext';
import { formatData } from './utils';

export default class BarChart extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
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
    xAxisLabels: PropTypes.arrayOf(PropTypes.string),
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
      xAxisLabels,
      ...rest
    } = this.props;

    const gridCount = xAxisLabels && xAxisLabels.length;
    const responsive = !xAxisLabels || Boolean(xAxisLabels.length % 2);
    const formattedData = formatData(chartKey, data);

    return (
      <ChartTable { ...rest }
          collapsedVisibleRowCount={ collapsedVisibleRowCount }
          expandButtonSuffix={ expandButtonSuffix }
          labelColumnWidth={ labelColumnWidth }
          responsive={ responsive }>
        <ChartTableGrid count={ gridCount }>
          <ChartTableRows>
            { formattedData.map(({ values, label }, index) =>
              <ChartTableRow key={ label }>
                <ChartTableLabel>{ label }</ChartTableLabel>
                <ChartTableVisual>
                  <Bars direction="right">
                    { values.map(({ color, value }) =>
                      <BarChartContext
                          ContextComponent={ ContextComponent }
                          color={ color }
                          data={ data[index] }
                          label={ label }
                          value={ value } />
                    ) }
                  </Bars>
                </ChartTableVisual>
              </ChartTableRow>
            ) }
          </ChartTableRows>
        </ChartTableGrid>
        <ChartTableAxis
            labels={ xAxisLabels }
            title={ axisTitle } />
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
      </ChartTable>
    );
  }
}
