import React from "react";
import renderer from "react-test-renderer";
import ProgressInfinite from "./ProgressInfinite";

const getComponent = (props = {}) =>
  renderer.create(<ProgressInfinite {...props} />);

describe("ProgressInfinite", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("renders with color", () => {
    ["white", "subtle"].forEach((color) => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
