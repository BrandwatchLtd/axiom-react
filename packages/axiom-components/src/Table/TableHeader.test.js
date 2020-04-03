import React from "react";
import renderer from "react-test-renderer";
import TableHeader from "./TableHeader";
import TableHeaderLabel from "./TableHeaderLabel";

const getComponent = () =>
  renderer.create(
    <TableHeader>
      <TableHeaderLabel>Test</TableHeaderLabel>
    </TableHeader>
  );

describe("TableHeader", () => {
  it("renders", () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
