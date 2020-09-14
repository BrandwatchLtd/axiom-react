import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";
import Base from "../Base/Base";
import Modal from "../Modal/Modal";
import "./Dialog.css";

export default function Dialog({
  children,
  className,
  closeOnOverlayClick = true,
  onRequestClose,
  overlayShade,
  overlayTheme,
  padding = "x6",
  size,
  theme = "day",
  width,
  ...rest
}) {
  const classes = classnames(
    "ax-dialog",
    {
      "ax-dialog--fullscreen": size === "fullscreen",
      "ax-dialog--large": size === "large",
    },
    className
  );

  const modalPadding = size === "fullscreen" ? "x0" : padding;

  const mappedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type.displayName === "DialogHeader") {
        return React.cloneElement(child, {
          onRequestClose,
        });
      }
    }
    return child;
  });

  return (
    <Modal
      {...rest}
      closeOnOverlayClick={closeOnOverlayClick}
      onOverlayClick={onRequestClose}
      overlayShade={overlayShade}
      overlayTheme={overlayTheme}
      padding={modalPadding}
    >
      <Base className={classes} style={{ width }} theme={theme}>
        {mappedChildren}
      </Base>
    </Modal>
  );
}

Dialog.propTypes = {
  /** Content inside the Dialog */
  children: PropTypes.node,
  /** Class name to be appended to the element */
  className: PropTypes.string,
  /** Stops the dialog closing when the mask is clicked */
  closeOnOverlayClick: PropTypes.bool,
  /** Visibility toggle for the Dialog */
  isOpen: PropTypes.bool.isRequired,
  /** Callback for closing the Dialog by clicking on the overlay */
  onRequestClose: PropTypes.func.isRequired,
  /** Overlay shade */
  overlayShade: PropTypes.oneOf(["shade-1", "shade-2", "shade-3", "shade-4"]),
  /** Theme applied to the overlay */
  overlayTheme: PropTypes.oneOf(["day", "night"]),
  /** Padding around the modal */
  padding: PropTypes.oneOf(["x0", "x6", "x8", "x12", "x16"]),
  /** Toggle if the Dialog should be closed by pressing Esc */
  shouldCloseOnEsc: PropTypes.bool,
  /** Provides defaults for dialog and modal size*/
  size: PropTypes.oneOf(["large", "fullscreen"]),
  /** Theme of the dialog */
  theme: PropTypes.oneOf(["day", "night"]),
  /** Custom width for Dialog */
  width: PropTypes.string,
};
