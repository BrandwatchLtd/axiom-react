import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput } from '@brandwatch/axiom-components';

export default class TypeNumber extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      text: props.value,
    };
  }

  handleOnChange(e) {
    const { setValue } = this.props;

    if (e.target.value && !isNaN(parseFloat(e.target.value))) {
      setValue(parseFloat(e.target.value));
    }
  }

  render() {
    const { disabled, value } = this.props;

    return (
      <TextInput
          defaultValue={ value }
          disabled={ disabled }
          onChange={ (e) => this.handleOnChange(e) }
          placeholder="Set prop number..." />
    );
  }
}
