import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { TextInputIconRef } from './TextInputIcon';
import TextGroup from './TextGroup';
import findComponent from '../../utils/findComponent';
import './TextInput.css';

export default class TextInput extends Component {
  static propTypes = {
    /** Optional TextInputIcon, all other children are ignored */
    children: PropTypes.node,
    /** Disables interactions and applies styling */
    disabled: PropTypes.bool,
    /** Applies styling to indicate the users input was invalid */
    invalid: PropTypes.bool,
    /** Descriptive label that is placed with the input field */
    label: PropTypes.string,
    /** Handler for when the input field is blurred */
    onBlur: PropTypes.func,
    /** Handler for when the input field is focused */
    onFocus: PropTypes.func,
    /**
     * Descriptive placeholder text that is displayed in the input field
     * when there is no value
     */
    placeholder: PropTypes.string,
    /** Size of the input field */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** SKIP */
    space: PropTypes.string,
    /** Visual style variations of the input field */
    style: PropTypes.oneOf(['overlay']),
    /** Type of the input field */
    type: PropTypes.oneOf(['password', 'text']),
    /** Applies styling to indicate the users input was valid */
    valid: PropTypes.bool,
    /** Value of the input field */
    value: PropTypes.any,
  };

  static defaultProps = {
    size: 'medium',
    type: 'text',
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
    const {
      children,
      disabled,
      valid,
      invalid,
      label,
      size,
      space,
      style,
      type,
      value,
      ...rest
    } = this.props;

    const { hasFocus } = this.state;
    const icon = findComponent(children, TextInputIconRef);
    const iconContainerClasses = classnames('ax-input__container', {
      [`ax-input__container--${size}`]: size,
      [`ax-input__container--${style}`]: style,
      'ax-input__container--disabled': disabled,
      'ax-input__container--focused': hasFocus,
      'ax-input__container--valid': valid,
      'ax-input__container--invalid': invalid,
    });

    return (
      <TextGroup label={ label } size={ size } space={ space }>
        <div className={ iconContainerClasses }>
          { icon }
          <input { ...rest }
              className="ax-input"
              disabled={ disabled }
              onBlur={ () => this.handleOnBlur() }
              onFocus={ () => this.handleOnFocus() }
              ref="input"
              type={ type }
              value={ value } />
        </div>
      </TextGroup>
    );
  }
}
