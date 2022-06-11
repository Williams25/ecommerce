const path = require("path");

module.exports = {
  stories: [
    "../src/components/**/**.stories.@(js|jsx|ts|tsx)",
    "../src/layouts/**/**.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "storybook-color-picker",
    "storybook-addon-next-router",
    "@storybook/preset-scss"
  ],
  staticDirs: ["../public"],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto"
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../")
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: `${process.cwd()}/src`
    });
    return config;
  },

  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  }
};
