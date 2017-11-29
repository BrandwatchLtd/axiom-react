import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../button/Button';

export const TextInputButtonRef = 'TextInputButton';

export default class TextInputButton extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    size: PropTypes.string,
  }

  static typeRef = TextInputButtonRef;

  render() {
    const { children, ...rest } = this.props;
    return (
      <span className="ax-input__button">
        <Button { ...rest } joinedLeft size={ this.context.size }>
          { children }
        </Button>
      </span>
    );
  }
}
