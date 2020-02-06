import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import atIds from '@brandwatch/axiom-automation-testing/ids';
import { Base, Small } from '@brandwatch/axiom-components';
import Bars from '../Bar/Bars';
import CombinedBar from './CombinedBar';
import BarChartBenchmarkLine from './BarChartBenchmarkLine';

export default class BarChartBars extends Component {
  static propTypes = {
    BenchmarkTooltipContext: PropTypes.func,
    DifferenceAreaTooltipContext: PropTypes.func,
    DropdownContext: PropTypes.func,
    TooltipContext: PropTypes.func,
    barLabel: PropTypes.func,
    benchmark: PropTypes.number,
    benchmarkHeight: PropTypes.oneOf(['x1', 'x2', 'x3']),
    data: PropTypes.object.isRequired,
    fadeBenchmarkLine: PropTypes.bool.isRequired,
    hideBars: PropTypes.bool.isRequired,
    hoverColor: PropTypes.string,
    hoverIndex: PropTypes.number,
    index: PropTypes.number,
    isHidden: PropTypes.bool,
    isHovered: PropTypes.bool.isRequired,
    label: PropTypes.node.isRequired,
    lower: PropTypes.number,
    onDropdownClose: PropTypes.func.isRequired,
    onDropdownOpen: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    showBarLabel: PropTypes.bool,
    showDifferenceArea: PropTypes.bool,
    singleSelect: PropTypes.bool,
    size: PropTypes.string,
    upper: PropTypes.number,
    values: PropTypes.array.isRequired,
  };

  render() {
    const {
      BenchmarkTooltipContext,
      DifferenceAreaTooltipContext,
      DropdownContext,
      TooltipContext,
      barLabel,
      benchmark,
      benchmarkHeight,
      data,
      fadeBenchmarkLine,
      hideBars,
      hoverColor,
      hoverIndex,
      isHidden,
      isHovered,
      index,
      label,
      lower,
      showBarLabel,
      showDifferenceArea,
      singleSelect,
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

    let benchmarkPercent;
    if (benchmark !== undefined) {
      benchmarkPercent = ((benchmark - lower) / (upper - lower)) * 100;
    }

    return (
      <Base className={ classes } cloak={ isHidden }>
        <Bars direction="right">
          { values.map(({ color, value }) => {
            const isFaded = singleSelect
              ? Number.isInteger(hoverIndex) && hoverIndex !== index
              : hoverColor && color !== hoverColor;

            const percent = ((value - lower) / (upper - lower)) * 100;

            const isHoveredByColor = hoverColor && color === hoverColor;
            const isHoveredByIndex = hoverIndex && index === hoverIndex;
            const hideLabel = !showBarLabel && !isHoveredByColor && !isHoveredByIndex;
            const labelClasses = classnames('ax-bar-chart__bar-label', {
              'ax-bar-chart__bar-label--hidden': hideLabel,
            });

            const isStretched = benchmarkPercent > percent;

            const labelStyle = {
              left: `${showDifferenceArea && isStretched ? benchmarkPercent : percent}%`,
            };

            return (
              <div className="ax-bar-chart__bar-container" key={ color }>
                <CombinedBar
                    DifferenceAreaTooltipContext={ DifferenceAreaTooltipContext }
                    DropdownContext={ DropdownContext }
                    TooltipContext={ TooltipContext }
                    benchmark={ benchmark }
                    benchmarkPercent={ showDifferenceArea ? benchmarkPercent : null }
                    color={ color }
                    data={ data }
                    data-ax-at={ atIds.BarChart.bar }
                    isFaded={ isFaded }
                    isHidden={ hideBars && isFaded }
                    label={ label }
                    onDropdownClose={ onDropdownClose }
                    onDropdownOpen={ () => onDropdownOpen(color) }
                    onMouseEnter={ () => onMouseEnter(color) }
                    onMouseLeave={ onMouseLeave }
                    percent={ percent }
                    showLabel={ false }
                    size={ size }
                    value={ value } />

                <div className={ labelClasses } style={ labelStyle }>
                  <Small textStrong={ isHovered }>{ barLabel ? barLabel({ value, data, color, label }) : value }</Small>
                </div>
              </div>
            );
          }) }
        </Bars>

        { benchmarkPercent !== undefined && (
          <div className="ax-bar-chart__benchmark-line-container">
            <BarChartBenchmarkLine
                BenchmarkTooltipContext={ BenchmarkTooltipContext }
                benchmark={ benchmark }
                data={ data }
                faded={ fadeBenchmarkLine }
                label={ label }
                value={ benchmarkPercent } />
          </div>
        ) }
      </Base>
    );
  }
}
