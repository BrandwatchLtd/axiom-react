import React from "react";
import renderer from "react-test-renderer";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const getComponent = (props = {}) =>
  renderer.create(
    <Menu>
      <MenuItem {...props}>Lorem ipsum</MenuItem>
    </Menu>
  );

describe("MenuItem", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with active", () => {
    const component = getComponent({ active: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with disabled", () => {
    const component = getComponent({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Passes size to Menu Item", () => {
    const component = getComponent({ size: "medium" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
