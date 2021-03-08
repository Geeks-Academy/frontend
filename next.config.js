const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['pixabay.com'],
  },
});
