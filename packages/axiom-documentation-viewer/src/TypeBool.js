import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Toggle } from '@brandwatch/axiom-components';

export default class TypeBool extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    value: PropTypes.bool,
  };

  static defaultProps = {
    value: false,
  };

  render() {
    const { value, setValue } = this.props;

    return (
      <Toggle
          onToggle={ () => setValue(!value) }
          toggled={ value }>
        { value.toString() }
      </Toggle>
    );
  }
}
