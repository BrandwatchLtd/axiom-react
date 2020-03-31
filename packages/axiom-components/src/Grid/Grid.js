import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Grid.css';

/**
 * Grid provides an abstraction over CSS Flex box with Grid acting as the Flex parent and
 * GridCell the Flex child. It also adds the option for gutters between flex children.
 */
export default class Grid extends Component {
  static propTypes = {
    /** <GridCells>. */
    children: PropTypes.node,
    /** Class name to be appended to the element */
    className: PropTypes.string,
    /*
    * Controls the direction of the grid cells
    */
    direction: PropTypes.oneOf(['row', 'column']),
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
     * Applies none styling for all GridCell children.
     * See GridCell for none explanation
     */
    none: PropTypes.oneOf([true, 'small', 'medium', 'large']),
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
    direction: 'row',
    responsive: true,
    gutters: 'medium',
    wrap: true,
  };

  render() {
    const {
      children,
      className,
      direction,
      fill,
      fit,
      full,
      gutters,
      horizontalAlign,
      horizontalGutters = gutters,
      none,
      responsive,
      shrink,
      verticalAlign,
      verticalGutters = gutters,
      wrap,
      ...rest
    } = this.props;

    const classes = classnames('ax-grid', {
      'ax-grid--responsive': responsive,
      'ax-grid--columns': direction === 'column',
      [`ax-grid--gutters-horizontal--${horizontalGutters}`]: typeof horizontalGutters === 'string',
      [`ax-grid--gutters-vertical--${verticalGutters}`]: typeof verticalGutters === 'string',
      'ax-grid--fill': fill === true,
      [`ax-grid--fill--${fill}`]: fill && fill !== true,
      'ax-grid--fit': fit === true,
      [`ax-grid--fit--${fit}`]: fit && fit !== true,
      'ax-grid--full': full === true,
      [`ax-grid--full--${full}`]: full && full !== true,
      'ax-grid--none': none === true,
      [`ax-grid--none--${none}`]: none && none !== true,
      'ax-grid--shrink': shrink === true,
      [`ax-grid--shrink--${shrink}`]: shrink && shrink !== true,
      [`ax-grid--vertical-${verticalAlign}`]: verticalAlign,
      [`ax-grid--horizontal-${horizontalAlign}`]: horizontalAlign,
      'ax-grid--wrap': wrap === true,
    }, className);

    return (
      <Base space="x6" { ...rest } className="ax-grid__container">
        <div className={ classes }>
          { children }
        </div>
      </Base>
    );
  }
}
