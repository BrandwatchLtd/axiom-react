import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Toggle } from 'bw-axiom';

export default class TypeFunc extends Component {
  static propTypes = {
    propOptions: PropTypes.shape({
      included: PropTypes.bool,
    }).isRequired,
    required: PropTypes.bool,
    setOptionValue: PropTypes.func.isRequired,
    value: PropTypes.func,
  };

  render() {
    const { propOptions, required, setOptionValue, value } = this.props;
    const {
      included = !!value,
    } = propOptions;

    if (required) {
      return null;
    }

    return (
      <Toggle
          onToggle={ () => setOptionValue('included', !included) }
          toggled={ included }>
        Included
      </Toggle>
    );
  }
}
