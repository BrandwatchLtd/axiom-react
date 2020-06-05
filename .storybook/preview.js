import { addParameters } from "@storybook/react";
import React from "react";
import axiomTheme from "./axiomTheme";

const withThemeWrapper = (Story, context) => {
  const { theme } = context.globalArgs;

  return (
    <div className={`ax-theme--${theme}`}>
      <Story {...context} />
    </div>
  );
};

export const decorators = [withThemeWrapper];

export const globalArgTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "day",
    toolbar: {
      icon: "eye",
      items: [
        { value: "day", title: "Day theme" },
        { value: "night", title: "Night theme" },
      ],
    },
  },
};

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
