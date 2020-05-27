import { addParameters } from "@storybook/react";
import axiomTheme from "./axiomTheme";

addParameters({
  options: {
    initialActive: "addons",
    theme: axiomTheme,
    storySort: {
      method: "alphabetical",
      order: ["Introduction", "Getting Started", "Typography"],
    },
  },
});
