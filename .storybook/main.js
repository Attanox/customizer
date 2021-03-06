const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: ['file-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.push({
      test: /\.(hdr|hdri)$/,
      use: ['file-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
  staticDirs: ['../static'],
};
