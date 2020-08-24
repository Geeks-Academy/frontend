export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyles from '../src/styles/GlobalStyles';

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
));
