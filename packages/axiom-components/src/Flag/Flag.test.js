import React from "react";
import renderer from "react-test-renderer";
import Flag from "./Flag";

const getComponent = (props = {}) => renderer.create(<Flag {...props} />);

describe("Flag", () => {
  it("renders with custom size", () => {
    const component = getComponent({ alpha2: "gb", size: "12rem" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
