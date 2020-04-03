import React from "react";
import renderer from "react-test-renderer";
import ChartTableVisual from "./ChartTableVisual";

const getComponent = (props = {}) =>
  renderer.create(<ChartTableVisual {...props}>Lorem Ipsum</ChartTableVisual>);

describe("ChartTableVisual", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
