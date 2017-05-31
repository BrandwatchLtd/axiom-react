import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import DotPlotContext from './DotPlotContext';
import DotPlotLine from './DotPlotLine';
import DotPlotValue from './DotPlotValue';
import {
  getLines,
  getDotColors,
  isDotFaded,
  isDotHidden,
  isValueHidden,
  isValueStrong,
} from './utils';
import './DotPlot.css';

export default class DotPlot extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape({
      colors: PropTypes.arrayOf(PropTypes.oneOf([
        'rose',
        'pink',
        'purple',
        'lilac',
        'blue',
        'teal',
        'green',
        'chartreuse',
        'amber',
        'orange',
        'brown',
        'grey',
      ])).isRequired,
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
        { getLines(data, mouseOverRowIndex, mouseOverColors, rowIndex)
          .map(({ faded, fromX, toX }) =>
            <div className="ax-dot-plot__line-container" key={ fromX }>
              <DotPlotLine faded={ faded } from={ fromX } to={ toX } />
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
