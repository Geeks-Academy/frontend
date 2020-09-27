import Home from 'pages/Home';
import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import Loader from 'components/atoms/Loader';
import Test from 'components/Test';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Home />
      <Loader />
      <Test />
    </>
  );
};

export default App;
