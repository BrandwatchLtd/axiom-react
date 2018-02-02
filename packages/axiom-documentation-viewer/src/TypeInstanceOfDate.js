import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DatePicker, TextInput, TextInputIcon } from '@brandwatch/axiom-components';

export default class TypeInstanceOfDate extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
  };

  render() {
    const { value, setValue } = this.props;

    return (
      <DatePicker
          onSelect={ ({ date }) => setValue(date) }
          selectedDate={ typeof value === 'string' ? new Date(value) : value }>
        <TextInput
            placeholder="Select a date"
            readOnly={ true }
            value={ value ? value.toString() : '' }>
          <TextInputIcon name="chevron-down" />
        </TextInput>
      </DatePicker>
    );
  }
}
