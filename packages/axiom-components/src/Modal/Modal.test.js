import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

const renderModal = ({ isOpen = true, ...rest } = {}) =>
  render(<Modal isOpen={isOpen} {...rest} />);

describe("Modal", () => {
  describe("when is open is true", () => {
    it("renders Modal", () => {
      renderModal();
      expect(screen.getByRole("dialog")).toBeDefined();
    });
  });

  describe("when is open is false", () => {
    it("does not render Modal", () => {
      renderModal({ isOpen: false });
      expect(screen.queryByRole("dialog")).toBeNull();
    });
  });

  describe("shouldCloseOnEsc", () => {
    describe("when shouldCloseOnEsc is true", () => {
      it("closes Modal", () => {
        const onOverlayClickSpy = jest.fn();

        const { container } = renderModal({
          shouldCloseOnEsc: true,
          onOverlayClick: onOverlayClickSpy,
        });

        userEvent.type(container, "{esc}");

        expect(onOverlayClickSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
