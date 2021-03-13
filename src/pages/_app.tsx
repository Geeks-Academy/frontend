import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
