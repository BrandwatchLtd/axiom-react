import React, { useState } from "react";
import AlertBar from "./AlertBar";

export default {
  title: "AlertBar",
  component: AlertBar,
};

export function Default({ children, onRemoveClick, size, type }) {
  return (
    <AlertBar onRemoveClick={onRemoveClick} size={size} type={type}>
      {children}
    </AlertBar>
  );
}

Default.story = { args: { children: "Alert Bar" } };

export function Info() {
  return <AlertBar type="info">Success AlertBar</AlertBar>;
}

export function Success() {
  return <AlertBar type="success">Success AlertBar</AlertBar>;
}

export function Error() {
  return <AlertBar type="error">Error AlertBar</AlertBar>;
}

export function Warning() {
  return <AlertBar type="warning">Warning AlertBar</AlertBar>;
}

export function Dismissible() {
  const [showAlert, setShowAlert] = useState(true);
  const hideAlert = () => setShowAlert(false);

  return (
    <React.Fragment>
      {showAlert && (
        <AlertBar onRemoveClick={hideAlert}>Info AlertBar</AlertBar>
      )}
    </React.Fragment>
  );
}
