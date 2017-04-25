import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

export default class GridCell extends Component {
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
    shrink: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    verticalAlign: PropTypes.oneOf(['start', 'middle', 'end']),
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
