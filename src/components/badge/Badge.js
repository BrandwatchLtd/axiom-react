import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Badge.css';

export default class Badge extends Component {
  static propTypes = {
    children: PropTypes.node,
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
     * A true value will apply full width styling consistently.
     * Small, medium and large values correspond to the break points and will
     * be applied below that point.
     */
    full: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
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

    const opacity = Math.max(0, Math.min(1, o));
    const style = { opacity };
    const classes = classnames('ax-badge', {
      [`ax-badge--${color}`]: color,
      'ax-badge--full': full === true,
      [`ax-badge--full--${full}`]: typeof full === 'string',
    });

    return (
      <Base { ...rest } Component="span" className={ classes }>
        <span className="ax-badge__background" style={ style } />
        <span className="ax-badge__content">{ children }</span>
      </Base>
    );
  }
}
