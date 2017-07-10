import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Grid.css';

export default class Grid extends Component {
  static propTypes = {
    children: PropTypes.node,
    fill: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    fit: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    full: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    gutters: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
    ]),
    horizontalAlign: PropTypes.oneOf(['start', 'middle', 'end', 'around', 'between']),
    horizontalGutters: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
    ]),
    responsive: PropTypes.bool,
    shrink: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    verticalAlign: PropTypes.oneOf(['start', 'middle', 'end']),
    verticalGutters: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
    ]),
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
