import React from "react";
import Flag from "./Flag";

export default {
  title: "Flag",
  component: Flag,
};

export function Default(props) {
  return <Flag alpha2="gb" size="12rem" {...props} />;
}
