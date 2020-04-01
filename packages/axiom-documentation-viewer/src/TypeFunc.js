import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Toggle } from '@brandwatch/axiom-components';

export default class TypeFunc extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.bool,
  };

  render() {
    const { disabled, required, setValue, value } = this.props;

    if (required) {
      return null;
    }

    return (
      <Toggle
        disabled={disabled}
        onToggle={() => setValue(value ? false : true)}
        toggled={!!value}
      >
        Included
      </Toggle>
    );
  }
}
