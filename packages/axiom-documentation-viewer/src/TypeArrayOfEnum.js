import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Select,
  SelectOptionGroup,
  SelectOption,
} from '@brandwatch/axiom-components';

function isSelected(values, val) {
  return Array.isArray(values) && values.filter(v => v === val).length > 0;
}

function withOrWithout(values = [], val) {
  return isSelected(values, val)
    ? values.filter(v => v !== val)
    : [...values, val];
}

export default class TypeArrayOfEnum extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    value: PropTypes.array,
    values: PropTypes.array.isRequired,
  };

  render() {
    const { setValue, value, values } = this.props;

    return (
      <Select
        onChange={() => {}}
        onClear={() => setValue(undefined)}
        onSelect={val => setValue(withOrWithout(value, val))}
        placeholder="Select prop values"
        readOnly
        selectedValue={value}
        value={Array.isArray(value) ? value.join(', ') : value || ''}
      >
        <SelectOptionGroup>
          {values.map(val => (
            <SelectOption key={val} multiSelect value={val}>
              {val.toString()}
            </SelectOption>
          ))}
        </SelectOptionGroup>
      </Select>
    );
  }
}
