import React from "react";
import renderer from "react-test-renderer";
import Toggle from "./Toggle";

const onToggle = () => {};

describe("Toggle", () => {
  it("renders as toggled", () => {
    const tree = renderer
      .create(<Toggle onToggle={onToggle} toggled />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders as not toggled", () => {
    const tree = renderer
      .create(<Toggle onToggle={onToggle} toggled={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with disabled", () => {
    const tree = renderer
      .create(<Toggle disabled onToggle={onToggle} toggled={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with label children", () => {
    const tree = renderer
      .create(
        <Toggle onToggle={onToggle} toggled={false}>
          Toggle
        </Toggle>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with size small", () => {
    expect(
      renderer
        .create(<Toggle onToggle={onToggle} size="small" toggled={false} />)
        .toJSON()
    ).toMatchSnapshot();
  });

  it("renders with size medium", () => {
    expect(
      renderer
        .create(<Toggle onToggle={onToggle} size="medium" toggled={false} />)
        .toJSON()
    ).toMatchSnapshot();
  });

  it("renders with align left", () => {
    expect(
      renderer
        .create(<Toggle align="left" onToggle={onToggle} toggled={false} />)
        .toJSON()
    ).toMatchSnapshot();
  });

  it("renders with align right", () => {
    expect(
      renderer
        .create(<Toggle align="right" onToggle={onToggle} toggled={false} />)
        .toJSON()
    ).toMatchSnapshot();
  });

  it("renders with align full", () => {
    expect(
      renderer
        .create(<Toggle align="full" onToggle={onToggle} toggled={false} />)
        .toJSON()
    ).toMatchSnapshot();
  });
});
