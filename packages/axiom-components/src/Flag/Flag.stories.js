import React from "react";
import Flag from "./Flag";

export default {
  title: "Components/Flag",
  component: Flag,
};

export function Default() {
  return <Flag alpha2="gb" assetsUrl="/" size="12rem" />;
}
