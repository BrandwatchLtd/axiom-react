import React from "react";
import AlertIcon from "./AlertIcon";

export default {
  title: "AlertIcon",
  component: AlertIcon,
};

export function Default({ size, style, type }) {
  return <AlertIcon size={size} style={style} type={type} />;
}

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

export function Tiny() {
  return <AlertIcon size="tiny" />;
}

export function Small() {
  return <AlertIcon size="small" />;
}

export function Medium() {
  return <AlertIcon size="medium" />;
}

export function Large() {
  return <AlertIcon size="large" />;
}
