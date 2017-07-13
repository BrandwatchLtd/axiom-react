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

    return (
      <div className="ax-bar-chart__bars">
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
