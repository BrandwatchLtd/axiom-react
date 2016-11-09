import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { breakpointIds } from '../../design-patterns/layout/_vars';

if (__INCLUDE_CSS__) {
  require('./Base.scss');
}

export default class Base extends Component {
  static propTypes = {
    Component: PropTypes.string,
    className: PropTypes.string,
    hiddenUntil: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(breakpointIds),
    ]),
    textBreak: PropTypes.oneOf(['none', 'all', 'word']),
    textCase: PropTypes.oneOf(['upper', 'capital', 'lower']),
    textCenter: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(breakpointIds),
    ]),
    textDark: PropTypes.bool,
    textEllipsis: PropTypes.bool,
    textLeft: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(breakpointIds),
    ]),
    textLight: PropTypes.bool,
    textRight: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(breakpointIds),
    ]),
    textStrong: PropTypes.bool,
    textSubtle: PropTypes.bool,
    textWeak: PropTypes.bool,
    visibleUntil: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(breakpointIds),
    ]),
  };

  static defaultProps = {
    Component: 'div',
  };

  render() {
    const {
      Component,
      className,
      hiddenUntil,
      textBreak,
      textCase,
      textCenter,
      textDark,
      textEllipsis,
      textLeft,
      textLight,
      textRight,
      textStrong,
      textSubtle,
      textWeak,
      visibleUntil,
      ...rest
    } = this.props;

    const classes = classnames(className, {
      [`ax-hidden-until--${hiddenUntil}`]: hiddenUntil,
      'ax-text--break-none': textBreak === 'none',
      'ax-text--break-all': textBreak === 'all',
      'ax-text--break-word': textBreak === 'word',
      'ax-text--uppercase': textCase === 'upper',
      'ax-text--capitalize': textCase === 'capital',
      'ax-text--lowercase': textCase === 'lower',
      'ax-text--center': textCenter === true,
      [`ax-text--center--${textCenter}`]: textCenter && textCenter !== true,
      'ax-text--dark': textDark,
      'ax-text--ellipsis': textEllipsis === true,
      'ax-text--left': textLeft === true,
      [`ax-text--left--${textLeft}`]: textLeft && textLeft !== true,
      'ax-text--light': textLight,
      'ax-text--right': textRight === true,
      [`ax-text--right--${textRight}`]: textRight && textRight !== true,
      'ax-text--strong': textStrong === true,
      'ax-text--subtle': textSubtle,
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
