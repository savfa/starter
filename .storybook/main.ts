import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|ts)"],
  addons: [
    "@storybook/addon-links", // опционально
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite", // 👈 The builder enabled here.
  },
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import("vite");

    if (configType === "DEVELOPMENT") {
      // Your development configuration goes here
    }
    if (configType === "PRODUCTION") {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      // Your environment configuration here
    });
  },
};

export default config;
