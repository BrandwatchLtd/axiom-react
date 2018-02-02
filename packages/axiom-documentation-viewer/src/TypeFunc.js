import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Toggle } from '@brandwatch/axiom-components';

export default class TypeFunc extends Component {
  static propTypes = {
    required: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.bool,
  };

  render() {
    const { required, setValue, value } = this.props;

    if (required) {
      return null;
    }

    return (
      <Toggle
          onToggle={ () => setValue(value ? false : true) }
          toggled={ !!value }>
        Included
      </Toggle>
    );
  }
}
