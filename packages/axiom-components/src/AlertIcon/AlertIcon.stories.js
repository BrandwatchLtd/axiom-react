import React from "react";
import AlertIcon from "./AlertIcon";

export default {
  title: "AlertIcon",
  component: AlertIcon,
};

export function Info() {
  return <AlertIcon />;
}

export function Success() {
  return <AlertIcon type="success" />;
}

export function Error() {
  return <AlertIcon type="error" />;
}

export function Warning() {
  return <AlertIcon type="warning" />;
}
