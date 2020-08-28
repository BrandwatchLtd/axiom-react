import React, { useState } from "react";
import Select from "./Select";
import Form from "../Form/Form";

export default {
  title: "Select",
  component: Select,
};

const options = Array.from({ length: 50 }, (_, index) => ({
  id: index,
  name: `item-${index}`,
  value: `${index}`,
}));

const shortOptions = options.splice(1, 5);

export function Default(props) {
  const [selectedValue, setSelectedValue] = useState("5");

  return (
    <div style={{ width: "200px" }}>
      <Select
        {...props}
        options={shortOptions}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  );
}

Default.args = {
  label: "Items",
  placeholder: "Choose an Item",
  disabled: false,
};

export function InForm(props) {
  const [selectedValue, setSelectedValue] = useState("25");

  return (
    <Form>
      <Select
        {...props}
        label="Items"
        options={shortOptions}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </Form>
  );
}

export function AutoScrolls(props) {
  const [selectedValue, setSelectedValue] = useState("25");

  return (
    <Form>
      <Select
        {...props}
        label="Items"
        options={options}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </Form>
  );
}

export function InlineLabel(props) {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Select
      {...props}
      options={shortOptions}
      selectedValue={selectedValue}
      onChange={setSelectedValue}
    />
  );
}

InlineLabel.args = {
  label: "Items",
  placeholder: "Choose an Item",
  inlineLabel: true,
};

export function Disabled(props) {
  const [selectedValue, setSelectedValue] = useState("25");

  return (
    <Form>
      <Select
        {...props}
        disabled
        label="Items"
        options={shortOptions}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </Form>
  );
}

export function MultiSelect(props) {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item) => {
    const itemIdInt = parseInt(item.id);
    setSelectedItems((items) => {
      if (items.includes(itemIdInt))
        return items.filter((id) => id !== itemIdInt);

      return items.concat(item);
    });
  };

  return (
    <div style={{ width: "150px" }}>
      <Select
        {...props}
        multiSelect
        label="Items"
        options={options}
        selectedValue={selectedItems}
        onChange={toggleItem}
      />
    </div>
  );
}

const filterOptions = [
  {
    id: 1,
    name: "Afghanistan",
    value: "AF",
  },
  {
    id: 2,
    name: "India",
    value: "IN",
  },
  {
    id: 3,
    name: "Indonesia",
    value: "ID",
  },
];

export function Filter(props) {
  const [selectedValue, setSelectedValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(filterOptions);

  const filterFunction = (event) => {
    setFilteredOptions(
      filterOptions.filter((item) => item.name.startsWith(event.target.value))
    );
  };

  return (
    <div style={{ width: "200px" }}>
      <Select
        {...props}
        options={filteredOptions}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
        filterFunction={filterFunction}
        onClear={() => setSelectedValue("")}
      />
    </div>
  );
}

export function Small(props) {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div style={{ width: "150px" }}>
      <Select
        {...props}
        label="Items"
        options={shortOptions}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
        size="small"
      />
    </div>
  );
}

export function Medium(props) {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div style={{ width: "150px" }}>
      <Select
        {...props}
        label="Items"
        options={shortOptions}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
        size="medium"
      />
    </div>
  );
}

export function Large(props) {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div style={{ width: "150px" }}>
      <Select
        {...props}
        label="Items"
        options={shortOptions}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
        size="large"
      />
    </div>
  );
}
