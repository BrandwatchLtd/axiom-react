import React from "react";
import renderer from "react-test-renderer";
import ChartTableAxisTitle from "./ChartTableAxisTitle";

const getComponent = (props = {}) =>
  renderer.create(
    <ChartTableAxisTitle {...props}>Lorem Ipsum</ChartTableAxisTitle>
  );

describe("ChartTableAxisTitle", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
