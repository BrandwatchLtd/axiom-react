/* eslint-disable no-console */
import React from "react";
import ColorPicker from "./ColorPicker";

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
};

export function Default() {
  function colorSelectCallback(color) {
    console.log(`the color ${color} was selected`);
  }

  return <ColorPicker onSelectColor={colorSelectCallback} />;
}
