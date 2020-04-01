import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextInput from '../Form/TextInput';
import TextInputIcon from '../Form/TextInputIcon';
import DropdownReactContext from '../Dropdown/DropdownReactContext';

export default class SelectInput extends Component {
  static propTypes = {
    children: PropTypes.node,
    /** SKIP */
    onFocus: PropTypes.func,
  };

  static contextType = DropdownReactContext;

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleKeyDown(event) {
    const { key } = event;
    const { closeDropdown, openDropdown } = this.context;

    switch (key) {
      case 'Enter':
        closeDropdown();
        break;
      case 'Tab':
        closeDropdown();
        break;
      default:
        openDropdown();
    }
  }

  handleFocus(event) {
    this.context.openDropdown();

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  render() {
    return (
      <TextInput
        {...this.props}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyDown}
      >
        <TextInputIcon name="chevron-down" />
      </TextInput>
    );
  }
}
