import React from "react";
import renderer from "react-test-renderer";
import Transition from "./Transition";

const getComponent = (props = {}) =>
  renderer.create(
    <Transition height="4rem" width="4rem" {...props}>
      <div className="first" />
      <div className="second" />
    </Transition>
  );

describe("Transition", () => {
  it("renders first child", () => {
    const component = getComponent({ activeIndex: 0 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders second child", () => {
    const component = getComponent({ activeIndex: 1 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
