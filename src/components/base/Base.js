import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

if (__INCLUDE_CSS__) {
  require('./Base.scss');
}

export default class Base extends Component {
  static propTypes = {
    Component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    className: PropTypes.string,
    hiddenUntil: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    space: PropTypes.oneOf(['none', 'tiny', 'small', 'medium', 'large']),
    textBreak: PropTypes.oneOf(['none', 'all', 'word']),
    textCase: PropTypes.oneOf(['upper', 'capital', 'lower']),
    textCenter: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    textColor: PropTypes.oneOf(['disabled', 'error', 'subtle', 'success', 'warning']),
    textEllipsis: PropTypes.bool,
    textLeft: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    textRight: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    textStrong: PropTypes.bool,
    textWeak: PropTypes.bool,
    theme: PropTypes.oneOf(['light', 'dark']),
    visibleUntil: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
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
      theme,
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
      [`ax-theme--${theme}`]: theme,
      [`ax-visible-until--${visibleUntil}`]: visibleUntil,
    });

    return (
      <Component
          { ...rest }
          className={ classes }  />
    );
  }
}
