/* eslint-disable no-console */
import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "ColorPicker",
  component: ColorPicker,
  decorators: [withKnobs],
};

export function Default() {
  const [selectedColor, setSelectedColor] = useState();
  return (
    <ColorPicker
      selected={selectedColor}
      onSelectColor={(color) => setSelectedColor(color)}
      blankOption={boolean("false")}
    />
  );
}

export function ResetChoice() {
  const [selectedColor, setSelectedColor] = useState();

  return (
    <ColorPicker
      selected={selectedColor}
      onSelectColor={(color) => setSelectedColor(color)}
      blankOption={true}
    />
  );
}
