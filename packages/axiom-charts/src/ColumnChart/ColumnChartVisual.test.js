import React from "react";
import renderer from "react-test-renderer";
import ColumnChartVisual from "./ColumnChartVisual";

const getComponent = (props = {}) =>
  renderer.create(<ColumnChartVisual {...props}>Lorem</ColumnChartVisual>);

describe("ColumnChartVisual", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
