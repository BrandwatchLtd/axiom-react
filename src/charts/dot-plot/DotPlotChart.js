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
import { formatData } from './utils';
import './DotPlot.css';

export default class DotPlotChart extends Component {
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
    chartKeyLineLabel: PropTypes.string.isRequired,
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
      chartKeyLineLabel,
      collapsedVisibleRowCount,
      ContextComponent,
      data,
      expandButtonSuffix,
      labelColumnWidth,
      xAxisLabels,
    } = this.props;

    const { mouseOverColors, mouseOverRowIndex } = this.state;
    const gridCount = xAxisLabels && xAxisLabels.length;
    const responsive = !xAxisLabels || Boolean(xAxisLabels.length % 2);
    const formattedData = formatData(chartKey, data);

    return (
      <ChartTable
          collapsedVisibleRowCount={ collapsedVisibleRowCount }
          expandButtonSuffix={ expandButtonSuffix }
          labelColumnWidth={ labelColumnWidth }
          responsive={ responsive }>
        <ChartTableGrid count={ gridCount }>
          <ChartTableRows>
            { formattedData.map(({ values, label }, index) =>
              <ChartTableRow key={ label }>
                <ChartTableLabel
                    textStrong={ index === mouseOverRowIndex }>
                  { label }
                </ChartTableLabel>
                <ChartTableVisual>
                  <DotPlot
                      ContextComponent={ ContextComponent }
                      data={ values }
                      label={ label }
                      mouseOverColors={ mouseOverColors }
                      mouseOverRowIndex={ mouseOverRowIndex }
                      onDotMouseEnter={ (colors) => this.handleDotMouseEnter(index, colors) }
                      onDotMouseLeave={ () => this.handleDotMouseLeave() }
                      rawData={ data[index] }
                      rowIndex={ index }  />
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
            <ChartKeyItem label={ chartKeyLineLabel }>
              <DotPlotLine width="1rem" />
            </ChartKeyItem>
          </ChartKey>
        </ChartTableKey>
      </ChartTable>
    );
  }
}
