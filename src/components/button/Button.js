import PropTypes from 'prop-types';
import React, { Component, Children, cloneElement } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import { ButtonIconRef } from './ButtonIcon';
import isComponent from '../../utils/isComponent';
import './Button.css';

export default class Button extends Component {
  static propTypes = {
    /** Apply active styling */
    active: PropTypes.bool,
    /** Content inserted into the Button */
    children: PropTypes.node.isRequired,
    /** Color of the button */
    color: PropTypes.oneOf(['accent', 'negative']),
    /** Disable interaction behaviour */
    disabled: PropTypes.bool,
    /**
     * Controls the full width appearance of the badge either all of the time,
     * with a value of `true` otherwise at one of the breakpoints specified.
     */
    full: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /** Forces button to loose it's rounded styling on the left side */
    joinedLeft: PropTypes.bool,
    /** Forces button to loose it's rounded styling on the right side */
    joinedRight: PropTypes.bool,
    /** Shape of the button */
    shape: PropTypes.oneOf(['circle', 'rectangle', 'stadium']),
    /** Size of standard shape */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
    /** Style of the Button, that affects it's coloring and sizing */
    style: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  };

  static contextTypes = {
    joined: PropTypes.bool,
  };

  static defaultProps = {
    color: 'accent',
    shape: 'rectangle',
    size: 'medium',
    style: 'primary',
  };

  render() {
    const { joined } = this.context;
    const {
      active,
      children,
      color,
      disabled,
      joinedLeft,
      joinedRight,
      shape,
      style,
      size,
      full,
      ...rest
    } = this.props;

    const childrenArray = Children.toArray(children);
    const iconOnly = childrenArray.length === 1 && isComponent(childrenArray[0], ButtonIconRef);
    const classes = classnames('ax-button',
      `ax-button--${color}`,
      `ax-button--${style}`,
      `ax-button--${shape}-${size}`, {
        'ax-button--active': active,
        'ax-button--joined': joined,
        'ax-button--joined-left': joinedLeft,
        'ax-button--joined-right': joinedRight,
        'ax-button--icon-only': shape === 'rectangle' && iconOnly,
        'ax-button--full': full === true,
        [`ax-button--full--${full}`]: typeof full === 'string',
      }
    );

    const mappedChildren = childrenArray.map((child, index, array) =>
      !isComponent(child, ButtonIconRef) ? child : cloneElement(child, {
        isEnd: index === array.length - 1,
        isStart: index === 0,
      })
    );

    return (
      <Base Component="button" { ...rest }
          className={ classes }
          disabled={ disabled }>
        { mappedChildren }
      </Base>
    );
  }
}
