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
    isTarget: PropTypes.bool,
    label: PropTypes.node,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    space: PropTypes.string,
    usageHint: PropTypes.node,
    usageHintPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  };

  static defaultProps = {
    size: 'medium',
    space: 'x4',
  };

  render() {
    const { children, isTarget, label, size, space, usageHint, usageHintPosition, ...rest } = this.props;

    const classes = classnames('ax-input__wrapper', {
      'ax-input__wrapper--target': isTarget,
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
        { children }
      </Base>
    );
  }
}
