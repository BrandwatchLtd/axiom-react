import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput } from '@brandwatch/axiom-components';

export default class TypeString extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  static defaultProps = {
    value: '',
  };

  render() {
    const { value, setValue, disabled } = this.props;

    return (
      <TextInput
          disabled={ disabled }
          onChange={ (e) => setValue(e.target.value) }
          placeholder="Set prop text..."
          value={ value } />
    );
  }
}
