import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import './Base.css';

export default class Base extends Component {
  static propTypes = {
    /**
     * The component that should be rendered with the Base component
     * functionality. If a string is given then it must be a valid
     * react registered element tag.
     */
    Component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    /** Class name to be appended to the element */
    className: PropTypes.string,
    /**
     * Control over when the element should be hidden until, passed that value
     * the element will be visible. Opposite of `visibleUntil`.
     */
    hiddenUntil: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Vertical margins given to the element */
    space: PropTypes.oneOf(['none', 'tiny', 'small', 'medium', 'large']),
    /** Text breaking styling */
    textBreak: PropTypes.oneOf(['none', 'all', 'word']),
    /** Text casing styling */
    textCase: PropTypes.oneOf(['upper', 'capital', 'lower']),
    /**
     * Text central alignment either all of the time, * with a value of `true`
     * otherwise at one of the breakpoints specified.
     */
    textCenter: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /** Text colour styling */
    textColor: PropTypes.oneOf([
      'dark',
      'disabled',
      'error',
      'light',
      'subtle',
      'success',
      'warning',
    ]),
    textEllipsis: PropTypes.bool,
    /**
     * Text left alignment either all of the time, * with a value of `true`
     * otherwise at one of the breakpoints specified.
     */
    textLeft: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /**
     * Text right alignment either all of the time, * with a value of `true`
     * otherwise at one of the breakpoints specified.
     */
    textRight: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /** Text strong weight styling */
    textStrong: PropTypes.bool,
    /** Text weak weight styling */
    textWeak: PropTypes.bool,
    /**
     * Control over when the element should be visible until, passed that value
     * the element will be hidden. Opposite of `hiddenUntil`.
     */
    visibleUntil: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    Component: 'div',
  };

  render() {
    const {
      Component,
      className,
      hiddenUntil,
      space,
      textBreak,
      textCase,
      textCenter,
      textColor,
      textEllipsis,
      textLeft,
      textRight,
      textStrong,
      textWeak,
      visibleUntil,
      ...rest
    } = this.props;

    const classes = classnames(className, {
      [`ax-space--${space}`]: space,
      'ax-text--break-all': textBreak === 'all',
      'ax-text--break-none': textBreak === 'none',
      'ax-text--break-word': textBreak === 'word',
      'ax-text--capitalize': textCase === 'capital',
      'ax-text--center': textCenter === true,
      [`ax-text--center--${textCenter}`]: textCenter && textCenter !== true,
      [`ax-text--color-${textColor}`]: textColor,
      'ax-text--ellipsis': textEllipsis === true,
      [`ax-hidden-until--${hiddenUntil}`]: hiddenUntil,
      'ax-text--left': textLeft === true,
      [`ax-text--left--${textLeft}`]: textLeft && textLeft !== true,
      'ax-text--lowercase': textCase === 'lower',
      'ax-text--right': textRight === true,
      [`ax-text--right--${textRight}`]: textRight && textRight !== true,
      'ax-text--strong': textStrong === true,
      'ax-text--uppercase': textCase === 'upper',
      'ax-text--weak': textWeak === true,
      [`ax-visible-until--${visibleUntil}`]: visibleUntil,
    });

    return (
      <Component
          { ...rest }
          className={ classes }  />
    );
  }
}
