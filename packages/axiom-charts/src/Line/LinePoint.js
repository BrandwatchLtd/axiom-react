import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import ChartContext from '../ChartContext/ChartContext';
import DataPoint from '../DataPoint/DataPoint';
import DataPoints from '../DataPoint/DataPoints';

export default class LinePoint extends Component {
  static propTypes = {
    /**
     * Contextual component that appears when clicking on a data point.
     * It is provided with the `color`, and `value` that has
     * been clicked on.
     */
    DropdownContext: PropTypes.func,
    /**
     * Contextual component that appears when clicking on a data point.
     * It is provided with the `color`, and `value` that has
     * been hovered over.
     */
    TooltipContext: PropTypes.func,
    /** Color of the DataPoint */
    color: PropTypes.oneOf([
      'forbidden-planet',
      'tiny-clanger',
      'critical-mass',
      'fantastic-voyage',
      'paradise-lost',
      'serene-sea',
      'event-horizon',
      'electric-dreams',
      'outer-limits',
      'giant-leap',
      'moon-lagoon',
      'space-invader',
      'extraterrestrial',
      'terra-form',
      'primeval-soup',
      'future-shock',
      'sun-maker',
      'new-horizon',
      'blast-off',
      'crash-course',
      'solar-rust',
      'ground-control',
      'space-oddity',
      'rocky-planet',
      'deep-thought',
      'luna-dust',
      'sentiment-positive',
      'sentiment-negative',
      'sentiment-neutral',
      'social-twitter',
      'social-facebook',
      'social-instagram',
    ]).isRequired,
    /** Applies hover state, useful to retain hover styling. */
    hover: PropTypes.bool,
    /** Index of the Line point in the data set */
    index: PropTypes.number,
    /** Label for the Line point data set */
    label: PropTypes.string,
    /** Call back for when a point is clicked */
    onClick: PropTypes.func,
    /** Call back for when a given Context component closes */
    onDropdownClose: PropTypes.func,
    /** Call back for when a given Context component opens */
    onDropdownOpen: PropTypes.func,
    /** SKIP */
    onMouseEnter: PropTypes.func,
    /** Size of the DataPoint */
    size: PropTypes.string.isRequired,
    /** Style of the DataPoint */
    style: PropTypes.oneOf(['hollow', 'solid']),
    /** SKIP */
    value: PropTypes.number,
    /** SKIP */
    x: PropTypes.number,
    /** SKIP */
    y: PropTypes.number,
  };

  render() {
    const {
      DropdownContext,
      TooltipContext,
      color,
      hover,
      index,
      label,
      onMouseEnter,
      onDropdownClose,
      onDropdownOpen,
      size,
      style,
      value,
      x,
      y,
      onClick,
      ...rest
    } = this.props;

    const classes = classnames('ax-line__point', `ax-line__point--${color}`, {
      'ax-line__point--hoverable': onMouseEnter,
      'ax-line__point--hover': hover,
    });

    const position = {
      left: `${x}%`,
      top: `${100 - y}%`,
    };

    return (
      <div
          className={ classes }
          onMouseEnter={ onMouseEnter }
          style={ position }>
        <ChartContext
            DropdownContext={ DropdownContext }
            TooltipContext={ TooltipContext }
            color={ color }
            index={ index }
            label={ label }
            onDropdownClose={ onDropdownClose }
            onDropdownOpen={ onDropdownOpen }
            style={ style }
            value={ value }>
          <DataPoints { ...rest } onClick={ onClick && (() => onClick({ color, index, label, value })) } size={ size }>
            <DataPoint color={ color } style={ style } />
          </DataPoints>
        </ChartContext>
      </div>
    );
  }
}
