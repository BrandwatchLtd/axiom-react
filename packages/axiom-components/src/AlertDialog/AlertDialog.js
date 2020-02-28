import PropTypes from "prop-types";
import React from "react";
import Base from "../Base/Base";
import Modal from "../Modal/Modal";
import AlertDialogContext from "./AlertDialogContext";
import "./AlertDialog.css";

export default function AlertDialog({
  children,
  onRequestClose,
  type = "info",
  ...rest
}) {
  return (
    <Modal {...rest} onOverlayClick={onRequestClose} overlayShade={null}>
      <Base className="ax-alert-dialog">
        <AlertDialogContext.Provider
          value={{
            onRequestClose,
            type,
          }}
        >
          {children}
        </AlertDialogContext.Provider>
      </Base>
    </Modal>
  );
}

AlertDialog.propTypes = {
  children: PropTypes.node.isRequired,
  /** Visibility toggle for the AlertDialog */
  isOpen: PropTypes.bool.isRequired,
  /** Callback for closing the AlertDialog by clicking on the overlay */
  onRequestClose: PropTypes.func.isRequired,
  /** Toggle if the AlertDialog should be closed by pressing Esc */
  shouldCloseOnEsc: PropTypes.bool,
  /** Alert type */
  type: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired,
};
