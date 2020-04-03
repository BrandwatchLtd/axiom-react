import React from "react";
import renderer from "react-test-renderer";
import Chart from "./Chart";

const getComponent = (props = {}) =>
  renderer.create(<Chart {...props}>Lorem</Chart>);

describe("Chart", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with minimumHeight", () => {
    const component = getComponent({ minimumHeight: "10rem" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
