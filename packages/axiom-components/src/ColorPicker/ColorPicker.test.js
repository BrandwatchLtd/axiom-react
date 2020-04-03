import React from "react";
import renderer from "react-test-renderer";
import ColorPicker from "./ColorPicker";

const getComponent = (props = {}) =>
  renderer.create(<ColorPicker {...props} onSelectColor={() => {}} />);

describe("ColorPicker", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with a different size", () => {
    const component = getComponent({ size: "3rem" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
