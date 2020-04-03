import React from "react";
import renderer from "react-test-renderer";
import BulletBars from "./BulletBars";

function getComponent(props = {}) {
  props.values = [
    { color: "giant-leap", value: 10 },
    { color: "critical-mass", value: 50 },
  ];

  return renderer.create(<BulletBars {...props}></BulletBars>);
}

describe("BulletBars", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with the correct label", () => {
    const props = {
      barLabel: 1,
      showBarLabel: true,
    };
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
