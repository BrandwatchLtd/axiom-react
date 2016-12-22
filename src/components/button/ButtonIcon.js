import React, { Component, PropTypes } from 'react';
import Icon from '../icon/Icon';

export default class ButtonIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render () {
    const { name } = this.props;

    return (
      <span className="ax-button__icon">
        <Icon name={ name } />
      </span>
    );
  }
}
