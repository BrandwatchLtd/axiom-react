import React from "react";
import renderer from "react-test-renderer";
import Badge from "./Badge";
import BadgeGroup from "./BadgeGroup";

const getComponent = (props = {}) =>
  renderer.create(
    <BadgeGroup {...props}>
      <Badge>Lorem ipsum</Badge>
    </BadgeGroup>
  );

describe("BadgeGroup", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
