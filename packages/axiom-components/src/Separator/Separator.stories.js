import React from "react";
import Separator from "./Separator";

export default {
  title: "Separator",
  component: Separator,
  decorators: [
    (storyFn) => (
      <div
        style={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
};

export function Default({ direction, borderStyle, ...args }) {
  return (
    <Separator direction={direction} borderStyle={borderStyle} {...args} />
  );
}

Default.argTypes = {
  direction: {
    control: { type: "select", options: ["horizontal", "vertical"] },
  },
  borderStyle: { control: { type: "select", options: ["solid", "dotted"] } },
};
