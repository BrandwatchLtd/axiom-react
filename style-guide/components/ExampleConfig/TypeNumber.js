import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput } from 'bw-axiom';

export default class TypeNumber extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    value: PropTypes.number,
  };

  render() {
    const { value, setValue } = this.props;

    return (
      <TextInput
          onChange={ (e) => setValue(e.target.value ? parseFloat(e.target.value)  : undefined) }
          placeholder="Set prop number..."
          value={ value === undefined ? '' : value } />
    );
  }
}
