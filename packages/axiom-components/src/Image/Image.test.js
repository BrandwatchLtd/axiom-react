import React from "react";
import renderer from "react-test-renderer";
import Image from "./Image";

const getComponent = (props = {}) =>
  renderer.create(<Image src="/image.png" {...props} />);

describe("Image", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("renders with border", () => {
    ["small", "large"].forEach((border) => {
      it(border, () => {
        const component = getComponent({ border });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("renders with shape", () => {
    ["circle", "rounded", "square"].forEach((shape) => {
      it(shape, () => {
        const component = getComponent({ shape });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("with shape circle", () => {
    it("uses width for both width and height when given", () => {
      const component = getComponent({ shape: "circle", width: "3rem" });
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("uses height for both width and height when given", () => {
      const component = getComponent({ shape: "circle", height: "3rem" });
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
