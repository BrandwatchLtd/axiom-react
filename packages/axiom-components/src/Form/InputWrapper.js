import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import UsageHintComponent from '../UsageHint/UsageHint';
import './InputWrapper.css';
import classnames from 'classnames';

const labelSizeMap = {
  small: 'small',
  medium: 'body',
  large: 'large',
};

export default class InputWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    hasFocus: PropTypes.bool,
    inputType: PropTypes.string,
    invalid: PropTypes.bool,
    isTarget: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.node,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    space: PropTypes.string,
    style: PropTypes.string,
    usageHint: PropTypes.node,
    usageHintPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    valid: PropTypes.bool,
  };

  static defaultProps = {
    size: 'medium',
    space: 'x4',
  };

  render() {
    const { children, disabled, hasFocus, invalid, isTarget, isValid, label, size, space, style, usageHint, usageHintPosition, valid, ...rest } = this.props;
    const classes = classnames('ax-input__wrapper', {
      'ax-input__wrapper--target': isTarget,
    });

    const innerClasses = classnames('ax-input__icon-container', {
      [`ax-input__icon-container--${size}`]: size,
      [`ax-input__icon-container--${style}`]: style,
      'ax-input__icon-container--disabled': disabled,
      'ax-input__icon-container--focused': hasFocus,
      'ax-input__icon-container--valid': valid,
      'ax-input__icon-container--invalid': invalid || isValid === false,
    });

    return (
      <Base { ...rest }
          Component="label"
          className={ classes }
          space={ space }>
        {
          (label || usageHint) && (
            <Base className="ax-input__hint-wrapper" space="x2">
              {
                label && (
                  <Base className="ax-input__wrapper--label" textSize={ labelSizeMap[size] }>
                    { label }
                  </Base>
                )
              }

              {
                usageHint && (
                  <div className="ax-input__hint">
                    <UsageHintComponent position={ usageHintPosition } >
                      { usageHint }
                    </UsageHintComponent>
                  </div>
                )
              }
            </Base>
          )
        }
        <div className={ innerClasses }>
          { children }
        </div>
      </Base>
    );
  }
}
