import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

const getComponent = (props = {}) =>
  renderer.create(
    <ButtonGroup {...props}>
      <Button>Lorem ipsum</Button>
    </ButtonGroup>
  );

describe("ButtonGroup", () => {
  it("renders with defaultProps", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
