import React from "react";
import renderer from "react-test-renderer";
import Tip from "./Tip";
import Base from "../Base/Base";

const getComponent = (props = {}) => (
  <Tip {...props}>
    <Base>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
      risus sit amet dolor tempus ornare ac eget dolor. Pellentesque ultrices
      iaculis nunc, tempor tempus magna vehicula ut. Interdum et malesuada fames
      ac ante ipsum primis in faucibus. Aliquam iaculis quam ut metus finibus,
      et facilisis risus porta.
    </Base>
  </Tip>
);

describe("Tip", () => {
  it("renders with defaultProps", () => {
    const tree = renderer.create(getComponent()).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without shadow", () => {
    const tree = renderer.create(getComponent({ shadow: false })).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("renders with color", () => {
    [
      "success",
      "warning",
      "error",
      "info",
      "shade-1",
      "shade-2",
      "shade-3",
      "shade-4",
    ].forEach((color) => {
      const component = getComponent({ color });
      const tree = renderer.create(component).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it("renders with position", () => {
    const component = getComponent({ position: "1rem" });
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("renders with direction", () => {
    ["top", "bottom", "right", "left"].forEach((direction) => {
      it(direction, () => {
        const component = getComponent({ direction });
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
