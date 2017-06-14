import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import DotPlotContext from './DotPlotContext';
import DotPlotBenchmarkLine from './DotPlotBenchmarkLine';
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

function differenceLineContainerClasses(benchmark) {
  return classnames('ax-dot-plot__difference-line-container', {
    'ax-dot-plot__difference-line-container--dot': !benchmark,
  });
}

export default class DotPlot extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
    benchmark: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.shape({
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
      value: PropTypes.number.isRequired,
    })).isRequired,
    label: PropTypes.string,
    mouseOverColors: PropTypes.arrayOf(PropTypes.string),
    mouseOverRowIndex: PropTypes.number,
    rawData: PropTypes.object.isRequired,
    rowIndex: PropTypes.number.isRequired,
    onDotMouseEnter: PropTypes.func.isRequired,
    onDotMouseLeave: PropTypes.func.isRequired,
  };

  render() {
    const {
      ContextComponent,
      benchmark,
      data,
      label,
      mouseOverColors,
      mouseOverRowIndex,
      onDotMouseEnter,
      onDotMouseLeave,
      rawData,
      rowIndex,
      ...rest
    } = this.props;

    return (
      <Base { ...rest } className="ax-dot-plot">
        { getLines(data, benchmark, mouseOverRowIndex, mouseOverColors, rowIndex)
          .map(({ benchmark, faded, fromX, toX }) =>
            <div className={ differenceLineContainerClasses(benchmark) } key={ `${fromX}.${toX}` }>
              <DotPlotDifferenceLine faded={ faded } from={ fromX } to={ toX } />
            </div>
          )
        }

        { data.map(({ colors, value }) =>
          <DotPlotContext
              ContextComponent={ ContextComponent }
              colors={ getDotColors(mouseOverRowIndex, mouseOverColors, rowIndex, colors) }
              data={ rawData }
              faded={ isDotFaded(mouseOverRowIndex, mouseOverColors, rowIndex, colors) }
              hidden={ isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors) }
              key={ value }
              label={ label }
              onMouseEnter={ () => onDotMouseEnter(colors) }
              onMouseLeave={ onDotMouseLeave }
              value={ value } />
        ) }

        { benchmark && (
          <div className="ax-dot-plot__benchmark-line-container">
            <DotPlotBenchmarkLine
                faded={ isBenchmarkFaded(mouseOverRowIndex, mouseOverColors, rowIndex) }
                value={ benchmark } />
          </div>
        ) }

        { data.map(({ colors, value }) =>
          <DotPlotValue
              hidden={ isValueHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors) }
              key={ value }
              textStrong={ isValueStrong(mouseOverRowIndex, mouseOverColors, rowIndex, colors) }
              value={ value } />
        ) }
      </Base>
    );
  }
}
