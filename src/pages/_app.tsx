import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
