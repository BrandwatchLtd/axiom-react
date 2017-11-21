import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../button/Button';
import Icon from './Icon';

const sizeMap = {
  'small': '1rem',
  'medium': '2rem',
  'large': '3rem',
  'huge': '5rem',
};

export default class IconButton extends Component {
  static propTypes = {
    /** Name of the icon that will be displayed */
    name: PropTypes.string.isRequired,
    /** Size of the button and icon */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
  };

  static defaultProps = {
    size: 'medium',
  }

  render() {
    const { name, size, ...rest } = this.props;

    return (
      <Button style="secondary" { ...rest } shape="circle" size={ size }>
        <Icon name={ name } size={ sizeMap[size] } />
      </Button>
    );
  }
}
