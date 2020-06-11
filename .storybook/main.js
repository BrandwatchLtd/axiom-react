module.exports = {
  stories: ["../packages/**/*.stories.@(mdx|js)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y/register",
    "@storybook/addon-controls",
    "@storybook/addon-toolbars",
  ],
};
