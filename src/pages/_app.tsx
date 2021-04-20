import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { Provider as SessionProvider } from 'next-auth/client';
import { AuthProvider } from 'contexts/AuthContext/AuthContext';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <AuthProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </SessionProvider>
  );
}
