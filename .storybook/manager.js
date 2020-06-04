import { addons } from "@storybook/addons";
import axiomTheme from "./axiomTheme";

let config = { theme: axiomTheme };

if (NODE_ENV === "production") {
  config = {
    ...config,
    previewTabs: {
      canvas: { hidden: true },
    },
  };
}

addons.setConfig(config);
