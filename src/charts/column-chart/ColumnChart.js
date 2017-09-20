import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BarChartContext from '../bar-chart/BarChartContext';
import Bars from '../bars/Bars';
import Base from '../../components/base/Base';
import ColumnChartBars from './ColumnChartBars';
import ColumnChartRow  from './ColumnChartRow';
import ColumnChartVisual from './ColumnChartVisual';
import ColumnChartXAxis  from './ColumnChartXAxis';
import ColumnChartXAxisLabel  from './ColumnChartXAxisLabel';
import ColumnChartYAxis from './ColumnChartYAxis';
import { formatData } from './utils';
import './ColumnChart.css';

export default class ColumnChart extends Component {
  static propTypes = {
    /**
     * Contextual component that appears when clicking on a bar.
     * It is provided with the `color`, `label`, and `value` that has
     * been clicked on, along with the `data` that was given for that row.
     */
    ContextComponent: PropTypes.func,
    /**
     * The key that is shown along the bottom of the axis. It is also used
     * to determine the order of bars.
     */
    chartKey: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    /**
     * The data used to render the bars along the top. The `label` is used for
     * the xAxis and `values` for bars
     */
    data: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      values: PropTypes.object.isRequired,
    })).isRequired,
    /** Direction the bars point */
    direction: PropTypes.oneOf(['up', 'down']),
    /** Overall height of the individual column charts */
    height: PropTypes.string.isRequired,
    /** Label to show on the top yAxis row */
    label: PropTypes.node,
    /** The width of the yAxis labels columns */
    labelColumnWidth: PropTypes.string,
    /** Control for showing the percentage labels above the Bars */
    showBarLabel: PropTypes.bool,
    /** Control for showing the labels below the Bars */
    showSubLabel: PropTypes.bool,
    /** Control for showing the xAxis labels */
    showXAxisLabels: PropTypes.bool,
  };

  static defaultProps = {
    labelColumnWidth: '0rem',
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

  getLabelAlignment() {
    return this.props.direction === 'down' ? 'top' : 'bottom';
  }

  render() {
    const {
      chartKey,
      ContextComponent,
      data,
      direction,
      height,
      label,
      labelColumnWidth,
      showBarLabel,
      showSubLabel,
      showXAxisLabels,
      ...rest
    } = this.props;

    const formattedData = formatData(chartKey, data);

    return (
      <Base { ...rest }
          className="ax-column-chart"
          style={ { height } }>
        <ColumnChartRow>
          { label &&
          <ColumnChartYAxis align={ this.getLabelAlignment() } yAxisWidth={ labelColumnWidth }>
            { label }
          </ColumnChartYAxis>
          }
          <ColumnChartVisual>
            { formattedData.map(({ values, label, subLabel }, index) =>
              <ColumnChartBars key={ index }>
                <Bars direction={ direction } label={ showSubLabel && subLabel }>
                  { values.map(({ color, value }) =>
                    <BarChartContext
                        ContextComponent={ ContextComponent }
                        color={ color }
                        data={ data[index] }
                        key={ color }
                        label={ label }
                        labelStrong={ index === this.state.hoverIndex }
                        onMouseEnter={ showBarLabel ? undefined :
                          () => this.onMouseEnter(index, color) }
                        onMouseLeave={ showBarLabel ? undefined : this.onMouseEnter }
                        showBarLabel={ showBarLabel || color === this.state.hoverColor }
                        value={ value }/>
                  ) }
                </Bars>
              </ColumnChartBars>
            ) }
          </ColumnChartVisual>
        </ColumnChartRow>
        { showXAxisLabels && <ColumnChartXAxis labelColumnWidth={ labelColumnWidth }>
          { formattedData.map(({ label }, index) =>
            <ColumnChartXAxisLabel key={ index }>
              { label }
            </ColumnChartXAxisLabel>
          ) }
        </ColumnChartXAxis> }
      </Base>
    );
  }
}
