import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import DataInput from 'components/molecules/DateInput';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: ' 100vh',
        }}
      >
        <DataInput label="Label name" isOpen onClick={(date) => console.log(date)} />
      </div>
    </>
  );
}

export default App;
