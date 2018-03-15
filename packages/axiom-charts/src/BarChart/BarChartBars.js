import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import atIds from '@brandwatch/axiom-automation-testing/ids';
import Bar from '../Bar/Bar';
import Bars from '../Bar/Bars';
import BarChartBenchmarkLine from './BarChartBenchmarkLine';
import ChartContext from '../ChartContext/ChartContext';

export default class BarChartBars extends Component {
  static propTypes = {
    DropdownContext: PropTypes.func,
    barLabel: PropTypes.func,
    benchmark: PropTypes.number,
    benchmarkHeight: PropTypes.oneOf(['x1', 'x2', 'x3']),
    data: PropTypes.object.isRequired,
    fadeBenchmarkLine: PropTypes.bool.isRequired,
    hideBars: PropTypes.bool.isRequired,
    hoverColor: PropTypes.string,
    isHovered: PropTypes.bool.isRequired,
    label: PropTypes.node.isRequired,
    lower: PropTypes.number,
    onDropdownClose: PropTypes.func.isRequired,
    onDropdownOpen: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    showBarLabel: PropTypes.bool,
    size: PropTypes.string,
    upper: PropTypes.number,
    values: PropTypes.array.isRequired,
  };

  render() {
    const {
      DropdownContext,
      barLabel,
      benchmark,
      benchmarkHeight,
      data,
      fadeBenchmarkLine,
      hideBars,
      hoverColor,
      isHovered,
      label,
      lower,
      showBarLabel,
      size,
      upper,
      values,
      onDropdownClose,
      onDropdownOpen,
      onMouseEnter,
      onMouseLeave,
    } = this.props;

    const classes = classnames('ax-bar-chart__bars', {
      [`ax-bar-chart__bars--${benchmarkHeight}`]: benchmarkHeight,
    });

    let benchmarkValue;
    if (benchmark !== undefined) {
      benchmarkValue = ((benchmark - lower) / (upper - lower)) * 100;
    }

    return (
      <div className={ classes }>
        <Bars direction="right">
          { values.map(({ color, value }) => {
            const isFaded = hoverColor && color !== hoverColor;

            return (
              <ChartContext
                  DropdownContext={ DropdownContext }
                  color={ color }
                  data={ data }
                  key={ color }
                  label={ label }
                  onDropdownClose={ onDropdownClose }
                  onDropdownOpen={ () => onDropdownOpen(color) }
                  value={ value }>
                <Bar
                    color={ color }
                    data-ax-at={ atIds.BarChart.bar }
                    isFaded={ isFaded }
                    isHidden={ hideBars && isFaded }
                    label={ barLabel ? barLabel({ value, data, color, label }) : value }
                    labelStrong={ isHovered }
                    onMouseEnter={ () => onMouseEnter(color) }
                    onMouseLeave={ onMouseLeave }
                    percent={ ((value - lower) / (upper - lower)) * 100 }
                    showLabel={ showBarLabel || color === hoverColor }
                    size={ size } />
              </ChartContext>
            );
          }) }
        </Bars>

        { benchmarkValue !== undefined && (
          <div className="ax-bar-chart__benchmark-line-container">
            <BarChartBenchmarkLine faded={ fadeBenchmarkLine } value={ benchmarkValue } />
          </div>
        ) }
      </div>
    );
  }
}
