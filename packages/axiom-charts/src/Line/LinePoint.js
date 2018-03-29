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
      'tiny-clanger',
      'critical-mass',
      'fantastic-voyage',
      'paradise-lost',
      'serene-sea',
      'electric-dreams',
      'giant-leap',
      'moon-lagoon',
      'space-invader',
      'terra-form',
      'primeval-soup',
      'sun-maker',
      'new-horizon',
      'blast-off',
      'crash-course',
      'ground-control',
      'space-oddity',
      'deep-thought',
      'luna-dust',
      'sentiment-positive',
      'sentiment-negative',
      'sentiment-neutral',
    ]).isRequired,
    /** Applies hover state, useful to retain hover styling. */
    hover: PropTypes.bool,
    /** Label for the Line point data set */
    label: PropTypes.string,
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
      label,
      onMouseEnter,
      onDropdownClose,
      onDropdownOpen,
      size,
      style,
      value,
      x,
      y,
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
            label={ label }
            onDropdownClose={ onDropdownClose }
            onDropdownOpen={ onDropdownOpen }
            style={ style }
            value={ value }>
          <DataPoints { ...rest } size={ size }>
            <DataPoint color={ color } style={ style } />
          </DataPoints>
        </ChartContext>
      </div>
    );
  }
}
