import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Tip.css';

export default class Tip extends Component {
  static propTypes = {
    /** optional property which should be provided in case positioning of the tip is done using popperJs. If this value is true, the value of position prop will be ignored. */
    arrowRef: PropTypes.func,
    /** The content on which the tip should be placed. */
    children: PropTypes.node,
    /** Background color for the tip */
    color: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'shade-1', 'shade-2', 'shade-3', 'shade-4', 'carbon', 'white']),
    /** The direction at which the Tip should be pointing. The directions are opposite, for example,
     * if the arrow should be placed on the 'left', its direction prop should be 'right'. The same applies for 'top' and 'bottom'. */
    direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /** The position of the Tip along the baseline, can be any valid css units including px/rem/percentage. Should be adjusted according ot the use case */
    position: PropTypes.string,
    /** The Tip can be configured to have a shadow effect. This value is true by default */
    shadow: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    shadow: true,
    direction: 'top',
    size: 'medium',
  };

  getArrowStyles = () => {
    const { position, direction } = this.props;

    switch (direction) {
    case 'top':
    case 'bottom':
      return { left: position };
    case 'left':
    case 'right':
      return { top: position };
    }
  };

  render() {
    const { arrowRef, color, direction, position, children, shadow, size, ...rest } = this.props;

    const classes = classnames(`ax-tip--${direction}`, {
      [`ax-tip--${color}`]: color,
      ['ax-tip--shadow']: shadow,
    });

    const arrowClasses = classnames('ax-tip__arrow', {
      [`ax-tip__arrow--${size}`]: size,
    });

    return (
      <Base className={ classes } { ...rest }>
        <span className={ arrowClasses } ref={ arrowRef } style={ position ? this.getArrowStyles() : {} } />
        <Base className="ax-tip__content">{ children }</Base>
      </Base>
    );
  }
}
