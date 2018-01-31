import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DropdownMenuItem from '../Dropdown/DropdownMenuItem';

export default class SelectOption extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    value: PropTypes.any.isRequired,
  };

  static contextTypes = {
    selectedOptionValue: PropTypes.any,
    handleSelectOption: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onClick, value } = this.props;

    this.context.handleSelectOption(value);
    if (onClick) onClick(event);
  }

  render() {
    const { children, value, ...props } = this.props;
    const { selectedOptionValue } = this.context;

    const selected =
      (Array.isArray(selectedOptionValue) && selectedOptionValue.indexOf(value) !== -1)
      || value === selectedOptionValue;

    return (
      <DropdownMenuItem
          { ...props }
          onClick={ this.handleClick }
          selected={ selected }>
        { children }
      </DropdownMenuItem>
    );
  }
}
