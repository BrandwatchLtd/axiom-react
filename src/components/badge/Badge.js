import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Badge.css';

export default class Badge extends Component {
  static propTypes = {
    /** Content to appear inside the Badge */
    children: PropTypes.node,
    /** Colour of the Badge */
    color: PropTypes.oneOf([
      'faded',
      'highlight',
      'success',
      'error',
      'rose',
      'pink',
      'purple',
      'lilac',
      'blue',
      'teal',
      'green',
      'chartreuse',
      'amber',
      'orange',
      'brown',
      'grey',
    ]).isRequired,
    /**
     * Controls the full width appearance of the badge either all of the time,
     * with a value of `true` otherwise at one of the breakpoints specified.
     */
    full: PropTypes.oneOf([true, 'small', 'medium', 'large']),
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
      opacity: o,
      ...rest
    } = this.props;

    const isFaded = color === 'faded';
    const textColor = isFaded || o < 1 ? undefined : 'light';
    const opacity = isFaded || o < 1 ? Math.max(.1, Math.min(isFaded ? .3 : .6, o)) : 1;
    const style = { opacity };
    const classes = classnames('ax-badge', {
      [`ax-badge--${color}`]: color,
      'ax-badge--full': full === true,
      [`ax-badge--full--${full}`]: typeof full === 'string',
    });

    return (
      <Base { ...rest } Component="span" className={ classes } textColor={ textColor }>
        <span className="ax-badge__background" style={ style } />
        <span className="ax-badge__content">{ children }</span>
      </Base>
    );
  }
}
