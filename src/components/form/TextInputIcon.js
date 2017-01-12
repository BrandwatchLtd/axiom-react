import React, { Component, PropTypes } from 'react';
import { Icon, Link } from 'bw-axiom';

export default class TextInputIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render () {
    const { name, ...rest } = this.props;

    return (
      <span className="ax-input__icon">
        <Link { ...rest } inheritColor={ true }>
          <Icon name={ name } size="0.75rem" />
        </Link>
      </span>
    );
  }
}
