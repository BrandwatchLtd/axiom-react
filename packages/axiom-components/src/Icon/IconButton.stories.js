import React from "react";
import IconButton from "./IconButton";

export default {
  title: "IconButton",
  component: IconButton,
};

export function Default({ name, size, buttonStyle, iconColor }) {
  return (
    <IconButton
      name={name}
      size={size}
      buttonStyle={buttonStyle}
      iconColor={iconColor}
    />
  );
}

Default.args = { name: "cross" };

export function MenuOpen() {
  return <IconButton name="ellipsis" aria-label="open" />;
}
