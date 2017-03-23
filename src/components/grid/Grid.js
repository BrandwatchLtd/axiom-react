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
    hAlign: PropTypes.oneOf(['start', 'middle', 'end', 'around', 'between']),
    hGutters: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
    ]),
    responsive: PropTypes.bool,
    shrink: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    vAlign: PropTypes.oneOf(['start', 'middle', 'end']),
    vGutters: PropTypes.oneOfType([
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
      hGutters = gutters,
      vGutters = gutters,
      fill,
      fit,
      full,
      shrink,
      vAlign,
      hAlign,
      ...rest
    } = this.props;

    const classes = classnames('ax-grid', {
      'ax-grid--responsive': responsive,
      [`ax-grid--gutters-h--${hGutters}`]: typeof hGutters === 'string',
      [`ax-grid--gutters-v--${vGutters}`]: typeof vGutters === 'string',
      'ax-grid--fill': fill === true,
      [`ax-grid--fill--${fill}`]: fill && fill !== true,
      'ax-grid--fit': fit === true,
      [`ax-grid--fit--${fit}`]: fit && fit !== true,
      'ax-grid--full': full === true,
      [`ax-grid--full--${full}`]: full && full !== true,
      'ax-grid--shrink': shrink === true,
      [`ax-grid--shrink--${shrink}`]: shrink && shrink !== true,
      [`ax-grid--v-${vAlign}`]: vAlign,
      [`ax-grid--h-${hAlign}`]: hAlign,
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
