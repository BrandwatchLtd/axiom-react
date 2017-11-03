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
    /** Size of circular shape */
    circular: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
    /** Disable interaction behaviour */
    disabled: PropTypes.bool,
    /**
     * Controls the full width appearance of the badge either all of the time,
     * with a value of `true` otherwise at one of the breakpoints specified.
     */
    full: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /** Size of standard shape */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Size of stadium shape */
    stadium: PropTypes.oneOf(['small']),
    /** Style of the Button, that affects it's coloring and sizing */
    style: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary', 'caution']),
  };

  static contextTypes = {
    joined: PropTypes.bool,
  };

  static defaultProps = {
    style: 'primary',
    size: 'medium',
  };

  render() {
    const { joined } = this.context;
    const {
      active,
      children,
      circular,
      disabled,
      stadium,
      style,
      size,
      full,
      ...rest
    } = this.props;

    const childrenArray = Children.toArray(children);
    const iconOnly = childrenArray.length === 1 && isComponent(childrenArray[0], ButtonIconRef);
    const classes = classnames('ax-button', {
      [`ax-button--${size}`]: size,
      [`ax-button--${style}`]: style,
      [`ax-button--circular-${circular}`]: circular,
      [`ax-button--stadium-${stadium}`]: stadium,
      'ax-button--active': active,
      'ax-button--joined': joined,
      'ax-button--icon-only': !circular && iconOnly,
      'ax-button--full': full === true,
      [`ax-button--full--${full}`]: typeof full === 'string',
    });

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
