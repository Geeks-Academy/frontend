const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  inlineImageLimit: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      exclude: path.resolve(__dirname, 'src/assets/images'),
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
