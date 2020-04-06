/* eslint-disable no-console */
import React from "react";
import ColorPicker from "./ColorPicker";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
  decorators: [withKnobs],
};

export function Default() {
  function colorSelectCallback(color) {
    console.log(`the color ${color} was selected`);
  }

  return (
    <ColorPicker
      onSelectColor={colorSelectCallback}
      blankOption={boolean("blankOption", false)}
    />
  );
}
