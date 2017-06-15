import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput } from 'bw-axiom';

export default class TypeNumber extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    value: PropTypes.number,
  };

  static defaultProps = {
    value: 0,
  };

  render() {
    const { value, setValue } = this.props;

    return (
      <TextInput
          onChange={ (e) => setValue(parseInt(e.target.value || 0, 10))  }
          placeholder="Set prop number..."
          value={ value || '' } />
    );
  }
}
