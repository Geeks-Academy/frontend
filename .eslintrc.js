module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  env: {
    jest: true,
    browser: true,
  },
  globals: {
    document: true,
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
  },
};
