
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: { importLoaders: 1 },
        postcssLoaderOptions: { implementation: require('postcss') }
      }
    }
  ],
  framework: { name: '@storybook/angular', options: {} },
};
export default config;
