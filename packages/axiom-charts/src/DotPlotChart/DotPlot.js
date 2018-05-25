import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from '@brandwatch/axiom-components';
import ChartContext from '../ChartContext/ChartContext';
import DotPlotBenchmarkLine from './DotPlotBenchmarkLine';
import DotPlotDots from './DotPlotDots';
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
    onDropdownClose: PropTypes.func.isRequired,
    onDropdownOpen: PropTypes.func.isRequired,
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
      onDropdownClose,
      onDropdownOpen,
      onDotMouseEnter,
      onDotMouseLeave,
      rawData,
      rowIndex,
      upper,
      ...rest
    } = this.props;

    const dotPlotsArgs = [mouseOverRowIndex, mouseOverColors, rowIndex];
    let benchmarkPercent;
    if (benchmark !== undefined) {
      benchmarkPercent = ((benchmark - lower) / (upper - lower)) * 100;
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
          <ChartContext
              DropdownContext={ DropdownContext }
              colors={ getDotColors(...dotPlotsArgs, colors) }
              data={ rawData }
              key={ value }
              label={ label }
              lower={ lower }
              onDropdownClose={ onDropdownClose }
              onDropdownOpen={ () => onDropdownOpen(getDotColors(...dotPlotsArgs, colors) ) }
              upper={ upper }
              value={ value }>
            <DotPlotDots
                colors={ getDotColors(...dotPlotsArgs, colors) }
                faded={ isDotFaded(...dotPlotsArgs, colors) }
                hidden={ isDotHidden(...dotPlotsArgs, colors) }
                onMouseEnter={ () => onDotMouseEnter(colors) }
                onMouseLeave={ onDotMouseLeave }
                value={ ((value - lower) / (upper - lower)) * 100 } />
          </ChartContext>
        ) }

        { benchmarkPercent !== undefined && (
          <div className="ax-dot-plot__benchmark-line-container">
            <DotPlotBenchmarkLine
                faded={ isBenchmarkFaded(...dotPlotsArgs) }
                value={ benchmarkPercent } />
          </div>
        ) }

        { data.map(({ colors, value }) =>
          <DotPlotValue
              dotPlotLabel={ dotPlotLabel }
              hidden={ isValueHidden(...dotPlotsArgs, colors) }
              key={ value }
              textStrong={ isValueStrong(...dotPlotsArgs, colors) }
              value={ value }
              x={ ((value - lower) / (upper - lower)) * 100 } />
        ) }
      </Base>
    );
  }
}
