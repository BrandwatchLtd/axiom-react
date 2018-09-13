import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class GridCell extends Component {
  static propTypes = {
    children: PropTypes.node,
    /** Class name to be appended to the element */
    className: PropTypes.string,
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
     * Sizes itself according to the size of its contents, similar to `shrink` it
     * will no increase to any available space but also will not decrease below
     * it's own content size.
     *
     * This can be configured to be all of the time or at specific breakpoints.
     */
    none: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /**
     * Sizes itself according to the size of its contents, but does not increase
     * to any available width within a grid. This allows all other siblings to
     * consume the available space.
     *
     * This can be configured to be all of the time or at specific breakpoints.
     */
    shrink: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /**
     * Allows a grid cell function as a flex container itself.
     */
    subGrid: PropTypes.bool,
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
      className,
      fill,
      fit,
      full,
      none,
      width,
      shrink,
      subGrid,
      verticalAlign,
      ...rest
    } = this.props;

    const classes = classnames('ax-grid__cell', {
      [`ax-grid__cell--${verticalAlign}`]: verticalAlign,
      'ax-grid__cell--fill': fill === true,
      'ax-grid__cell--fit': fit === true,
      'ax-grid__cell--full': full === true,
      'ax-grid__cell--none': none === true || width,
      'ax-grid__cell--shrink': shrink === true,
      [`ax-grid__cell--fit--${fit}`]: fit && fit !== true,
      [`ax-grid__cell--fill--${fill}`]: fill && fill !== true,
      [`ax-grid__cell--full--${full}`]: full && full !== true,
      [`ax-grid__cell--none--${none}`]: none && none !== true,
      [`ax-grid__cell--shrink--${shrink}`]: shrink && shrink !== true,
      'ax-grid__cell--sub-grid': subGrid,
    }, className);

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
