import React from "react";
import renderer from "react-test-renderer";
import Select from "./Select";
import SelectOption from "./SelectOption";

const getComponent = (props = {}) =>
  renderer.create(
    <Select {...props}>
      <SelectOption value="1" />
      <SelectOption value="2" />
      <SelectOption value="3" />
    </Select>
  );

describe("Select", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with a selected value", () => {
    const component = getComponent({ selectedValue: "2" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
