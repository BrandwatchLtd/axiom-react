import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Icon, Link } from 'bw-axiom';

export default class TextInputIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render () {
    const { name } = this.props;

    return (
      <span className="ax-input__icon">
        <Link { ...this.props } style="subtle">
          <Icon name={ name }  size="1rem" />
        </Link>
      </span>
    );
  }
}
