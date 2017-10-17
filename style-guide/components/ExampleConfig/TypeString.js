import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput } from 'bw-axiom';

export default class TypeString extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  static defaultProps = {
    value: '',
  };

  render() {
    const { value, setValue } = this.props;

    return (
      <TextInput
          onChange={ (e) => setValue(e.target.value) }
          placeholder="Set prop text..."
          value={ value } />
    );
  }
}
