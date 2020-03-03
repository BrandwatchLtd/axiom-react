import React, { useState } from 'react';
import Select from './Select';
import SelectOption from './SelectOption';
import SelectOptionGroup from './SelectOptionGroup';

export default {
  title: 'Select',
  component: Select,
};

const options = [
  { label: 'Apple', value: 'ap' },
  { label: 'Banana', value: 'ba' },
  { label: 'Grape', value: 'gr' },
  { label: 'Grapefruit', value: 'gra' },
  { label: 'Mango', value: 'ma' },
  { label: 'Pear', value: 'pe' },
  { label: 'Peach', value: 'pa' },
  { label: 'Pineapple', value: 'pi', disabled: true },
  { label: 'Plum', value: 'pl' },
];

export function Default() {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  function handleChange({ target }) {
    const selectedOption = options.find(
      o => o.label.toLowerCase() === target.value.toLowerCase()
    );
    setValue(target.value);
    setSelectedValue(selectedOption ? selectedOption.value : '');
  }

  function handleClear() {
    setValue('');
    setSelectedValue('');
  }

  function handleSelect(newSelectedValue) {
    const newValue = options.find(o => o.value === newSelectedValue).label;
    setValue(newValue);
    setSelectedValue(newSelectedValue);
  }

  return (
    <Select
        onChange={ handleChange }
        onClear={ value.length ? handleClear : undefined }
        onSelect={ handleSelect }
        placeholder="Select an item"
        selectedValue={ selectedValue }
        value={ value }>
      <SelectOptionGroup>
        { options.map(({ label, value, ...rest }) => (
          <SelectOption key={ value } value={ value } { ...rest }>
            { label }
          </SelectOption>
        )) }
      </SelectOptionGroup>
    </Select>
  );
}
