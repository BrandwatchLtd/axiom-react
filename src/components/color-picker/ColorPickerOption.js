import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
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
    size: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    size: '.75rem',
  };

  render() {
    const { color = 'empty', onClick, size, ...rest } = this.props;
    const borderWidth = `${parseFloat(size) / 4}rem`;
    const classes = classnames('ax-color-picker__option', `ax-color-picker__option--${color}`, {
      'ax-color-picker__option--clickable': onClick,
    });

    return (
      <Base
          { ...rest }
          className={ classes }
          onClick={ onClick }
          style={ { borderWidth, height: size, width: size } } />
    );
  }
}
