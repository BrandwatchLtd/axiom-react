import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Badge.css';

export default class Badge extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /** Content to appear inside the Badge */
    children: PropTypes.node,
    /** Colour of the Badge */
    color: PropTypes.oneOf([
      'faded',
      'highlight',
      'success',
      'error',
      'forbidden-planet',
      'tiny-clanger',
      'critical-mass',
      'fantastic-voyage',
      'paradise-lost',
      'serene-sea',
      'event-horizon',
      'electric-dreams',
      'outer-limits',
      'giant-leap',
      'moon-lagoon',
      'space-invader',
      'extraterrestrial',
      'terra-form',
      'primeval-soup',
      'future-shock',
      'sun-maker',
      'new-horizon',
      'blast-off',
      'crash-course',
      'solar-rust',
      'ground-control',
      'space-oddity',
      'rocky-planet',
      'deep-thought',
      'luna-dust',
    ]).isRequired,
    /**
     * Controls the full width appearance of the badge either all of the time,
     * with a value of `true` otherwise at one of the breakpoints specified.
     */
    full: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /** Click handler that applied clickable styling */
    onClick: PropTypes.func,
    /** The opacity of the background of the Badge */
    opacity: PropTypes.number,
  };

  static defaultProps = {
    color: 'faded',
    opacity: 1,
  };

  render() {
    const {
      children,
      color,
      full,
      onClick,
      opacity: o,
      ...rest
    } = this.props;

    const isFaded = color === 'faded';
    const textColor = isFaded || o < 1 ? undefined : 'night';
    const opacity = isFaded || o < 1 ? Math.max(.1, Math.min(isFaded ? .3 : .6, o)) : 1;
    const style = { opacity };
    const classes = classnames('ax-badge', {
      [`ax-badge--${color}`]: color,
      'ax-badge--clickable': onClick,
      'ax-badge--full': full === true,
      [`ax-badge--full--${full}`]: typeof full === 'string',
    });

    return (
      <Base { ...rest } Component="span" className={ classes } onClick={ onClick } textColor={ textColor }>
        <span className="ax-badge__background" style={ style } />
        <span className="ax-badge__content">{ children }</span>
      </Base>
    );
  }
}
