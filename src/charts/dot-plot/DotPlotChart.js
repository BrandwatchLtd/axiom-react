import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ChartKey, ChartKeyItem, DataPoint, DataPoints } from 'bw-axiom';
import ChartTable from '../chart-table/ChartTable';
import ChartTableAxisTitle from '../chart-table/ChartTableAxisTitle';
import ChartTableKey from '../chart-table/ChartTableKey';
import ChartTableLabel from '../chart-table/ChartTableLabel';
import ChartTableRow from '../chart-table/ChartTableRow';
import ChartTableRows from '../chart-table/ChartTableRows';
import ChartTableVisual from '../chart-table/ChartTableVisual';
import DotPlot from './DotPlot';
import DotPlotLine from './DotPlotLine';
import { formatData, getHighestValue } from './utils';
import './DotPlot.css';

export default class DotPlotChart extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
    axisTitle: PropTypes.string,
    chartKey: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
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
    showKey: PropTypes.bool,
    xAxisLabels: PropTypes.arrayOf(PropTypes.string),
    zoom: PropTypes.bool,
    zoomMax: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      mouseOverColors: [],
      mouseOverRowIndex: -1,
    };
  }

  static defaultProps = {
    showKey: true,
    zoomMax: 50,
  };

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
            xAxisLabels={ xAxisLabels }
            zoomTo={ zoomValue }>
          { formattedData.map(({ values, label }, index) =>
            <ChartTableRow key={ label }>
              <ChartTableLabel
                  textStrong={ index === mouseOverRowIndex }
                  width={ labelColumnWidth }>
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

        { axisTitle && (
          <ChartTableAxisTitle>
            { axisTitle }
          </ChartTableAxisTitle>
        ) }

        <ChartTableKey>
          { showKey && <ChartKey>
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
          </ChartKey> }
        </ChartTableKey>
      </ChartTable>
    );
  }
}
