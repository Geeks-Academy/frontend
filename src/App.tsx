import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import MultiSelect from './components/atoms/MultiSelect/index';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <MultiSelect isMulti />
      </div>
    </>
  );
}

export default App;
