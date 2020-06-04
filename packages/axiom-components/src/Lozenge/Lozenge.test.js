import React from "react";
import { render, screen } from "@testing-library/react";
import Lozenge from "./Lozenge";

const renderLozenge = ({ children = "default lozenge", ...rest } = {}) =>
  render(<Lozenge {...rest}>{children}</Lozenge>);

describe("Lozenge", () => {
  it("renders with defaultProps", () => {
    renderLozenge();
    expect(screen.getByRole("status")).toBeDefined();
  });

  it("renders child text", () => {
    const children = "Facebook";
    renderLozenge({ children });
    expect(screen.getByText(children)).toBeDefined();
  });

  describe("status", () => {
    describe("with a vaild status", () => {
      ["success", "warning", "error", "info", "loading"].forEach((status) => {
        it(`shows ${status} indicator`, () => {
          renderLozenge({ status });
          expect(screen.getByLabelText(status)).toBeDefined();
        });
      });
    });

    describe("with no status", () => {
      it("does not show an indicator", () => {
        const status = "none";
        renderLozenge({ status });
        expect(screen.queryByTestId("ax-status-lozenge__indicator")).toBeNull();
      });
    });
  });
});
