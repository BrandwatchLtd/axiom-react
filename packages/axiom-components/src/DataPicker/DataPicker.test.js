import React from "react";
import renderer from "react-test-renderer";
import DataPicker from "./DataPicker";
import DataPickerDropdown from "./DataPickerDropdown";
import DataPickerMeta from "./DataPickerMeta";

const getComponent = (props = {}) =>
  renderer.create(
    <DataPicker {...props} placeholder="Lorem ipsum">
      {props.children || [
        <DataPickerDropdown key="dropdown" />,
        <DataPickerMeta key="meta" />,
      ]}
    </DataPicker>
  );

describe("DataPicker", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with just DataPickerDropdown", () => {
    const component = getComponent({
      children: <DataPickerDropdown />,
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with just DataPickerMeta", () => {
    const component = getComponent({
      children: <DataPickerMeta />,
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with onSelectColor", () => {
    const component = getComponent({ onSelectColor: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with value", () => {
    const component = getComponent({ value: "Dolar amor" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
