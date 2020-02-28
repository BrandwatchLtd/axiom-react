import React, { useContext } from "react";
import PropTypes from "prop-types";
import AlertBar from "../AlertBar/AlertBar";
import Strong from "../Typography/Strong";
import AlertDialogContext from "./AlertDialogContext";

export default function AlertDialogHeader(props) {
  const { onRequestClose, type } = useContext(AlertDialogContext);

  const { children, ...rest } = props;

  return (
    <AlertBar
      {...rest}
      className="ax-alert-dialog__header"
      onRemoveClick={onRequestClose}
      size="medium"
      type={type}
    >
      <Strong>{children}</Strong>
    </AlertBar>
  );
}

AlertDialogHeader.propTypes = {
  /** Header content inside the AlertDialog, a good place for a title */
  children: PropTypes.node.isRequired,
};
