import React, { Component, PropTypes } from 'react';
import Icon from '../icon/Icon';
import Link from '../typography/Link';

export default class TextInputIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render () {
    const { name, ...rest } = this.props;

    return (
      <span className="ax-input__icon">
        <Link { ...rest } inheritColor={ true }>
          <Icon name={ name } size={ 12 } />
        </Link>
      </span>
    );
  }
}
