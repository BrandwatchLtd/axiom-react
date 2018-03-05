import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Bars from '../Bar/Bars';
import BarChartBenchmarkLine from './BarChartBenchmarkLine';
import BarChartContext from './BarChartContext';

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
      onMouseEnter,
      onMouseLeave,
    } = this.props;

    const classes = classnames('ax-bar-chart__bars', {
      [`ax-bar-chart__bars--${benchmarkHeight}`]: benchmarkHeight,
    });

    let benchmarkValue;
    if (benchmark) {
      benchmarkValue = ((benchmark - lower) / (upper - lower)) * 100;
    }

    return (
      <div className={ classes }>
        <Bars direction="right">
          { values.map(({ color, value }) => {
            const isFaded = hoverColor && color !== hoverColor;

            return (
              <BarChartContext
                  DropdownContext={ DropdownContext }
                  barLabel={ barLabel }
                  color={ color }
                  data={ data }
                  isFaded={ isFaded }
                  isHidden={ hideBars && isFaded }
                  key={ color }
                  label={ label }
                  labelStrong={ isHovered }
                  lower={ lower }
                  onMouseEnter={ onMouseEnter }
                  onMouseLeave={ onMouseLeave }
                  showBarLabel={ showBarLabel || color === hoverColor }
                  size={ size }
                  upper={ upper }
                  value={ value } />
            );
          }) }
        </Bars>

        { benchmark !== undefined && (
          <div className="ax-bar-chart__benchmark-line-container">
            <BarChartBenchmarkLine faded={ fadeBenchmarkLine } value={ benchmarkValue } />
          </div>
        ) }
      </div>
    );
  }
}
