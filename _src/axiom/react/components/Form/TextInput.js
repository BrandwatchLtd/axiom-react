import React, { Component, cloneElement } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName, findComponent } from '../../utils/components';
import { blacklist } from '../../utils/props';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export class TextInput extends Component {
  static propTypes = {
    children: { node: true },
    invalid: { bool: true },
    thinking: { bool: true },
    valid: { bool: true },
  };

  getIcon(defaultIcon) {
    const { valid, invalid, thinking } = this.props;

    if (valid) return 'check';
    if (invalid) return 'times';
    if (thinking) return 'circle-o-notch';

    return defaultIcon;
  }

  render() {
    const { className, children, valid, invalid, thinking } = this.props;
    const button = findComponent(children, Button);
    const icon = findComponent(children, Icon);
    const classes = classnames(className,
      'ax-input__group', {
        'ax-input--valid': valid === true,
        'ax-input--invalid': invalid === true,
      }
    );

    return (
      <label className={ classes }>
        <div className="ax-input__button-container">
          <div className="ax-input__icon-container">
            <input
                className="ax-input" { ...blacklist(this.props, ['children', 'className']) }
                ref="input"  />

            { do {
              if (icon) {
                <div className="ax-input__icon">
                  { cloneElement(icon, {
                    className: classnames({ 'ax-icon-spin': thinking }),
                    name: this.getIcon(icon.props.name),
                    size: 'lg',
                  }) }
                </div>
              }
            } }
          </div>

          { do {
            if (button) {
              cloneElement(button, {
                className: 'ax-input__button',
              })
            }
          } }
        </div>
      </label>
    );
  }
}

export default enhance(TextInput)(
  addPropTypes('global'),
  addClassName('global'),
);
