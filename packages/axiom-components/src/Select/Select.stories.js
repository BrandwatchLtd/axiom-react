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

export function Default(props) {
  const [selectedValue, setSelectedValue] = useState("25");

  return (
    <div style={{ width: "200px" }}>
      <Select
        {...props}
        options={options}
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
        options={options}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </Form>
  );
}
