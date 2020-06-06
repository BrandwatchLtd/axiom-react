import { addParameters } from "@storybook/react";
import React from "react";
import axiomTheme from "./axiomTheme";
import { DocsPage, DocsContainer, Heading } from "@storybook/addon-docs/blocks";

const withThemeWrapper = (Story, context) => {
  const { theme } = context.globalArgs;
  const { fileName } = context.parameters;
  const componentFilePath = fileName.replace("stories.", "");
  const srcUrl = `https://github.com/BrandwatchLtd/axiom-react/tree/master/${componentFilePath}`;

  return (
    <div className={`ax-theme--${theme}`}>
      <a href={srcUrl} style={{ visibility: "hidden" }} id="the-link">
        SRC
      </a>
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
  source: {
    name: "Source",
    description: "link to component source",
    defaultValue: "https://github.com/BrandwatchLtd/axiom-react/tree/master/",
    toolbar: {
      icon: "github",
      items: [],
    },
  },
};

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  options: {
    initialActive: "addons",
    theme: axiomTheme,
    storySort: {
      method: "alphabetical",
      order: ["Introduction", "Getting Started", "Typography"],
    },
  },
});
