import { addons } from "@storybook/addons";
import axiomTheme from "./axiomTheme";

addons.setConfig({
  theme: axiomTheme,
  previewTabs: {
    canvas: { hidden: true },
  },
});
