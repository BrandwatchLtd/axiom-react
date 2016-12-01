import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { findComponent } from '../_utils/components';
import ButtonGroup from '../button/ButtonGroup';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import TextGroup from './TextGroup';

if (__INCLUDE_CSS__) {
  require('./TextInput.scss');
}

export default class TextInput extends Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    style: PropTypes.oneOf(['translucent']),
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };

  componentWillMount() {
    this.setState({ hasFocus: false });
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
    const { className, children, label, style, ...rest } = this.props;
    const { hasFocus } = this.state;
    const button = findComponent(children, Button);
    const icon = findComponent(children, Icon);

    const textGroupClasses = classnames(className, {
      [`ax-input__group--${style}`]: style,
    });

    const iconContainerClasses = classnames('ax-input__icon-container', {
      'ax-input__icon-container--focused': hasFocus,
    });

    return (
      <TextGroup className={ textGroupClasses } label={ label }>
        <div className="ax-input__button-container">
          <div className={ iconContainerClasses }>
            <input
                type="text"
                { ...rest }
                className="ax-input"
                onBlur={ ::this.handleOnBlur }
                onFocus={ ::this.handleOnFocus }
                ref="input"  />

            { do { if (icon) {
              <div className="ax-input__icon">
                { icon }
              </div>;
            } } }
          </div>

          { do { if (button) {
            <div className="ax-input__button">
              <ButtonGroup>
                { button }
              </ButtonGroup>
            </div>;
          } } }
        </div>
      </TextGroup>
    );
  }
}
