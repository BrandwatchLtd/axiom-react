import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Bars } from 'bw-axiom';
import BarChartContext from './BarChartContext';
import BarChartBenchmarkLine from './BarChartBenchmarkLine';

export default class BarChartBars extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
    benchmark: PropTypes.number,
    benchmarkHeight: PropTypes.oneOf(['x1', 'x2', 'x3']),
    data: PropTypes.object.isRequired,
    fadeBenchmarkLine: PropTypes.bool.isRequired,
    hideBars: PropTypes.bool.isRequired,
    hoverColor: PropTypes.string,
    isHovered: PropTypes.bool.isRequired,
    label: PropTypes.node.isRequired,
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
      benchmarkHeight,
      data,
      fadeBenchmarkLine,
      hideBars,
      hoverColor,
      isHovered,
      label,
      showBarLabel,
      size,
      values,
      onMouseEnter,
      onMouseLeave,
    } = this.props;

    const classes = classnames('ax-bar-chart__bars', {
      [`ax-bar-chart__bars--${benchmarkHeight}`]: benchmarkHeight,
    });

    return (
      <div className={ classes }>
        <Bars direction="right">
          { values.map(({ color, value }) => {
            const isFaded = hoverColor && color !== hoverColor;

            return (
              <BarChartContext
                  ContextComponent={ ContextComponent }
                  color={ color }
                  data={ data }
                  isFaded={ isFaded }
                  isHidden={ hideBars && isFaded }
                  key={ color }
                  label={ label }
                  labelStrong={ isHovered }
                  onMouseEnter={ onMouseEnter }
                  onMouseLeave={ onMouseLeave }
                  showBarLabel={ showBarLabel || color === hoverColor }
                  size={ size }
                  value={ value } />
            );
          }) }
        </Bars>

        { benchmark !== undefined && (
          <div className="ax-bar-chart__benchmark-line-container">
            <BarChartBenchmarkLine faded={ fadeBenchmarkLine } value={ benchmark } />
          </div>
        ) }
      </div>
    );
  }
}
