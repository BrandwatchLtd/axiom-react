import React, { Component, PropTypes } from 'react';
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
  };

  static defaultProps = {
    responsive: true,
    gutters: 'medium',
  };

  render() {
    const {
      children,
      responsive,
      gutters,
      horizontalGutters = gutters,
      verticalGutters = gutters,
      fill,
      fit,
      full,
      shrink,
      verticalAlign,
      horizontalAlign,
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
    });

    return (
      <Base space="medium" { ...rest } className="ax-grid__container">
        <div className={ classes }>
          { children }
        </div>
      </Base>
    );
  }
}
