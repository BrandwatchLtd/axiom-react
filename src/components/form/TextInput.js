import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { TextInputIcon, findComponent } from 'bw-axiom';
import TextGroup from './TextGroup';
import './TextInput.css';

export default class TextInput extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.oneOf(['medium', 'large']),
    style: PropTypes.oneOf(['overlay']),
    valid: PropTypes.bool,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };

  static defaultProps = {
    size: 'medium',
  };

  constructor(props) {
    super(props);
    this.state = { hasFocus: false };
  }

  handleOnBlur() {
    const { onBlur = () => {} } = this.props;
    this.setState({ hasFocus: false });
    onBlur(...arguments);
  }

  handleOnFocus() {
    const { onFocus = () => {} } = this.props;
    this.setState({ hasFocus: true });
    onFocus(...arguments);
  }

  render() {
    const { children, disabled, valid, invalid, label, size, style, ...rest } = this.props;
    const { hasFocus } = this.state;
    const icon = findComponent(children, TextInputIcon);
    const iconContainerClasses = classnames('ax-input__container', {
      [`ax-input__container--${size}`]: size,
      [`ax-input__container--${style}`]: style,
      'ax-input__container--disabled': disabled,
      'ax-input__container--focused': hasFocus,
      'ax-input__container--valid': valid,
      'ax-input__container--invalid': invalid,
    });

    return (
      <TextGroup label={ label }>
        <div className={ iconContainerClasses }>
          { icon }
          <input
              type="text"
              { ...rest }
              className="ax-input"
              disabled={ disabled }
              onBlur={ () => this.handleOnBlur() }
              onFocus={ () => this.handleOnFocus() }
              ref="input"  />
        </div>
      </TextGroup>
    );
  }
}
