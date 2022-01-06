module.exports = {
  staticDirs: ['../projects/ds/src/docs/static'],
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "storybook-design-token",
    "@geometricpanda/storybook-addon-badges"
  ],
  "core": {
    "builder": "webpack5"
  }
}