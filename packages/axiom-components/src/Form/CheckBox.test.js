import React from "react";
import { render, screen } from "@testing-library/react";
import CheckBox from "./CheckBox";

const renderComponent = (props = {}) =>
  render(<CheckBox {...props}>Lorem ipsum</CheckBox>);

describe("CheckBox", () => {
  it("renders with disabled", () => {
    renderComponent({ disabled: true });

    expect(screen.getByRole("checkbox", { disabled: true })).toBeDefined();
  });

  it("renders with invalid", () => {
    renderComponent({ invalid: true });

    expect(screen.getByRole("checkbox", { invalid: true })).toBeDefined();
  });

  it("renders with indeterminate", () => {
    renderComponent({ indeterminate: true });

    expect(screen.getByRole("checkbox", { checked: "mixed" })).toBeDefined();
  });

  it("renders with indeterminate and checked", () => {
    renderComponent({ indeterminate: true, checked: true });

    expect(screen.getByRole("checkbox", { checked: true })).toBeDefined();
  });
});
