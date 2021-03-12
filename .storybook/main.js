const path = require('path');
const svgs = path.resolve(__dirname, '../src/assets/svg');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          // disable file loader for svgs from preset-create-react-app whitch override SB webpack configuration and broke svgs
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
    config.module.rules.push(
      {
        // rule for svgs from svg dricetory read as SVG Component
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        include: svgs,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
            },
          },
        ],
      },
      {
        // rule for svgs from images dricetory read as url for img tag
        exclude: svgs,
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      }
    );

    return config;
  },
};
