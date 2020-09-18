import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import MultiSelect from './components/atoms/MultiSelect';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <MultiSelect isMulti />
    </>
  );
}

export default App;
