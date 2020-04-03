import React from "react";
import renderer from "react-test-renderer";
import ButtonIcon from "./ButtonIcon";

const getComponent = (props = {}) =>
  renderer.create(<ButtonIcon {...props} name="twitter" />);

describe("ButtonIcon", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with end spacing", () => {
    const component = getComponent({ isEnd: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with start spacing", () => {
    const component = getComponent({ isStart: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
