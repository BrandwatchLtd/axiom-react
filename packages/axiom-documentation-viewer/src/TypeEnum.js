import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Select,
  SelectOptionGroup,
  SelectOption,
} from '@brandwatch/axiom-components';

export default class TypeEnum extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    value: PropTypes.any,
    values: PropTypes.array.isRequired,
  };

  render() {
    const { setValue, value, values } = this.props;

    return (
      <Select
        onChange={() => {}}
        onClear={() => setValue(undefined)}
        onSelect={value => setValue(value)}
        placeholder="Select a prop value"
        readOnly
        selectedValue={value}
        value={value}
      >
        <SelectOptionGroup>
          {values.map(val => (
            <SelectOption key={val} value={val}>
              {val.toString()}
            </SelectOption>
          ))}
        </SelectOptionGroup>
      </Select>
    );
  }
}
