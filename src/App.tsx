import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import DataInput from 'components/molecules/DateInput';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <DataInput labelName="Label name" />
    </>
  );
}

export default App;
