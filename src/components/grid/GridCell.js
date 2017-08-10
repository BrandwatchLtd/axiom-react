import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

export default class GridCell extends Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * Sizes itself according to the size of its contents. This causes the grid
     * to attempt to evenly distribute the cells, but allows cells to increase
     * their width to provide more room for the contents.
     *
     * When a filled cell exceeds the available room (relative to siblings) it
     * will drop onto its own line. Combined with Grids wrapping property, this
     * can controlled not to shrink siblings down.
     *
     * This can be configured to be all of the time or at specific breakpoints.
     */
    fill: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /**
     * Sizes itself irrespective of its contents. This causes the grid to evenly
     * distribute all children cells. If the grid has wrapping enabled, the cell
     * may drop to a new line when there is no room left.
     *
     * This can be configured to be all of the time or at specific breakpoints.
     */
    fit: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /**
     * Sizes itself to 100% of the available width within a grid. This causes
     * all other siblings to placed vertically of itself.
     *
     * This can be configured to be all of the time or at specific breakpoints.
     */
    full: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /**
     * Sizes itself according to the size of its contents, but does not increase
     * to any available width within a grid. This allows all other siblings to
     * consume the available space.
     *
     * This can be configured to be all of the time or at specific breakpoints.
     */
    shrink: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /**
     * Vertically aligns itself relative to other cells within a grid.
     */
    verticalAlign: PropTypes.oneOf(['start', 'middle', 'end']),
    /** Percentage width */
    width: PropTypes.number,
  };

  render() {
    const {
      children,
      fill,
      fit,
      full,
      width,
      shrink,
      verticalAlign,
      ...rest
    } = this.props;

    const classes = classnames('ax-grid__cell', {
      [`ax-grid__cell--${verticalAlign}`]: verticalAlign,
      'ax-grid__cell--fill': fill === true,
      'ax-grid__cell--fit': fit === true,
      'ax-grid__cell--full': full === true,
      'ax-grid__cell--percent': width,
      'ax-grid__cell--shrink': shrink === true,
      [`ax-grid__cell--fit--${fit}`]: fit && fit !== true,
      [`ax-grid__cell--fill--${fill}`]: fill && fill !== true,
      [`ax-grid__cell--full--${full}`]: full && full !== true,
      [`ax-grid__cell--shrink--${shrink}`]: shrink && shrink !== true,
    });

    const styles = {
      width: width && `${Math.max(0, Math.min(width, 100))}%`,
    };

    return (
      <Base { ...rest } className={ classes } style={ styles }>
        { children }
      </Base>
    );
  }
}
