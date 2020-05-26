import React, { useState } from "react";
import Slider from "./Slider";

export default {
  title: "Slider",
  component: Slider,
};

export function Default() {
  const [value, setValue] = useState(50);

  return (
    <Slider
      max={200}
      min={0}
      onChange={(value) => setValue(value)}
      size="small"
      value={value}
    />
  );
}
