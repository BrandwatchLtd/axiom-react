/* eslint-disable no-console */
import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

export default {
  title: "ColorPicker",
  component: ColorPicker,
};

export function Default(args) {
  const [selectedColor, setSelectedColor] = useState();
  return (
    <ColorPicker
      selected={selectedColor}
      {...args}
      onSelectColor={(color) => setSelectedColor(color)}
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
