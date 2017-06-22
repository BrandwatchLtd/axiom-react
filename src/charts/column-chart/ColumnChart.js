import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import Bars from '../bars/Bars';
import BarChartContext from '../bar-chart/BarChartContext';
import ColumnChartRow  from './ColumnChartRow';
import ColumnChartXAxis  from './ColumnChartXAxis';
import ColumnChartXAxisLabel  from './ColumnChartXAxisLabel';
import ColumnChartVisual from './ColumnChartVisual';
import ColumnChartBars from './ColumnChartBars';
import ColumnChartYAxis from './ColumnChartYAxis';
import { formatData } from './utils';
import './ColumnChart.css';

export default class ColumnChart extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
    chartKey: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      values: PropTypes.object.isRequired,
    })).isRequired,
    direction: PropTypes.string,
    height: PropTypes.string.isRequired,
    label: PropTypes.node,
    labelColumnWidth: PropTypes.string,
    showBarLabel: PropTypes.bool,
    showSubLabel: PropTypes.bool,
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
