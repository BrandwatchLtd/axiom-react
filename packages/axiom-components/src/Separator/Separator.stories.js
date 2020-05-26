import React from "react";
import Separator from "./Separator";
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: "Separator",
  component: Separator,
  decorators: [
    withKnobs,
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

export function Default() {
  return (
    <Separator
      direction={select("direction", ["horizontal", "vertical"], "horizontal")}
      borderStyle={select("borderStyle", ["solid", "dotted"], "solid")}
    />
  );
}
