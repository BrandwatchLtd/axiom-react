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
  const [selectedValue, setSelectedValue] = useState(null);

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

export function Small(props) {
  const [selectedValue, setSelectedValue] = useState(null);

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
  const [selectedValue, setSelectedValue] = useState(null);

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
  const [selectedValue, setSelectedValue] = useState(null);

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

export function MutiSelect(props) {
  const [selectedItems, setSelectedItems] = useState([25, 22, 11]);

  const toggleItem = (itemId) => {
    const itemIdInt = parseInt(itemId);
    setSelectedItems((items) => {
      if (items.includes(itemIdInt)) return items.filter((id) => id !== itemIdInt);

      return items.concat(itemIdInt);
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

export function Filter(props) {
  const [selectedValue, setSelectedValue] = useState("5");

  return (
    <div style={{ width: "200px" }}>
      <Select
        {...props}
        options={shortOptions}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
        filter
      />
    </div>
  );
}
