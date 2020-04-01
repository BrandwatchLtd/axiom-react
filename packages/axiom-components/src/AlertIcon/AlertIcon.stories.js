import React from "react";
import AlertIcon from "./AlertIcon";

export default {
  title: "Components/AlertIcon",
  component: AlertIcon,
};

export function Info() {
  return <AlertIcon>Info AlertIcon</AlertIcon>;
}

export function Success() {
  return <AlertIcon type="success">Success AlertIcon</AlertIcon>;
}

export function Error() {
  return <AlertIcon type="error">Error AlertIcon</AlertIcon>;
}

export function Warning() {
  return <AlertIcon type="warning">Warning AlertIcon</AlertIcon>;
}
