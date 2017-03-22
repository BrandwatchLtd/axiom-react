import React, { Component, PropTypes } from 'react';
import { Button, Icon } from 'bw-axiom';

export default class IconButton extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
  };

  static defaultProps = {
    size: 'medium',
  }

  render() {
    const { name, size, ...rest } = this.props;
    const sizeMap = {
      'small': '1rem',
      'medium': '2rem',
      'large': '3rem',
      'huge': '5rem',
    };

    return (
      <Button style="secondary" { ...rest } circular={ size }>
        <Icon name={ name } size={ sizeMap[size] } />
      </Button>
    );
  }
}
