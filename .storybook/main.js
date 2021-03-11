const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['svg'],
        },
      },
    },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    const nextConfig = require('../next.config.js');

    console.log(nextConfig);

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      exclude: path.resolve(__dirname, 'src/assets/images'),
      use: ['@svgr/webpack'],
    });

    // return {...nextConfig.webpack, ...config };

    return config;
  },
};
