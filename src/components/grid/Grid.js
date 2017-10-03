import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import './Grid.css';

export default class Grid extends Component {
  static propTypes = {
    /** <GridCells>. */
    children: PropTypes.node,
    /**
     * Applies fill styling for all GridCell children.
     * See GridCell for fill explanation
     */
    fill: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /**
     * Applies fit styling for all GridCell children.
     * See GridCell for fit explanation
     */
    fit: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /**
     * Applies full styling for all GridCell children.
     * See GridCell for full explanation
     */
    full: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /** Controls the horizontal and vertical spacing between cells */
    gutters: PropTypes.oneOf([false, 'tiny', 'small', 'medium', 'large']),
    /** Controls the horizontal alignment of all cells */
    horizontalAlign: PropTypes.oneOf(['start', 'middle', 'end', 'around', 'between']),
    /** Controls the horizontal spacing between cells */
    horizontalGutters: PropTypes.oneOf([false, 'tiny', 'small', 'medium', 'large']),
    /**
     * Default behaviour of cells is to resize to 100% of the grids space when
     * on smaller screen sizes. This allows this behaviour to be suppressed.
     */
    responsive: PropTypes.bool,
    /**
     * Applies shrink styling for all GridCell children.
     * See GridCell for shrink explanation
     */
    shrink: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /** Controls the vertical alignment of all cells */
    verticalAlign: PropTypes.oneOf(['start', 'middle', 'end']),
    /** Controls the vertical spacing between cells */
    verticalGutters: PropTypes.oneOf([false, 'tiny', 'small', 'medium', 'large']),
    /** Allows cells to drop to a new line when they require more space */
    wrap: PropTypes.bool,
  };

  static defaultProps = {
    responsive: true,
    gutters: 'medium',
    wrap: true,
  };

  render() {
    const {
      children,
      fill,
      fit,
      full,
      gutters,
      horizontalAlign,
      horizontalGutters = gutters,
      responsive,
      shrink,
      verticalAlign,
      verticalGutters = gutters,
      wrap,
      ...rest
    } = this.props;

    const classes = classnames('ax-grid', {
      'ax-grid--responsive': responsive,
      [`ax-grid--gutters-horizontal--${horizontalGutters}`]: typeof horizontalGutters === 'string',
      [`ax-grid--gutters-vertical--${verticalGutters}`]: typeof verticalGutters === 'string',
      'ax-grid--fill': fill === true,
      [`ax-grid--fill--${fill}`]: fill && fill !== true,
      'ax-grid--fit': fit === true,
      [`ax-grid--fit--${fit}`]: fit && fit !== true,
      'ax-grid--full': full === true,
      [`ax-grid--full--${full}`]: full && full !== true,
      'ax-grid--shrink': shrink === true,
      [`ax-grid--shrink--${shrink}`]: shrink && shrink !== true,
      [`ax-grid--vertical-${verticalAlign}`]: verticalAlign,
      [`ax-grid--horizontal-${horizontalAlign}`]: horizontalAlign,
      'ax-grid--wrap': wrap === true,
    });

    return (
      <Base space="x6" { ...rest } className="ax-grid__container">
        <div className={ classes }>
          { children }
        </div>
      </Base>
    );
  }
}
