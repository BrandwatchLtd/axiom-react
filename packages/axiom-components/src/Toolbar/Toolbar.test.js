import React from "react";
import renderer from "react-test-renderer";
import Tool from "./Tool";
import Toolbar from "./Toolbar";

const getComponent = () =>
  renderer.create(
    <Toolbar>
      <Tool>Test</Tool>
    </Toolbar>
  );

describe("Toolbar", () => {
  it("renders", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
