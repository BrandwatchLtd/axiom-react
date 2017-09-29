import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import './ColorPickerOption.css';

export default class ColorPickerOption extends Component {
  static propTypes = {
    color: PropTypes.oneOf([
      'rose',
      'pink',
      'purple',
      'lilac',
      'blue',
      'teal',
      'green',
      'chartreuse',
      'amber',
      'orange',
      'brown',
      'grey',
    ]),
    disabled: PropTypes.bool,
    size: PropTypes.string,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.boundHandleClick = this.handleClick.bind(this);
  }

  static contextTypes = {
    closeDropdown: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    size: '.75rem',
  };

  handleClick(...args) {
    const { closeDropdown } = this.context;
    const { disabled, onClick } = this.props;

    if (closeDropdown && !disabled) {
      closeDropdown();
    }

    if (onClick) {
      onClick(...args);
    }
  }

  render() {
    const { color = 'empty', disabled, onClick, size, ...rest } = this.props;
    const classes = classnames('ax-color-picker__option', `ax-color-picker__option--${color}`, {
      'ax-color-picker__option--clickable': onClick && !disabled,
      'ax-color-picker__option--disabled': disabled,
    });

    return (
      <Base
          { ...rest }
          className={ classes }
          onClick={ this.boundHandleClick }
          style={ { height: size, width: size } } />
    );
  }
}
