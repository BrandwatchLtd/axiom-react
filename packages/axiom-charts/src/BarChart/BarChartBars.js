import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import atIds from '@brandwatch/axiom-automation-testing/ids';
import { Small } from '@brandwatch/axiom-components';
import Bar from '../Bar/Bar';
import Bars from '../Bar/Bars';
import CombinedBar from './CombinedBar';
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
    hoverIndex: PropTypes.number,
    index: PropTypes.number,
    isHovered: PropTypes.bool.isRequired,
    label: PropTypes.node.isRequired,
    lower: PropTypes.number,
    onDropdownClose: PropTypes.func.isRequired,
    onDropdownOpen: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    showBarLabel: PropTypes.bool,
    singleSelect: PropTypes.bool,
    size: PropTypes.string,
    stretch: PropTypes.bool,
    upper: PropTypes.number,
    values: PropTypes.array.isRequired,
  };

  static defaultProps = {
    stretch: false,
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
      hoverIndex,
      isHovered,
      index,
      label,
      lower,
      showBarLabel,
      singleSelect,
      size,
      stretch,
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
            const isFaded = singleSelect
              ? Number.isInteger(hoverIndex) && hoverIndex !== index
              : hoverColor && color !== hoverColor;

            const percent = ((value - lower) / (upper - lower)) * 100;
            const labelClasses = classnames('ax-bar-chart__bar-label', {
              'ax-bar-chart__bar-label--hidden': !(showBarLabel || color === hoverColor),
            });

            const isStretched = benchmarkValue > percent;

            const labelStyle = {
              left: `${stretch && isStretched ? benchmarkValue : percent}%`,
            };

            const bar = (<Bar
                color={ color }
                data-ax-at={ atIds.BarChart.bar }
                isFaded={ isFaded }
                isHidden={ hideBars && isFaded }
                onMouseEnter={ () => onMouseEnter(color) }
                onMouseLeave={ onMouseLeave }
                percent={ percent }
                showLabel={ false }
                size={ size } />);

            const combineBar = stretch && (
              <CombinedBar
                  benchmarkValue={ benchmarkValue }
                  color={ color }
                  data-ax-at={ atIds.BarChart.bar }
                  isFaded={ isFaded }
                  isHidden={ hideBars && isFaded }
                  onMouseEnter={ () => onMouseEnter(color) }
                  onMouseLeave={ onMouseLeave }
                  percent={ percent }
                  showLabel={ false }
                  size={ size } />
              );

            return (
              <div className="ax-bar-chart__bar-container" key={ color }>
                <ChartContext
                    DropdownContext={ DropdownContext }
                    color={ color }
                    data={ data }
                    label={ label }
                    onDropdownClose={ onDropdownClose }
                    onDropdownOpen={ () => onDropdownOpen(color) }
                    value={ value }>
                  { combineBar || bar }
                </ChartContext>

                <div className={ labelClasses } style={ labelStyle }>
                  <Small textStrong={ isHovered }>{ barLabel ? barLabel({ value, data, color, label }) : value }</Small>
                </div>
              </div>
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
