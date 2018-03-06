import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from '@brandwatch/axiom-components';
import DotPlotBenchmarkLine from './DotPlotBenchmarkLine';
import DotPlotContext from './DotPlotContext';
import DotPlotDifferenceLine from './DotPlotDifferenceLine';
import DotPlotValue from './DotPlotValue';
import {
  getLines,
  getDotColors,
  isBenchmarkFaded,
  isDotFaded,
  isDotHidden,
  isValueHidden,
  isValueStrong,
} from './utils';
import './DotPlot.css';

const differenceLineContainerClasses = (fromBenchmark, toBenchmark) =>
  classnames('ax-dot-plot__difference-line-container', {
    'ax-dot-plot__difference-line-container--from-benchmark': fromBenchmark,
    'ax-dot-plot__difference-line-container--to-benchmark': toBenchmark,
  });

export default class DotPlot extends Component {
  static propTypes = {
    DropdownContext: PropTypes.func,
    benchmark: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.shape({
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
      value: PropTypes.number.isRequired,
    })).isRequired,
    dotPlotLabel: PropTypes.func,
    label: PropTypes.string,
    lower: PropTypes.number,
    mouseOverColors: PropTypes.arrayOf(PropTypes.string),
    mouseOverRowIndex: PropTypes.number,
    onDotMouseEnter: PropTypes.func.isRequired,
    onDotMouseLeave: PropTypes.func.isRequired,
    rawData: PropTypes.object.isRequired,
    rowIndex: PropTypes.number.isRequired,
    upper: PropTypes.number,
  };

  render() {
    const {
      DropdownContext,
      benchmark,
      data,
      dotPlotLabel,
      label,
      lower,
      mouseOverColors,
      mouseOverRowIndex,
      onDotMouseEnter,
      onDotMouseLeave,
      rawData,
      rowIndex,
      upper,
      ...rest
    } = this.props;

    let benchmarkValue;
    if (benchmark) {
      benchmarkValue = ((benchmark - lower) / (upper - lower)) * 100;
    }

    return (
      <Base { ...rest } className="ax-dot-plot">
        { getLines(data, benchmark, mouseOverRowIndex, mouseOverColors, rowIndex, lower, upper)
          .map(({ fromBenchmark, toBenchmark, faded, fromX, toX }) =>
            <div
                className={ differenceLineContainerClasses(fromBenchmark, toBenchmark) }
                key={ `${fromX}.${toX}` }>
              <DotPlotDifferenceLine faded={ faded } from={ fromX } to={ toX } />
            </div>
          )
        }

        { data.map(({ colors, value }) =>
          <DotPlotContext
              DropdownContext={ DropdownContext }
              colors={ getDotColors(mouseOverRowIndex, mouseOverColors, rowIndex, colors) }
              data={ rawData }
              faded={ isDotFaded(mouseOverRowIndex, mouseOverColors, rowIndex, colors) }
              hidden={ isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors) }
              key={ value }
              label={ label }
              lower={ lower }
              onMouseEnter={ () => onDotMouseEnter(colors) }
              onMouseLeave={ onDotMouseLeave }
              upper={ upper }
              value={ value } />
        ) }

        { benchmarkValue !== undefined && (
          <div className="ax-dot-plot__benchmark-line-container">
            <DotPlotBenchmarkLine
                faded={ isBenchmarkFaded(mouseOverRowIndex, mouseOverColors, rowIndex) }
                value={ benchmarkValue } />
          </div>
        ) }

        { data.map(({ colors, value }) =>
          <DotPlotValue
              dotPlotLabel={ dotPlotLabel }
              hidden={ isValueHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors) }
              key={ value }
              textStrong={ isValueStrong(mouseOverRowIndex, mouseOverColors, rowIndex, colors) }
              value={ value }
              x={ ((value - lower) / (upper - lower)) * 100 } />
        ) }
      </Base>
    );
  }
}
