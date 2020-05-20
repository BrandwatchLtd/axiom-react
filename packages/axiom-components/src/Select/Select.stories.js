import React from "react";
import Select from "./Select";
import SelectOptionGroup from "./SelectOptionGroup";
import SelectOption from "./SelectOption";
import { useState } from "react";

export default {
  title: "Select",
  component: Select,
};
const options = [
  { label: "Apple", value: "ap" },
  { label: "Banana", value: "ba" },
  { label: "Grape", value: "gr" },
  { label: "Grapefruit", value: "gra" },
  { label: "Mango", value: "ma" },
  { label: "Pear", value: "pe" },
  { label: "Peach", value: "pa" },
  { label: "Pineapple", value: "pi", disabled: true },
  { label: "Plum", value: "pl" },
];

export function Default() {
  const [selectedValue, setSelectedValue] = useState("");

  const onSelect = (newSelectedValue) => {
    setSelectedValue(
      options.find((option) => option.value === newSelectedValue).label
    );
  };

  return (
    <Select
      onChange={() => {}}
      onSelect={onSelect}
      placeholder="Select an item"
      value={selectedValue}
    >
      <SelectOptionGroup>
        <SelectOption value="ap">Apple</SelectOption>
        <SelectOption value="ba">Banana</SelectOption>
        <SelectOption value="gr">Grape</SelectOption>
        <SelectOption value="gra">Grapefruit</SelectOption>
        <SelectOption value="ma">Mango</SelectOption>
        <SelectOption value="pe">Pear</SelectOption>
        <SelectOption value="pa">Peach</SelectOption>
        <SelectOption disabled value="pi">
          Pineapple
        </SelectOption>
        <SelectOption value="pl">Plum</SelectOption>
      </SelectOptionGroup>
    </Select>
  );
}

export function WithDynamicSelect() {
  const [selectedValue, setSelectedValue] = useState();
  const [value, setValue] = useState();

  const onSelect = (newSelectedValue) => {
    setSelectedValue(
      options.find((option) => option.value === newSelectedValue).label
    );
  };

  const onChange = (event) => {
    const selectedOption = options.find(
      (option) =>
        option.label.toLowerCase() === event.target.value.toLowerCase()
    );

    setSelectedValue(selectedOption?.value);
    setValue(event.target.value);
  };

  const onClear = () => {
    setSelectedValue("");
    setValue("");
  };

  return (
    <Select
      onChange={onChange}
      onClear={onClear}
      onSelect={onSelect}
      placeholder="Select an item"
      value={value}
      selectedValue={selectedValue}
    >
      <SelectOptionGroup>
        <SelectOption value="ap">Apple</SelectOption>
        <SelectOption value="ba">Banana</SelectOption>
        <SelectOption value="gr">Grape</SelectOption>
        <SelectOption value="gra">Grapefruit</SelectOption>
        <SelectOption value="ma">Mango</SelectOption>
        <SelectOption value="pe">Pear</SelectOption>
        <SelectOption value="pa">Peach</SelectOption>
        <SelectOption disabled value="pi">
          Pineapple
        </SelectOption>
        <SelectOption value="pl">Plum</SelectOption>
      </SelectOptionGroup>
    </Select>
  );
}
