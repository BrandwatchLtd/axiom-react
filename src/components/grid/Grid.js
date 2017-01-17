import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Grid.scss');
}

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
      PropTypes.oneOf(['small', 'large']),
    ]),
    hAlign: PropTypes.oneOf(['left', 'center', 'right', 'around', 'between']),
    hGutters: PropTypes.bool,
    responsive: PropTypes.bool,
    shrink: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    vAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
    vGutters: PropTypes.bool,
  };

  static defaultProps = {
    responsive: true,
    gutters: true,
    vGutters: true,
    hGutters: true,
  };

  render() {
    const {
      children,
      responsive,
      gutters,
      vGutters,
      hGutters,
      fill,
      fit,
      full,
      shrink,
      vAlign,
      hAlign,
      ...rest
    } = this.props;

    const classes = classnames('ax-grid', {
      'ax-grid--unresponsive': responsive === false,
      'ax-grid--gutters-none': gutters === false,
      'ax-grid--gutters-none-v': vGutters === false,
      'ax-grid--gutters-none-h': hGutters === false,
      [`ax-grid--gutters--${gutters}`]: typeof gutters === 'string',
      'ax-grid--fill': fill === true,
      [`ax-grid--fill--${fill}`]: fill && fill !== true,
      'ax-grid--fit': fit === true,
      [`ax-grid--fit--${fit}`]: fit && fit !== true,
      'ax-grid--full': full === true,
      [`ax-grid--full--${full}`]: full && full !== true,
      'ax-grid--shrink': shrink === true,
      [`ax-grid--shrink--${shrink}`]: shrink && shrink !== true,
      'ax-grid--top': vAlign === 'top',
      'ax-grid--middle': vAlign === 'middle',
      'ax-grid--bottom': vAlign === 'bottom',
      'ax-grid--left': hAlign === 'left',
      'ax-grid--center': hAlign === 'center',
      'ax-grid--right': hAlign === 'right',
      'ax-grid--around': hAlign === 'around',
      'ax-grid--between': hAlign === 'between',
    });

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
