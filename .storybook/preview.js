import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyles from '../src/styles/GlobalStyles';

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      mobile: {
        name: 'iPhone X',
        styles: {
          width: '375px',
          height: '812px',
        },
      },
      tablet: {
        name: 'iPad',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      laptop: {
        name: 'Laptop',
        styles: {
          width: '1024px',
          height: '768px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '1024px',
        },
      },
    },
  },
};

// Replace next/image for Storybook (currently, we don't use this solution)
//
// import * as nextImage from 'next/image';
//
// Object.defineProperty(nextImage, 'default', {
//   configurable: true,
//   value: (props) => {
//     const { width, height } = props
//     const ratio = (height / width) * 100
//     return (
//       <div
//         style={{
//           paddingBottom: `${ratio}%`,
//           position: 'relative',
//         }}>
//         <img
//           style={{
//             objectFit: 'cover',
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//           }}
//           {...props}
//         />
//       </div>
//     )
//   },
// })
