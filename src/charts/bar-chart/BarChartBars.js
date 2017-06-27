import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Bars } from 'bw-axiom';
import BarChartContext from './BarChartContext';
import BarChartBenchmarkLine from './BarChartBenchmarkLine';

export default class BarChartBars extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
    benchmark: PropTypes.number,
    data: PropTypes.object.isRequired,
    hoverColor: PropTypes.string,
    label: PropTypes.node.isRequired,
    labelStrong: PropTypes.bool.isRequired,
    showBarLabel: PropTypes.bool,
    size: PropTypes.string,
    values: PropTypes.array.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
  };

  render() {
    const {
      ContextComponent,
      benchmark,
      data,
      hoverColor,
      label,
      labelStrong,
      showBarLabel,
      size,
      values,
      onMouseEnter,
      onMouseLeave,
    } = this.props;

    return (
      <div className="ax-bar-chart__bars">
        <Bars direction="right">
          { values.map(({ color, value }) =>
            <BarChartContext
                ContextComponent={ ContextComponent }
                color={ color }
                data={ data }
                key={ color }
                label={ label }
                labelStrong={ labelStrong }
                onMouseEnter={ onMouseEnter }
                onMouseLeave={ onMouseLeave }
                showBarLabel={ showBarLabel || color === hoverColor }
                size={ size }
                value={ value } />
          ) }
        </Bars>

        { benchmark !== undefined && (
          <div className="ax-bar-chart__benchmark-line-container">
            <BarChartBenchmarkLine value={ benchmark } />
          </div>
        ) }
      </div>
    );
  }
}
