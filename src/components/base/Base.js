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
    textBreak: PropTypes.oneOf(['none', 'all', 'word']),
    textCase: PropTypes.oneOf(['upper', 'capital', 'lower']),
    textCenter: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    textDisabled: PropTypes.bool,
    textEllipsis: PropTypes.bool,
    textInvalid: PropTypes.bool,
    textLeft: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    textRight: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    textStrong: PropTypes.bool,
    textSubtle: PropTypes.bool,
    textValid: PropTypes.bool,
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
      textBreak,
      textCase,
      textCenter,
      textDisabled,
      textEllipsis,
      textInvalid,
      textLeft,
      textRight,
      textStrong,
      textSubtle,
      textValid,
      textWeak,
      theme,
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
      'ax-text--ellipsis': textEllipsis === true,
      'ax-text--left': textLeft === true,
      [`ax-text--left--${textLeft}`]: textLeft && textLeft !== true,
      'ax-text--right': textRight === true,
      [`ax-text--right--${textRight}`]: textRight && textRight !== true,
      'ax-text--strong': textStrong === true,
      'ax-text--weak': textWeak === true,
      [`ax-visible-until--${visibleUntil}`]: visibleUntil,
      'ax-text--subtle': textSubtle,
      'ax-text--disabled': textDisabled,
      'ax-text--valid': textValid,
      'ax-text--invalid': textInvalid,
      [`ax-theme--${theme}`]: theme,
    });

    return (
      <Component
          { ...rest }
          className={ classes }  />
    );
  }
}
